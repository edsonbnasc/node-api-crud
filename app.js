import express from "express";

const app = express();
app.use(express.json());
//não é necesseria
// app.get('/',(req,res) => {
//     res.status(200).send('ok');
// });

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

//função para realizar a busca no banco de dados
function buscaCarro(id){
    return carros.findIndex(carros =>{
        return carros.id === Number(id);
    })
}

// app.get("/carros", (req,res) =>{
    //     res.status(200).json(carros);
    // });
    
    // //cadastrar um elemento ao banco de dados
    // app.post("/carros", (req,res) =>{
        //     carros.push(req.body);
        //     res.status(201).send("Cadastrado  com sucesso!");
        // });
app.route("/carros")//junta as rotas que sao igauis num unico bloco
.get((req,res) =>{
    res.status(200).json(carros);
})
.post((req,res) =>{
    carros.push(req.body);
    res.status(201).send("Cadastrado  com sucesso!");
});
        
//buscar por um id no banco de dados
// app.get("/carros/:id", (req,res) =>{
//     const id = buscaCarro(req.params.id);
//     res.status(200).json(carros[id]);
// });

// //editar um id no banco de dados
// app.put("/carros/:id", (req,res) => {
//     const id = buscaCarro(req.params.id);
//     carros[id].marca = req.body.marca;
//     carros[id].modelo = req.body.modelo;
//     res.status(200).json(carros[id]);
// });

// //deletar o id no banco de dados
// app.delete("/carros/:id", (req,res) => {
//     const id = buscaCarro(req.params.id);
//     if (carros[id]) {
//         carros.splice(id, 1);
//         res.status(200).send("Deletado com sucesso!");
//     } else {
//         res.status(404).send("Carro não encontrado!");
        
//     }
//     console.log(id);
// })

//cria um bloco para as mesmas paginas
app.route("/carros/:id")
.get((req,res) =>{
    const id = buscaCarro(req.params.id);
    res.status(200).json(carros[id]);
})
.put((req,res) => {
    const id = buscaCarro(req.params.id);
    carros[id].marca = req.body.marca;
    carros[id].modelo = req.body.modelo;
    res.status(200).json(carros[id]);
})
.delete((req,res) => {
    const id = buscaCarro(req.params.id);
    if (carros[id]) {
        carros.splice(id, 1);
        res.status(200).send("Deletado com sucesso!");
    } else {
        res.status(404).send("Carro não encontrado!");
        
    }
    console.log(id);
})

export default app;