require("dotenv").config();
const express = require("express");
const req = require("express/lib/request");
const res = require("express/lib/response");
const path = require("path");
const app = express();

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded());

const port = process.env.PORT || 3000;

const pokedex = [
  {
    id: 1,
    nome: "Bulbasaur",
    imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png",
    descricao:
      "There is a plant seed on its back right from the day this Pokémon is born. The seed slowly grows larger.",
    altura: "0.7m",
    peso: "6.9kg",
    categoria: "Seed",
    habilidade: "Overgrow",
    tipo: "Grass",
  },
  {
    id: 2,
    nome: "Charmander",
    imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png",
    descricao:
      "It has a preference for hot things. When it rains, steam is said to spout from the tip of its tail.",
    altura: "0.6m",
    peso: "8.5kg",
    categoria: "Lizard",
    habilidade: "Blaze",
    tipo: "Fire",
  },
  {
    id: 3,
    nome: "Pikachu",
    imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png",
    descricao:
      "Pikachu that can generate powerful electricity have cheek sacs that are extra soft and super stretchy.",
    altura: "0.4m",
    peso: "6.0kg",
    categoria: "Mouse",
    habilidade: "Static",
    tipo: "Electric",
  },
];

// Rotas
app.get("/", (req, res) => {
  res.render("index", { pokedex });
});

app.get("/register", (req, res) => {
  res.status(200).render("register.ejs");
});

app.get("/details/:id", (req, res) => {
  let pokemon = [];
  pokedex.filter((elemento) => {
    if (elemento.id == req.params.id) {
      pokemon.push(elemento);
    }
  });
  res.status(200).render("details.ejs", {
    pokemon,
  });
});

// Criar novo objeto
app.post("/create", (req, res) => {
  const pokemon = req.body;
  pokemon.id = pokedex.length + 1;
  pokedex.push(pokemon);
  res.redirect("/");
});

app.listen(port, () =>
  console.log(`Servidor rodando em http://localhost:${port}`)
);