import { ProductModel } from "../types";

export interface GetProductsInput {
    q: unknown,
    token: string | undefined
}

export type GetProductsOutput = ProductModel[]

export interface CreateProductInput {
    name: unknown,
    price: unknown
}

export interface CreateProductOutput {
    message: string,
    product: ProductModel
}