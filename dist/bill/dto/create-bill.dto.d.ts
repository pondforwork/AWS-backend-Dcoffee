declare class CreatedBillDetailDto {
    materialId: number;
    price: number;
    amount: number;
}
export declare class CreateBillDto {
    shop_name: string;
    buy: number;
    employeeId: number;
    billDetails: CreatedBillDetailDto[];
}
export {};
