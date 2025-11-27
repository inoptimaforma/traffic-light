
// Первое дз
// let i = prompt("Choose color")

// console.log(document.body.style.backgroundColor = i);


// Второе дз
let i = prompt("Choose color")

let red = document.getElementById("red")
let yellow = document.getElementById("yellow")
let green = document.getElementById("green")



if (i == "red") {
    red.style.background = "red"
} else if (i == "yellow"){
    yellow.style.background = "yellow"
} else if (i == "green") {
    green.style.background = "green"
} else {
    alert("Wrong action")   
}



