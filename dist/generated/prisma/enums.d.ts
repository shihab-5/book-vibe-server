export declare const UserRole: {
    readonly ADMIN: 'ADMIN';
    readonly CUSTOMER: 'CUSTOMER';
};
export type UserRole = (typeof UserRole)[keyof typeof UserRole];
export declare const OrderStatus: {
    readonly PENDING: 'PENDING';
    readonly PROCESSING: 'PROCESSING';
    readonly SHIPPED: 'SHIPPED';
    readonly DELIVERED: 'DELIVERED';
    readonly CANCELLED: 'CANCELLED';
};
export type OrderStatus = (typeof OrderStatus)[keyof typeof OrderStatus];
//# sourceMappingURL=enums.d.ts.map