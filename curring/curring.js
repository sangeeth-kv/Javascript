function multiply(x,y){
    console.log(x*y)
}

let multiplyByTwo=multiply.bind(this,2) //when we call this it creates a another fn with same body as mulitply and dont call when do this like
//the func inside mmultiplyByTwo looks like this:

// function multiplyByTwo(y){
//     let x=2
//     console.log(x*y)
// }


multiplyByTwo(3)//now it call, and passed 3 to y and it executes and get result

let mulitplyByThree=multiply.bind(this,3) //this is curring using bind method
mulitplyByThree(5)


//Now using function closures.

function add(x){
    return function(y){
        console.log(x+y)
    }
}

const addTwo=add(2)
addTwo(3)
//or we can do like this
add(2)(10)

//What is curring?
//transforming a function takes multiple arguments into sequence of function that each take single argumnet

//How it helps:
    //code reuseability
    //function composition

//curring using arrow function 

let addition=(x)=>(y)=>(z)=> console.log(x+y+z)
addition(2)(3)(40)