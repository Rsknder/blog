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

export interface Post {
    id?: string,
    title: string,
    text: string,
    author: string
    date: Date
}

export interface DbCreateResponse {
    name?: string
}
