//Promises:

//what are the promise states:
// 1)pending
//2)fullfiled
//3)reject


let cart=[{productName:"Adidas shoes",quantity:2},{productName:"Nike runner shoes",quantity:1}]
//provider

function createOrder(cart){
   return new Promise((resolve,reject)=>{
        if(!validateCart(cart)){
            reject(new Error("Cart is not valid"))
        }
        const orderId=createOrderId()
        if(!orderId){
            reject(new Error("Order Id is not there"))
        }
        resolve(orderId)
    })
}
function procedToPayment(orderId){
    return new Promise((resolve,reject)=>{
        if(!orderId){
            reject("Order id not there")
        }
        const orderDetails=`Order Successfull with Order Id ${orderId}`
        resolve(orderDetails)
        
    })
}
function showOrderSummary(orderIdDetails){
    return new Promise((resolve,reject)=>{
        if(!orderIdDetails){
            reject("order is cancelled due to some error")
        }
        resolve(orderIdDetails)
    })
}
function updateWallet(orderDetails){
    return new Promise((resolve,reject)=>{
        resolve("updated wallet")
    })
}

//helper functions
function validateCart(cart){
    if(cart.length<0)return false
    //logic
    return true
}
function createOrderId(){
    return Math.floor(100000 + Math.random() * 900000);
}

createOrder(cart)
.then(function(data){
    console.log(data)
    return data
})
.then((data)=>{
    return procedToPayment(data)
})
.then((result)=>{
    return showOrderSummary(result)
})
.then((data)=>{
    return updateWallet(data)
})
.then((result)=>{
    console.log(result)
})
.catch((err)=>{
    console.log(err)
})
.finally(()=>{
    console.log("completed");
})


//Promise methods

const p1=new Promise((resolve,reject)=>{
    // resolve("P1 is resolved")
    reject("P1 is rejected")
})
const p2=new Promise((resolve,reject)=>{
    resolve("P1 is resolved")
})
const p3=new Promise((resolve,reject)=>{
    resolve("P1 is resolved")
})
const p4=new Promise((resolve,reject)=>{
    resolve("P1 is resolved")
})

//promise.all
Promise.all([p1,p2,p3])  //return array if all promise are resolved,if any error or rejection in promise
.then((data)=>{          //immediately return (fast fail)
    console.log("output of data in promise.all : ",data)
})
.catch((err)=>console.log("error in the catch of promise.all : ",err))

//promise.allSettled
Promise.allSettled([p1,p2,p3])//wait for all promise to execute and return array with the values and status and
.then((data)=>{               //if  there is rejected promise give the status and reason for rejection,
    console.log("output of the data in the promise.allSettled : ",data)
})
.catch((err)=>console.log("error in the catch of promise.allsettled",err))

//promise.race
Promise.race([p1,p2,p3]) //return the first promise settled that either rejected or resolved
.then((data)=>{
    console.log("output data in the promise.race : ",data)
})
.catch((err)=>console.log("error in the catch block of promise.race",err))

//promise.any
Promise.any([p1,p2,p3]) //here it will wait for first success(resolve),if all promises are faild or rejected it will return aggregate error.
.then((data)=>{ //if all rejected aggregate error, return like array of error ie, [err1,err2,err3] but we need to use like in catch:log(err.errors)
    console.log("output of the data in the promise.any",data)
})
.catch((err)=>console.log("error in the catch block of the promise.any",err))

