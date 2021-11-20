const express = require('express')
const app = express()
const port = 3000

app.use(express.urlencoded({extended: false}))
app.use(express.json())
app.use(express.static('public'));

const connect = require('./schemas');
connect();

const goodsRouter = require("./routers/goods");
app.use("/api", [goodsRouter]); //api 하위 라우터에서 쓸거임

// const goodsRouter = require('./routes/goods'); // 라우트의 굿즈
// const userRouter = require('./routes/user');
// app.use('/goods', goodsRouter)
// app.use('/user', userRouter)

// app.use((req, res, next) => { //route에 들어오기전 req 콘솔에 출력
//   console.log(req);
//   next(); // => 미들웨어 종료
// });

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/test', (req, res) => {
  let name = req.query.name; //req의 query.name
  res.render('test', {name}); //분기 부분
})

app.get('/home', (req, res)=> {
  res.render('index');
})

app.get('/detail', (req, res)=> {
  res.render('detail');// 어떤 탬플릿엔진파일과 연결해줄꺼니
})

app.get('/cart', (req, res)=> {
  res.render('cart')
})

app.get('/order', (req, res) => {
  res.render('order')
})


app.listen(port, () => {
  console.log(`listening at http://localhost:${port}`)
})
