import express, { urlencoded } from 'express';
import morgan from "morgan";
import cors from "cors";
import { UserRouter } from './router/user.router';


class ServeBootstrap {
    public app:  express.Application = express();
    private port: number = 7000;

    constructor(){
        this.app.use(express.json());
        this.app.use(urlencoded({extended: true}));
        this.app.use(morgan("dev"));
        this.app.use(cors());

        this.app.use("/api", this.routers());
        this.listen();
    }

    routers():Array<express.Router>{
        return [new UserRouter().router];
    };

    public listen(){
        this.app.listen(this.port, ()=>{
            console.log("El serve esta activo en el puerto " + this.port);
        });
    }
}

new ServeBootstrap();