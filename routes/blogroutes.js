const express = require("express");
const blogController = require("../controllers/blogcontroller");
const router = express.Router();

router.get("/",blogController.BlogIndex);
router.post("/",blogController.BlogCreatePost);
router.get("/create",blogController.BlogCreateGet);
router.get("/:id",blogController.BlogDetails);
router.delete("/:id",blogController.BlogDelete)

module.exports = router;