import {review} from './review'

export interface card{
    id: number;
    product:string,
    productSummary?:string,
    price:number,
    sellerName:string,
    image:string,
    reviews?:Array<review>,
}

