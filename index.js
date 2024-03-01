const url="https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single"
const button=document.getElementById("btn");
const joke=document.getElementById("joke");
function getjoke(){
    fetch(url)
    .then((data)=>{
        return data.json()

    .then((item)=>{
        joke.innerHTML=item.joke;
    })
    })
}

button.addEventListener("click",getjoke);