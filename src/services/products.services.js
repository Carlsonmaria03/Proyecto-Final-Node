import * as Model from "../models/products.models.js";

export const getAllProducts = async () => {
   return await Model.getAllProducts();
};

export const getProductById = async (id) => {
   return await Model.getProductById(id);
};