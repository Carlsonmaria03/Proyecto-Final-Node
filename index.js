import "dotenv/config";
import express from "express";
const app = express();

app.get("/",(rep, res) => {
    res.json("Api Rest en Node.js");
});

import productsRouter from "./src/routes/products.router.js";
app.use("/api", productsRouter);

const PORT = process.env.PORT || 3001;

app.listen(PORT, ()=> console.log(`http://localhost:${PORT}`))