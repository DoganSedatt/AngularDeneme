import { Product } from "./product";

export interface ResponseModel {
    items: Product[];
    index: number;
    size: number;
    count: number;
    pages: number;
    hasPrevious: boolean;
    hasNext: boolean;
}