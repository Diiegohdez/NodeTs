import { Router } from "express";

export class BaseRouter<T>{
    public router: Router;
    public controlle:T;
    constructor(Tcontrolle: {new (): T}){
        this.router = Router()
        this.controlle = new Tcontrolle()
        this.routes()
    }

    routes(){}
}