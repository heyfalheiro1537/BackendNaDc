export interface User {
    id: number;
    name: string;
    email: string;
    password: string;
    address: string;
    phone : string;
    createdAt: Date;
    updatedAt: Date;
}

export interface Product {
    id: number;
    category: string;
    condition: string;
    name: string;
    price: number;
    active: boolean;
    image: string;
    description: string;
    createdAt: Date;
    updatedAt: Date;
    userId: number;
}


  