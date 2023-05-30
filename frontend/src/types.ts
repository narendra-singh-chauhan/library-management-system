export type Address = {
    street: string;
    city: string;
    state: string;
    postalCode: string;
};

export type User = {
    firstName: string,
    lastName: string,
    email: string,
    password: string,
    phone: string,
    dob: Date,
    address: Address
};