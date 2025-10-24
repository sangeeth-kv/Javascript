function handleFormSubmit(e){
    e.preventDefault()
    const value=document.getElementById("name").value
    console.log(value)
    localStorage.setItem("userName",value)
    document.getElementById("name").value=""
}

function getName(){
    document.querySelector("#name-label").innerHTML=localStorage.getItem("userName")
}


document.querySelector("#item").addEventListener("click",(e)=>{
    console.log("called",e)
    if(e.target && e.target.tagName==="LI"){
        let items = JSON.parse(sessionStorage.getItem("cart-item")) || [];
        console.log(items)
        if(items.includes(e.target.textContent)){
            alert("Already in cart")
            return
        }
        items.push(e.target.textContent);
        sessionStorage.setItem("cart-item", JSON.stringify(items));
    }
})

function showCart(){
    const items=JSON.parse(sessionStorage.getItem("cart-item"))
    console.log(items)
    if(!items){
        alert("Cart is empty")
        return
    }
    const list = document.querySelector("#cartList");
    list.innerHTML = "";
    items.forEach(item => {
        const li=document.createElement("li");
        li.textContent=item
        list.appendChild(li);
    });

}