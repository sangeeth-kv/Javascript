// 1) call()


function printFullName(){
        console.log(this.firstName+" "+this.lastName)
}   

let nameDetails1={
    firstName:"Sangeeth",
    lastName:"KV",
}


let nameDetails2={
    firstName:"Sachin",
    lastName:"Thendulkar"
}

printFullName.call(nameDetails2)

function Person(name,age){
    this.name=name;
    this.age=age
}

const obj={}

Person.call(obj, "Sangeeth", 22);
console.log(obj)

//here if you want to use the method inside the nameDetails1 to nameDetails2 we can borrow the function.here we can use call() method

//call method is available on the all js functions, it allow to invoke a function with a specif 'this' value and optional argumnets.

//syntax:
    //func.call(thisArgs,arg1,arg2,...)
    //func => the fn you want to invoke
    //thisArgs => the object that want to treated as this inside the func.
    //args1,arg2... => argumnets passed to the func

//====================================================================================================================

//apply()

//apply method is simpliar to call method with only one dffernce tht is how we pass the arguments.in bind() we neeed to pass the args in array


function getAnimalDetails(breed,owner){
    console.log(this.animalName+" is "+breed+" and owner is "+owner)
}

const animal={
    animalName:"Mia"
}

getAnimalDetails.apply(animal,["labour","sahil"])

//=====================================================================================================================

//bind()

//syntax
    // const newFunc = originalFunc.bind(thisArg, arg1, arg2, ...);

// The bind method creates a new function with the same body as the original, but with "this" fixed to a specific object,
//arg1, arg2, ... → optional arguments that will be prepended when the new function is called.

let getProductInfo=function(user){
    console.log(this.name+" is bought by the user "+user)
}

const product={
    name:"Adidas shoe men",
    size:7
}

const newFn = getProductInfo.bind(product,["sangeey"])
console.log(newFn) //here it return a new fn with the same body as orignal but the this is refers to the object product.
newFn()


//Lets create a polyfil for bind method

const vehicle={
    category:"cars",
}

let getVehicle=function(owner,place){
    console.log("This vehicle is in ",this.category," cateogry owned by ",owner," from ",place)
}

const newGetVehic=getVehicle.bind(vehicle,"Aravind")  
newGetVehic("kannur")//like this we normaly use bind
//we will create polyfil

//here bind fn is applied for all funciton so;
//bind fn return another function.
Function.prototype.myBind=function(...args){ //here all funciton can use this my bind funciton
    let obj=this
    let params=args.slice(1)
    return function(...args2){ //bind return another function, inside this function we want to call the orginal function we can get that orginal fn using this
                         //beacause we call myBind like this orignalFn.myBind() soo here myBind this refers to orignalFn
        obj.apply(args[0],[...params, ...args2])
    }
}


let newMyBind=getVehicle.myBind(vehicle,"aravindh")
console.log(newMyBind)
newMyBind("KoiKode")