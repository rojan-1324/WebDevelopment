let box = document.getElementById("box")
let color = document.getElementById("colorPicker")
let reset = document.getElementById("resetBtn")

color.addEventListener("input",function(){

    box.style.backgroundColor = color.value

})

reset.addEventListener("click",function(){

    box.style.backgroundColor = "lightblue"

})