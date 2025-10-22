// //async function always returns a promise,even if we dont return a promise. eg: if we return any value like string,number etc..
// //async function will automaticaly wrap this inside in a promise and return it.

// async function greet() {
//   return "Hello!";
// }

// const result = greet();
// console.log(result);

// // Even though you just returned a string, JavaScript automatically wraps it inside a Promise, equivalent to:
// function greet() {
//   return Promise.resolve("Hello!");
// }

// //----------------------------------------------------------------------------------------------------------------
// //If you throw an error inside an async function, it’s automatically converted into a rejected Promise.
// async function fail() {
//   throw new Error("Something went wrong!");
// }

// fail()
//   .then(() => console.log("Success"))
//   .catch(err => console.log("❌", err.message));

// // Equivalent to:
// function fail() {
//   return Promise.reject(new Error("Something went wrong!"));
// }

// //----------------------------------------------------------------------------------------------------------------

// //If you explicitly return a Promise, async will not wrap it again — it just passes it through.

// async function fetchData() {
//   return fetch("https://api.example.com/data");
// }

// console.log(fetchData()); // Promise from fetch

// //================================================================================================================
// //async and await used to handle promised
// //await keyword can only be used inside the async function

// console.log("started")
// let p=new Promise((resolve,reject)=>{   //A Promise starts running as soon as it’s created, not when you await it.
//     setTimeout(()=>{                    //if you have 2 promises,it starts when it declared and run the code not when await sees. 
//         resolve("successfull")
//     },4000)
// })



// async function getData() {
//     console.log("before await")
//     let value=await p;       //in async fn waits for p promise to execute after only below lines where executed..
//     console.log("value : ",value) 
//     console.log("after await")
// }

// //when we call the async function, it comes to callstack and start executing,when the await keyword comes the async fn suspend from callstack and
// //start executing other things outiside that async fn.when that await is resolved, the async fn agains come into callstack.
// //and start executing where it left(next line where,it left).and another await comes in that async fn,if that also not resolved,it again
// //suspend from callstack.when it resolved again into callstack, so on..

// console.log('after async function')
// getData()

// //About fetch:
// //fetch return a response object,if we need to convert to json we need to use .json(),and this json is again a promise
// // and that json is resolve we get that value.
//         //response.text() for plain text,
//         //response.blob() for images/files,
//         //response.formData() for form responses.
// //=============================================================================================================
// //examples using async await


const USER_API="https://api.github.com/users/sangeeth-kv";
async function getUser() {
    try {
        const fetchValue = await fetch(USER_API) ;
        const jsonValue=await fetchValue.json();
        console.log("this is json value : ",jsonValue)
    } catch (error) {
        console.log(error)
    }
}

getUser()

