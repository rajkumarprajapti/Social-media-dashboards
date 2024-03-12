
let modebtn = document.querySelector("#mode");

let currmode = "light";

modebtn.addEventListener("click", () =>{
    if(currmode = "dark"){
    document.querySelector("body").style.backgroundColor="black";
    document.querySelector(".head,h1").style.color = "white";
    } else {
        currmode = "light";
        document.querySelector("body").style.backgroundColor ="white";

    
console.log(currmode);
    }
})
