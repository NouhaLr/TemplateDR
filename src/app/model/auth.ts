export class AuthenticationRequest {
    email!: string;
    password!: string;
}

export class AuthenticationResponse {
    token!: string;
    profile!: string;
    user: any;

}
export class RegisterRequest {
    firstname!: string;
    lastname!: string;
    email!: string;
    password!: string;
}