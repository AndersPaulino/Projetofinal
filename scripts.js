let lista = [];
let url = `https://free-to-play-games-database.p.rapidapi.com/api/games`;
let i = 0;
let x = 10;
let favoritos =  JSON.parse(localStorage.getItem('Favoritos')) || [];



const options = {
  method: 'GET',
  headers: {
      'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com',
      'X-RapidAPI-Key': '756224436cmsh60d57eed64064e9p155bb6jsn5bbadf6424cb'
  }
};

fetch(url, options)
  .then(response => response.json())
  .then((data) => {
      lista = data;
      jogos()
  }).catch((e) => {console.log(e);})

function jogos() {
  let print = "";
 
  let lista2 = [];
  let lista3 = [];

  lista2 = lista;
  
  lista3 = lista2.slice(i,x);
  lista3.forEach((value) => {
      print = print + `<div class="card">
                          <img src="${value.thumbnail}" alt="imagem" class="img">
                          <h1 class="titulo">
                            ${value.title}
                          </h1>
                          <p>
                            Genero: ${value.genre}
                          </p>
                          <p>
                            Plataforma: ${value.platform}
                          </p>
                          <p>
                            Lançamento: ${value.release_date}
                          </p>  
                            <a href="${value.game_url}">Jogar</a>
                            <button class="salvar" name="${value.title}">Favoritos</button>
                        </div>`
  })
  
  
  document.getElementById('baner').innerHTML = print;

  document.querySelector('.salvar').onclick = function(){
    const dataSource = document.querySelector('.salvar').name
    
    favoritos.push(dataSource)
    localStorage.setItem('title', JSON.stringify(favoritos))
  }
}
function fav(){
  fetch(url, options)
  .then(response => response.json())
  .then((data) => {
    lista = data.filter(p => p.title === favoritos)
    jogos()
  }).catch((e) => {console.log(e);})
}
function troca1(){
  fetch(url, options)
  .then(response => response.json())
  .then((data) => {
    lista = data.filter(p => p.genre === "Shooter");
    jogos()
  }).catch((e) => {console.log(e);})
}

function rpg(){
  fetch(url, options)
  .then(response => response.json())
  .then((data) => {
    lista = data.filter(p => p.genre === "MMORPG");
    jogos()
  }).catch((e) => {console.log(e);})
}

function pc(){
  fetch(url, options)
  .then(response => response.json())
  .then((data) => {
    lista = data.filter(p => p.platform === "PC (Windows)");
    jogos()
  }).catch((e) => {console.log(e);})
}
function browser(){
  fetch(url, options)
  .then(response => response.json())
  .then((data) => {
    lista = data.filter(p => p.platform === "Web Browser");
    jogos()
  }).catch((e) => {console.log(e);})
}
function moba(){
  fetch(url, options)
  .then(response => response.json())
  .then((data) => {
    lista = data.filter(p => p.genre === "Moba");
    jogos()
  }).catch((e) => {console.log(e);})
}
function zombie(){
  fetch(url, options)
  .then(response => response.json())
  .then((data) => {
    lista = data.filter(p => p.id === 188);
    jogos()
  }).catch((e) => {console.log(e);})
}
function card(){
  fetch(url, options)
  .then(response => response.json())
  .then((data) => {
    lista = data.filter(p => p.genre === "Card Game");
    jogos()
  }).catch((e) => {console.log(e);})
}
function fighting(){
  fetch(url, options)
  .then(response => response.json())
  .then((data) => {
    lista = data.filter(p => p.genre === "Fighting");
    jogos()
  }).catch((e) => {console.log(e);})
}
function race(){
  fetch(url, options)
  .then(response => response.json())
  .then((data) => {
    lista = data.filter(p => p.genre === "Racing");
    jogos()
  }).catch((e) => {console.log(e);})
}
function home(){
  fetch(url, options)
  .then(response => response.json())
  .then((data) => {
    lista = data;
    jogos()
  }).catch((e) => {console.log(e);})
}
function todos(){
  fetch(`https://free-to-play-games-database.p.rapidapi.com/api/games?sort-by=alphabetical`, options)
  .then(response => response.json())
  .then((data) => {
    lista = data;
    jogos()
  }).catch((e) => {console.log(e);})
}
function slice(){
  i+=10;
  x+=10;
  jogos();
}
function voltar(){
  if(i <= 0 && x <=10){
    i=0;
    x=10;
  }else{
    i-=10;
    x-=10;
  }
  jogos();
}
function inicio(){
  i=0;
  x=10;
  jogos();
}
