const Post = require('models/post');
const { ObjectId } = require('mongoose').Types;
const Joi = require('joi');

/**
 * 올바른 mongoDB _id 값인지 검증
 * 올바른 값이 아니라면 400 Error를, 올바른 값이면 진행한다.
 * @param {*} ctx 
 * @param {*} next 
 */
exports.checkObjectId = (ctx, next) => {
  const { id } = ctx.params;
  if (!ObjectId.isValid(id)) {
    ctx.status = 400;
    return null;
  }
  return next();
};

/**
 * POST /api/posts
 * { title, body, tag }
 * @param {*} ctx 
 */
exports.write = async (ctx) => {
  const { title, body, tags } = ctx.request.body;
  const schema = Joi.object().keys({
    title: Joi.string().required(),
    body: Joi.string().required(),
    tags: Joi.array().items(Joi.string()).required(),
  });

  const result = Joi.validate(ctx.request.body, schema);

  if (result.error) {
    ctx.status = 400;
    ctx.body = result.error;
  }

  const post = new Post({
    title, body, tags,
  });
  try {
    await post.save();
    ctx.body = post;
  } catch (e) {
    ctx.throw(e, 500);
  }
};
exports.list = async (ctx) => {
  const page = parseInt(ctx.query.page || 1, 10);
  const { tag } = ctx.query;
  const query = tag ? { tags: tag } : {};
  if (page < 1) {
    ctx.status = 400;
    return;
  }
  try {
    const posts = await Post.find(query)
      .sort({ _id: -1 })
      .limit(10)
      .skip((page - 1) * 10)
      .lean()
      .exec();

    const postCount = await Post.count(query).exec();
    ctx.body = posts.map(post => ({
      ...post,
      body: post.body.length < 350 ? post.body : `${post.body.slice(0, 350)}...`,
    }));
    ctx.set('Last-Page', Math.ceil(postCount / 10));
  } catch (e) {
    ctx.throw(e, 500);
  }
};
exports.read = async (ctx) => {
  const { id } = ctx.params;

  try {
    const post = await Post.findById(id).exec();
    if (!post) {
      ctx.status = 404;
      return;
    }
    ctx.body = post;
  } catch (e) {
    ctx.throw(e, 500);
  }
};
exports.remove = async (ctx) => {
  const { id } = ctx.params;
  try {
    const post = await Post.findOneAndDelete({ _id: id }).exec();
    if (!post) {
      ctx.status = 404;
    }
    ctx.status = 204;
  } catch (e) {
    ctx.throw(e, 500);
  }
};
exports.update = async (ctx) => {
  const { id } = ctx.params;
  try {
    const post = await Post.findOneAndUpdate({ _id: id }, { $set: ctx.request.body }, { new: true });
    if (!post) {
      ctx.status = 404;
    }
    ctx.body = post;
  } catch (e) {
    ctx.throw(e, 500);
  }
};

exports.checkLogin = (ctx, next) => {
  if(!ctx.session.logged) {
    ctx.status = 401;
    return null;
  }
  return next();
}