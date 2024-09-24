import express, { urlencoded } from 'express';
import morgan from "morgan";
import cors from "cors";


class ServeBootstrap {
    public app:  express.Application = express();
    private port: number = 7000;

    constructor(){
        this.app.use(express.json());
        this.app.use(urlencoded({extended: true}));
        this.app.use(morgan("dev"));
        this.app.use(cors());

        this.app.get("/api", (req, res)=> {
            res.status(200).json({
                message: "Primer Punto de entrada!!!"
            });
        })
        this.listen();
    }

    public listen(){
        this.app.listen(this.port, ()=>{
            console.log("El serve esta activo en el puerto " + this.port);
        });
    }
}

new ServeBootstrap();