const express = require("express");
const router = express.Router();
const {
  createList,
  getLists,
  getListById,
} = require("../controller/ListController");

router.post("/list", createList);
router.get("/lists", getLists);
router.get("/list/:id", getListById);

module.exports = router;
