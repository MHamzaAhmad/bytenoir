const router = require("express").Router();
const multer = require("multer");
const Image = require("../models/Image");

const storage = multer.memoryStorage();

const upload = multer({ storage: storage });

router.post("/upload", upload.single("image"), async (req, res) => {
  try {
    console.log(req.file);
    const image = {
      data: new Buffer.from(req.file.buffer, "base64"),
      contentType: req.file.mimetype,
    };
    const savedImage = await new Image({ image: image }).save();
    res.send({ id: savedImage._id });
  } catch (e) {
    res.send({ id: null });
    console.error(e);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const image = await Image.findById(req.params.id);
    const img = Buffer.from(image.image.data, "base64");
    res.send(img);
  } catch (e) {
    console.error(e);
  }
});

module.exports = router;
