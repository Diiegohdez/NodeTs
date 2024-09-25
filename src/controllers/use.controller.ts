import { Request, Response } from "express";

export class UseController{
    getUser(req:Request, res:Response){
        res.status(200).json({
            user: "juan v",
        });
    }
}