require('dotenv').config();
const Koa = require('koa');
const Router = require('koa-router');
const bodyParser = require('koa-bodyparser');

const { 
  PORT: port = 4000,
  MONGO_URI: mongoURI,
} = process.env;

const api = require('./api');
const app = new Koa();
const router = new Router();

router.use('/api', api.routes()); // api 라우트 적용
app.use(bodyParser());

// app 인스턴스에 라우터 적용
app.use(router.routes()).use(router.allowedMethods());

app.listen(port, () => {
  console.log('listening to port', port);
});
