import { error } from "console";
import express from "express";
const app = express();

const products = [ {

},
{

},
{

},
];

app.get("/",(rep, res) => {
    res.send("Api Rest en Node.js");
});

app.get("/products", (req, res)=> {
    res.json(products);
});

app.get("/products/:id", (req, res)=> {
    const {id} = req.params;
    
    const product = products.find((item)=> item.id);
    if (!product){
        res.status(404).json({ error: "No existe el protucto"});
    }
    res.json(products);
});

const PORT = 3000;
app.listen(PORT, ()=> console.log(`http://localhost:${PORT}`))