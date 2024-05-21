import express from "express";

const app = express();
app.use(express.json());

app.get('/',(req,res) => {
    res.status(200).send('ok');
});

const carros = [
    {
        id: 1,
        marca: "FIAT",
        modelo: "Uno"
    },
    {
    id: 2,
    marca: "HONDA",
    modelo: "Civic"
    },
    {
    id: 3,
    marca: "BMW",
    modelo: "Z4"
    }

]

function buscaCarro(id){
    return carros.findIndex(carros =>{
        return carros.id === Number(id);
    })
}


app.get("/carros", (req,res) =>{
    res.status(200).json(carros);
});

app.get("/carros/:id", (req,res) =>{
    const id = buscaCarro(req.params.id);
    res.status(200).json(carros[id]);
});

app.post("/carros", (req,res) =>{
    carros.push(req.body);
    res.status(201).send("Cadastrado  com sucesso!");
});


export default app;