const router = require("express").Router();

const clothingItem = require("./clothingItems");

const users = require("./users");

const likes = require("./likes");

const auth = require("../middlewares/auth");

const { NONEXISTENT_ERROR_CODE } = require("../utils/errors");

const { createUser, login } = require("../controllers/users");

router.post("/signin", login);

router.post("/signup", createUser);

router.use("/items", auth, clothingItem);
router.use("/users", users);
router.use("/items", auth, likes);

router.use((req, res) => {
  res
    .status(NONEXISTENT_ERROR_CODE)
    .send({ message: "Requested resource not found" });
});

module.exports = router;
