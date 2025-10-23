//What is throtling?
    // Throttling ensures a function runs at regular intervals, no matter how many times the event happens.
    // it means, Run at most once every X milliseconds.
    //calling a function after certain interval of time.






let handleThrotling=throtling(expensiveFn,4000)

function throtling(expensiveFn,limit){
    let flag=true
    return function(){
        let context=this;
        let args=arguments
        if(flag){
            expensiveFn.apply(context,args)
            flag=false;
            setTimeout(()=>{
                flag=true
            },limit)
        }
    }
}

function expensiveFn(){
    console.log("expensive fn called...")
}

window.addEventListener("resize",handleThrotling)


///Differnce between Debouncing and Throtling?
    // i) Debouncing:
        //Executes the function only after a fixed delay since the last event.
        //Wait until the user stops doing something
    // ii) Throttling:
        //Ensures the function runs at most once every X milliseconds
        //Limit how often the function can run.