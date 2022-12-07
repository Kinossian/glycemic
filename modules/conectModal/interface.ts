export interface SignInterface {
    email: string;
    password: string;
    pseudo: string;
}

export type SignInInterface = Omit<SignInterface, "pseudo">;

export interface SignInt2 extends SignInterface {
    pseudo: string;
}
