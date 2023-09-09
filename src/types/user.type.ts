// import { GetRol } from './rol.type';
//? obtener
export interface GetUser{
    id: number
    name: string
    lastName: string
    age: number
    gender: string
    email: string
    password: string
    isActive: boolean
    rol: {
        id: number
        rol: string
        isActive: boolean
    }
    rolId: number;
}

export interface CreateUser{
    name: string
    lasName: number
    age: number
    gender:string
    email: string
    password: string
    isActive: boolean
    rolId: number
    // add rol: string
}

export interface UpdateUser{
    id: number
    name: string
    lasName: number
    age: number
    email: string
    isActive: boolean
    rolId: number
}

export interface PaginationUser {
    users: GetUser[];
    total: number;
    totalPages: number;
    nextPag: number;
    prevPag: number;
    currentPage: number;
}