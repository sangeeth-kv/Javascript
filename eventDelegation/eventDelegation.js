//what is event delegation?
    // Event delegation is a technique that uses event propagation (especially bubbling) to manage events more efficiently.
    //in theory, event delegation possible due to the event bubbling.instead of the using many event to child we do add a single event
    //on the parent,due to event bubbling when user click on target element it started bubbling  from target to parent,when reaches parent,
    //the callback attach to that event executes.


document.querySelector("#category").addEventListener("click",(e)=>{
    console.log(e.target)
    if(e.target.tagName==="LI"){
        window.location.href=`/user/${e.target.id}` 
    }
})

//example 2 javascript

document.querySelector("#form").addEventListener("input",(e)=>{
    if(e.target.dataset.uppercase!==undefined){ //we setted this to root or parent but it checks that event has dataset we give we can perform anything
                                                    //what we want
        e.target.value=e.target.value.toUpperCase()
    }
})

//benifits:
    //it saves a lot of memory.
    //Instead of adding many listeners, you just add one.
    //Saves memory and reduces CPU overhead
    //Cleaner and Simpler Code

//❌ Events That Do NOT Bubble
    //focus
    //blur
    //mouseenter  When mouse enters an element (no bubbling unlike mouseover)
    //mouseleave When mouse leaves an element (no bubbling unlike mouseout
    //load  When an image, iframe, or page finishes loading
    //unload
    //scroll
    //resize
    //abort
    //error
    //play, pause, ended