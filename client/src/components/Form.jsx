import React, { useState } from "react";
import { useCreateProductMutation } from "../services/productApi";

const Form = () => {
  const [createProduct, { isLoading }] = useCreateProductMutation();
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [rating, setRating] = useState("");

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      await createProduct({ name, description, price, rating });
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <div>
      <form onSubmit={onSubmitHandler}>
        <input
          type="text"
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
        <input
          type="text"
          onChange={(e) => setDescription(e.target.value)}
          value={description}
        />
        <input
          type="number"
          onChange={(e) => setPrice(e.target.value)}
          value={price}
        />
        <input
          type="number"
          onChange={(e) => setRating(e.target.value)}
          value={rating}
        />

        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default Form;
