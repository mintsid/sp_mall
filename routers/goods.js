const express = require("express");
const Goods = require("../schemas/goods");
const router = express.Router();

const Cart = require("../schemas/cart");

router.get("/goods", async (req, res, next) => {
  try {
    const { category } = req.query;//query스트링 안에 category라는 것을 변수로 사용하겠다.
    const goods = await Goods.find({ category }).sort("-goodsId");
    res.json({ goods: goods });//json 형식으로 내려줄껴
  } catch (err) {
    console.error(err);
    next(err);
  }
});

router.get("/goods/:goodsId", async (req, res) => { //API의 goods의 goodsId(특정값. 실제로 오는건 아님)라고 : 시작하면 그 값을 이런 이름의 변수로 가져다 쓰겠다
  const { goodsId } = req.params;//위의 굿즈id가 변수로 뙁!! => 리퀘스트 파람스에 담김
  goods = await Goods.findOne({ goodsId: goodsId });
  res.json({ detail: goods });
});

router.post('/goods', async (req, res) => {
  const { goodsId, name, thumbnailUrl, category, price } = req.body;

  isExist = await Goods.find({ goodsId });
  if (isExist.length == 0) {
    await Goods.create({ goodsId, name, thumbnailUrl, category, price });
  }
  res.send({ result: "success" });
});

//상품담기
router.post("/goods/:goodsId/cart", async (req, res) => {
  const { goodsId } = req.params;
  const { quantity } = req.body;

  isCart = await Cart.find({ goodsId });
  console.log(isCart, quantity);
  if (isCart.length) {
    await Cart.updateOne({ goodsId }, { $set: { quantity } });
  } else {
    await Cart.create({ goodsId: goodsId, quantity: quantity });
  }
  res.send({ result: "success" });
});

//상품삭제
router.delete("/goods/:goodsId/cart", async (req, res) => {
  const { goodsId } = req.params;

  const isGoodsInCart = await Cart.find({ goodsId });
  if (isGoodsInCart.length > 0) {
    await Cart.deleteOne({ goodsId });
  }

  res.send({ result: "success" });
});


router.get("/cart", async (req, res) => { //cart에 장바구니 정보 가져옴
  const cart = await Cart.find({});
  const goodsId = cart.map(cart => cart.goodsId);

  goodsInCart = await Goods.find()
    .where("goodsId")
    .in(goodsId);

  concatCart = cart.map(c => {
    for (let i = 0; i < goodsInCart.length; i++) {
      if (goodsInCart[i].goodsId == c.goodsId) {
        return { quantity: c.quantity, goods: goodsInCart[i] };
      }
    }
  });

  res.json({
    cart: concatCart
  });
});

//수량변경 
router.patch("/goods/:goodsId/cart", async (req, res) => {
  const { goodsId } = req.params;
  const { quantity } = req.body;

  isCart = await Cart.find({ goodsId });
  //console.log(isCart, quantity);
  if (isCart.length) {
    await Cart.updateOne({ goodsId }, { $set: { quantity } });
  }

  res.send({ result: "success" });
})
module.exports = router;