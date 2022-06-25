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

const Input = styled("input")({
  display: "none",
});

const Control = () => {
  const { data: productsList, isLoading: isFetching } = useGetProductsQuery();
  const [createProduct] = useCreateProductMutation();
  const [deleteProduct] = useDeleteProductMutation();
  const [editProduct] = useEditProductMutation();
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [rating, setRating] = useState("");
  const [img, setImg] = useState("");
  const [currentId, setCurrentId] = useState("");

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", name);
    formData.append("description", description);
    formData.append("price", price);
    formData.append("rating", rating);

    try {
      if (currentId) {
        await editProduct(formData);
        console.log("Product successfully edited");
        clean();
      } else {
        await createProduct(formData);
        console.log("Product successfully created");
        clean();
      }
    } catch (e) {
      console.log(e);
    }
  };

  const onDeleteHandler = async (id) => await deleteProduct(id);

  const onClickEdit = (id) => setCurrentId(id);

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
            <form onSubmit={onSubmitHandler}>
              <TextField
                id="outlined-basic"
                label="Name"
                variant="outlined"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="form-input"
              />
              <TextField
                id="outlined-basic"
                type={"number"}
                label="Price"
                variant="outlined"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                className="form-input"
              />
              <TextField
                id="outlined-basic"
                label="Description"
                variant="outlined"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="form-input"
              />
              <Rating
                precision={0.5}
                size="medium"
                value={rating}
                onChange={(e) => setRating(e.target.value)}
                className="form-rating"
              />
              <label htmlFor="contained-button-file" className="form-input">
                <Input
                  accept="image/*"
                  id="contained-button-file"
                  multiple
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
                Create
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
                      <img src={p.img} alt="img" />
                    </div>
                    <span className="name">{p.name}</span>
                    <span className="price">{p.price}</span>
                    <div className="icons">
                      <button
                        className="edit"
                        onClick={() => onClickEdit(p._id)}
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
