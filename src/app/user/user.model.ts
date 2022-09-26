export interface IUser {
    _id?:string
    fullusername:string
    email:string
    password?:string
    city?:string
    phone?:string
    isGranted:boolean
    token?:string
}