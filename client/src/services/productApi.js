import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_URL } from "../constants";

const productApiHeaders = {
  "Content-Type": "application/json",
};

export const productApi = createApi({
  reducerPath: "productsApi",
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL, headers: productApiHeaders }),
  tagTypes: ["Products"],
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: (count) => ({
        url: `/api/product?count=${count}`,
      }),
      providesTags: ["Products"],
    }),
    getProduct: builder.query({
      query: (id) => ({
        url: `/api/product/${id}`,
      }),
    }),
    createProduct: builder.mutation({
      query: (product) => ({
        url: "/api/product",
        method: "POST",
        body: product,
      }),
      invalidatesTags: ["Products"],
    }),
    editProduct: builder.mutation({
      query: (updatedProduct) => ({
        url: `/api/product/${updatedProduct.get("_id")}`,
        method: "PATCH",
        body: updatedProduct,
      }),
      invalidatesTags: ["Products"],
    }),
    deleteProduct: builder.mutation({
      query: (id) => ({ url: `/api/product/${id}`, method: "DELETE" }),
      invalidatesTags: ["Products"],
    }),
  }),
});

export const {
  useGetProductsQuery,
  useCreateProductMutation,
  useEditProductMutation,
  useDeleteProductMutation,
  useGetProductQuery,
} = productApi;
