import "dotenv/config";
import express from "express";
const app = express();

app.use(express.json());

app.get("/",(rep, res) => {
    res.json("Api Rest en Node.js");
});

import productsRouter from "./src/routes/products.router.js";
app.use("/api", productsRouter);

import authRouter from "./src/routes/auth.router.js";
app.use("/api/auth", authRouter);

const PORT = process.env.PORT || 3001;

app.listen(PORT, ()=> console.log(`http://localhost:${PORT}`))