const { default: mongoose } = require("mongoose");
const Product = require("../models/Product");
const ErrorResponse = require("../utils/ErrorResponse");
const deleteFile = require("../utils/fileDelete");

exports.getAll = async (req, res, next) => {
  try {
    const count = req.query.count;

    const products = await Product.find().limit(count);

    res.status(200).json({ success: true, data: products });
  } catch (e) {
    next(e.message);
  }
};

exports.getOne = async (req, res, next) => {
  const { id } = req.params;
  try {
    const product = await Product.findById(id);

    res.status(200).json({ success: true, data: product });
  } catch (e) {
    next(e.message);
  }
};

exports.create = (req, res, next) => {
  const product = req.body;
  const newProduct = new Product(product);
  try {
    newProduct.save();

    res.status(201).json({ success: true, data: newProduct });
  } catch (e) {
    next(e.message);
  }
};

exports.edit = async (req, res, next) => {
  const { id } = req.params;
  if (req.body.img) {
    const oldProduct = await Product.findById(id).select("img");
    deleteFile(oldProduct.img);
  }
  const product = req.body;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return new ErrorResponse("There is not product with this id");
  }
  try {
    const updatedProduct = await Product.findByIdAndUpdate(
      id,
      {
        ...product,
        id,
      },
      { new: true }
    );

    res.status(200).json({ success: true, data: updatedProduct });
  } catch (e) {
    next(e.message);
  }
};

exports.deleteOne = async (req, res, next) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return new ErrorResponse("There is not product with this id");
  }
  try {
    const product = await Product.findById(id).select("img");
    deleteFile(product.img);

    await Product.findByIdAndRemove(id);

    res
      .status(200)
      .json({ success: true, message: "Product successfully deleted" });
  } catch (e) {
    next(e.message);
  }
};
