const Post = require('models/post');

/**
 * POST /api/posts
 * { title, body, tag }
 * @param {*} ctx 
 */
exports.write = async (ctx) => {
  const { title, body, tags } = ctx.request.body;
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
  try {
    const posts = await Post.find().exec();
    ctx.body = posts;
  } catch (e) {
    ctx.throw(e, 500);
  }
};
exports.read = async (ctx) => {
  const { id } = ctx.params;
  try {
    const post = await Post.findById(id).exec();
    if(!post) {
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
