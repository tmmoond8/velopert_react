const { ADMIN_PASS: adminPass } = process.env;
exports.login = (ctx) => {
  const { password } = ctx.request.body;
  console.log(password);
  console.log(adminPass);
  if (adminPass === password) {
    ctx.body = {
      success: true,
    };
    ctx.session.logged = true;
  } else {
    ctx.body = {
      success: false,
    }
    ctx.status = 401;
  }
};

exports.check = (ctx) => {
  ctx.body = {
    logged: !!ctx.session.logged,
  };
};

exports.logout = (ctx) => {
  ctx.session = null;
  ctx.status = 204;
};

exports.checkLogin = ({ ctx, next }) => {
  if (!ctx.session.logged) {
    ctx.status = 401;
    return null;
  }
  return next();
}