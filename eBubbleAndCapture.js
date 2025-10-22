document.querySelector("#grandparent")
.addEventListener("click",()=>{
    console.log("grand parent clicked")
})

document.querySelector("#parent").addEventListener("click",()=>{
    console.log("parent clicked")
})

document.querySelector("#child").addEventListener("click",()=>{
    console.log("child clicked")  
})