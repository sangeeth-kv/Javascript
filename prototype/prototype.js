//What is prototype?
    // in javascript every object have hidden property called called prototype,which refers to another object.this other object is called prototype.

//example:
    const student = {
        name: "Sangeeth",
        greet() {
            console.log(`Hi, I am ${this.name}`);
        }
    };

    student.toString() //in developer console we can see many function we can use in this student object,that we didint write in our function.
    //but it still works, beacause javascript looksup in the prototype chain until its find toString() like method inside object.prototype

//so simply we can say prototype is an object,that attach to when ever we created an our own object,fn,or value etc..


//what is protoype chaining?
    // It is a mechanism that javascript looks up for the properties and methods in an object and its prototypes, this forming a chain.
    // In short:
        //If a property or method is not found on an object, JavaScript automatically looks for it in the object’s prototype,
        //and then in that prototype’s prototype, and so on… until it reaches null.


const person = {
  greet() {
    console.log("Hello!");
  }
};

const student1 = Object.create(person); // student inherits from person
student1.name = "Sangeeth";

student1.greet(); // "Hello!"

//What happens here?
    // JS looks for greet inside student — ❌ not found.
    // Then it looks into student.__proto__ → which points to person — ✅ found!
    // Executes person.greet().




//we can create our own function that can be used as an object or function property like in build fn like map,filter etx..
//we can achieve this using prototype.
    //for array
    Array.prototype.myArrayFn=()=>{
        console.log("my array fn called")
        //we can write the logic
    }

    let arr=[1,2,3,4,4]
    arr.myArrayFn()//here we can see,we can use our custom fn as methods of aray

    //how this works?
        //When you call arr.myCustomMap(),JS looks up the method:
            // arr → Array.prototype → Object.prototype → null
            // It finds myCustomMap on Array.prototype and executes it.






