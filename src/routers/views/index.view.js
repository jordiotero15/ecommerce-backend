import { Router } from "express";

const viewsRouter = Router();

viewsRouter.get("/", (req, res, next) =>{
    try {
        return res.render("index", show);
    } catch (error) {
        return next(error);
    }
} )

export default viewsRouter;