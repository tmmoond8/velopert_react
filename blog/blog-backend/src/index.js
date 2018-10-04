require('dotenv').config();

const Koa = require('koa');
const Router = require('koa-router');
const bodyParser = require('koa-bodyparser');
const mongoose = require('mongoose');
const session = require('koa-session');
const api = require('./api');
const ssr = require('./ssr');

const {
  PORT: port = 4000,
  MONGO_URI: mongoURI,
  COOKIE_SIGN_KEY: signKey,
} = process.env;

mongoose.Promise = global.Promise;
mongoose.connect(mongoURI, { useNewUrlParser: true }).then(() => {
  console.log('connected to mongodb');
}).catch((e) => {
  console.error(e);
});

const app = new Koa();
const router = new Router();

router.use('/api', api.routes()); // api 라우트 적용
router.get('/', ssr);
app.use(bodyParser());

const sessionConfig = {
  maxAge: 86400000, // 하루
  // signed: true  // default
};

app.use(session(sessionConfig, app));
app.keys = [signKey];

// app 인스턴스에 라우터 적용
// app.use(router.routes()).use(router.allowedMethods());
app.use(ssr);

app.listen(port, () => {
  console.log('listening to port', port);
});
