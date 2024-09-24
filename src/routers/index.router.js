import { Router } from "express";
import apiRouter from "./api/index.api.js";

const router = Router();

router.use("/api", apiRouter);
//router.use("/", viewRouter);

export default router;
