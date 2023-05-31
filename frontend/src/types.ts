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

export type AccessToken = string | null;

export type RefreshToken = string | null;

export type Auth = {
    user: User | null,
    accessToken: AccessToken | null,
    refreshToken: RefreshToken | null,
};