declare class CreatedOrderItemDto {
    productId: number;
    amount: number;
}
export declare class CreateOrderDto {
    empId: number;
    tel: string;
    storeId: number;
    discount: number;
    payment: string;
    recevied: number;
    orderItems: CreatedOrderItemDto[];
}
export {};
