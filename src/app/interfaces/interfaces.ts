export interface User {
    email: string,
    password: string,
    returnSecureToken: boolean
}

export interface FbAuthResponse {
    kind: string,
    localId: string,
    email: string,
    displayName: string,
    idToken: string,
    registered: boolean,
    expiresIn: string
}

