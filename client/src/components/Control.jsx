import React, { useState } from "react";
import {
  useCreateProductMutation,
  useDeleteProductMutation,
  useEditProductMutation,
  useGetProductsQuery,
} from "../services/productApi";

import ModeEditOutlineOutlinedIcon from "@mui/icons-material/ModeEditOutlineOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import { Button, Rating, TextField } from "@mui/material";
import { styled } from "@mui/material/styles";
import { BASE_URL } from "../constants";
import { useEffect } from "react";

const Input = styled("input")({
  display: "none",
});

const formatter = new Intl.NumberFormat("en-EN", {
  style: "currency",
  currency: "USD",
  maximumFractionDigits: 2,
});

const Control = () => {
  const { data: productsList, isLoading: isFetching } = useGetProductsQuery();
  const [createProduct] = useCreateProductMutation();
  const [deleteProduct] = useDeleteProductMutation();
  const [editProduct] = useEditProductMutation();
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [rating, setRating] = useState(0);
  const [img, setImg] = useState("");
  const [currentId, setCurrentId] = useState("");

  useEffect(() => {
    if (currentId) {
      const currentProduct = productsList?.data?.find(
        (p) => p._id === currentId
      );
      setName(currentProduct.name);
      setDescription(currentProduct.description);
      setPrice(currentProduct.price);
      setRating(currentProduct.rating);
      setImg(currentProduct.img);
    }
  }, [currentId, productsList]);

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", name);
    formData.append("description", description);
    formData.append("price", price);
    formData.append("rating", rating);
    formData.append("img", img);

    try {
      if (currentId) {
        formData.append("_id", currentId);
        await editProduct(formData);
        clean();
      } else {
        await createProduct(formData);
        clean();
      }
    } catch (e) {
      console.log(e.message);
    }
  };

  const onDeleteHandler = async (id) => {
    await deleteProduct(id);
    clean();
  };

  const clean = () => {
    setName("");
    setDescription("");
    setRating("");
    setPrice("");
    setImg("");
    setCurrentId("");
  };

  return (
    <div className="control">
      <div className="container">
        <div className="control-box">
          <div className="control-form">
            <h4>Product form</h4>
            <form className="control-formData" onSubmit={onSubmitHandler}>
              <TextField
                id="outlined-basic"
                label="Name"
                variant="outlined"
                value={name}
                name="name"
                onChange={(e) => setName(e.target.value)}
                className="form-input"
              />
              <TextField
                id="outlined-basic"
                type={"number"}
                label="Price"
                variant="outlined"
                value={price}
                name="price"
                onChange={(e) => setPrice(e.target.value)}
                className="form-input"
              />
              <TextField
                id="outlined-basic"
                label="Description"
                variant="outlined"
                value={description}
                name="description"
                onChange={(e) => setDescription(e.target.value)}
                className="form-input"
              />
              <Rating
                precision={0.5}
                size="medium"
                value={rating}
                name="rating"
                onChange={(e) => setRating(e.target.value)}
                className="form-rating"
              />
              <label htmlFor="contained-button-file" className="form-input">
                <Input
                  accept="image/*"
                  id="contained-button-file"
                  name="img"
                  type="file"
                  onChange={(e) => setImg(e.target.files[0])}
                />
                <Button
                  variant="outlined"
                  component="span"
                  type="button"
                  size="large"
                >
                  Upload
                </Button>
              </label>
              <Button
                type="submit"
                variant="contained"
                style={{ padding: "8px 40px" }}
                size="large"
              >
                {currentId ? "Edit" : "Create"}
              </Button>
            </form>
          </div>
          <div className="control-list">
            <h4>Products list</h4>
            <ul className="control-menu">
              {(!isFetching &&
                productsList?.data?.map((p, idx) => (
                  <li className="control-item" key={idx}>
                    <span>#{idx + 1}</span>
                    <div className="img">
                      <img src={BASE_URL + p.img[0].thumbnail.path} alt="img" />
                    </div>
                    <span className="name">{p.name}</span>
                    <span className="price">{formatter.format(p.price)}</span>
                    <div className="icons">
                      <button
                        className="edit"
                        onClick={() => setCurrentId(p._id)}
                      >
                        <ModeEditOutlineOutlinedIcon />
                      </button>
                      <button
                        className="delete"
                        onClick={() => onDeleteHandler(p._id)}
                      >
                        <DeleteOutlineOutlinedIcon />
                      </button>
                    </div>
                  </li>
                ))) ||
                "There is no products"}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Control;
