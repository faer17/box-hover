let daddy = document.querySelector(".daddy")
let randomcolor = ["red" , "#c402f5" , "blue" , "green" , "#02f1f5" , "#c402f5" , "#344ceb" , "yellow" ,  "chartreuse"]

for(let i = 0; i <357; i++) {
    let box = document.createElement("div")
    box.classList.add("box")
    box.addEventListener("mouseover", () => OnColor(box))
    box.addEventListener("mouseout",  () => OffColor(box))
    daddy.appendChild(box)
}

function OnColor(e) {
   let color = random()
   e.style.background = color
   e.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`

}

function OffColor(e) {
   e.style.background = '#1c1a1a'
   e.style.boxShadow = '0 0 2px #000'
}

function random() {
    return randomcolor[Math.floor(Math.random() * randomcolor.length)]
}