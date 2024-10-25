import { getProductById, createProduct, allProducts, updateProduct, deleteProduct } from "../datalayer/product";
import { Product } from "../models/type";
import { fetchUser } from "./userService";

export async function fetchProduct(id: number) {

  const product = await getProductById(id);
  if (!product) {
    throw new Error(`Product with id ${id} not found`);
  }
  return product;
}

export async function fetchAllProducts() {

  const products = await allProducts();
  if (!products) {
    throw new Error("Something went wrong");
  }
  return products;
}

export async function createNewProduct(product: Product) {
    try {
        const user = await fetchUser(product.userId);
        const productCreated = await createProduct(product);
        return productCreated;
    } 
    catch (error:unknown){     
        throw new Error("User not found"); 
    }


}

export async function updateProductById(id: number, data: Partial<Product>) {    
  
  if (data.userId !== undefined) {
    try {
        const user = await fetchUser(data.userId);
    } 
    catch (error:unknown){      
    }
  }
  await updateProduct(id, data);
  const product = await getProductById(id);
  return product;
}

export async function deleteProductById(id: number){
  const product = await fetchProduct(id);
  if (!product) {
    throw new Error("Product not found");
  }
  await deleteProduct(id);

}