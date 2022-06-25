import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_URL } from "../constants";

// const productApiHeaders = {
//   "Content-Type": "application/json",
// };

const createRequest = (url, method = "GET", body = null) => ({
  url,
  // headers: productApiHeaders,
  method,
  body,
  credentials: "include",
});

export const productApi = createApi({
  reducerPath: "productsApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000" }),
  tagTypes: ["Products"],
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => createRequest("/api/product"),
      providesTags: ["Products"],
    }),
    createProduct: builder.mutation({
      query: (product) => {
        console.log(product.get("name"));
        return createRequest("/api/product", "POST", product);
      },
      invalidatesTags: ["Products"],
    }),
    editProduct: builder.mutation({
      query: (id, updatedProduct) => {
        console.log(updatedProduct);

        return createRequest(`/api/product/${id}`, "PATCH", updatedProduct);
      },
      invalidatesTags: ["Products"],
    }),
    deleteProduct: builder.mutation({
      query: (id) => createRequest(`/api/product/${id}`, "DELETE"),
      invalidatesTags: ["Products"],
    }),
  }),
});

export const {
  useGetProductsQuery,
  useCreateProductMutation,
  useEditProductMutation,
  useDeleteProductMutation,
} = productApi;
