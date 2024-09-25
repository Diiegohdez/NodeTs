import { UseController } from "../controllers/use.controller";
import { BaseRouter } from "./router";

export class UserRouter extends BaseRouter<UseController>{
    constructor(){
        super(UseController);
    }

    routes(): void {
        this.router.get("/user", (req, res)=> this.controlle.getUser(req, res))
    }
}