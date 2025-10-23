document.querySelector("#grandparent").addEventListener("click",()=>{
    console.log("grand parent clicked")
},true)//here we can pass the third argument as boolean true or false (it determines useCapture want to true or false),if we didnt passes anything
    //treated as false.

document.querySelector("#parent").addEventListener("click",(e)=>{
    console.log("parent clicked")
    e.stopPropagation() //we can stop propagation: like if i clk on child all when all events are false starts bubbles,when it reahes parent
                        //it sees stopPropagtion so that bubbles stoped. but it all the events are true means capturing phase when we clikc on 
                        //child it starts from root and stop propgation where the e.stopPropagation() function calls  
},true)

document.querySelector("#child").addEventListener("click",(e)=>{
    console.log("child clicked")  
    e.stopPropagation()
},true)

//when we click it start from parent if it false or not given boolean that will skip,then come to its child check the same and then its child,till where we cliked.

//if we passed true, the event happnes in capture phase like event from parent to child.
//if we passed false or nothings event happens in bubble phase like event from child to parent.

//Event Capturing (Trickling Down) (from top to bottom)
    // When you click the button:
        //The browser starts from the root (document).
        //Then goes down through each parent element.
        //Until it reaches the target (button)

//Event Bubbling Phase (from bottom to top)
    //After reaching the target (button), the event then bubbles back up
    //button → div → document

// If you don’t want the event to bubble or capture further: use=>  event.stopPropagation()

// what is event propagation ?
    // Event propagation means how an event travels through the DOM tree when it happens.like a “journey” that starts
    // when you click, and moves through elements.
    // 1)Phase 1 — Capturing (Trickle Down)
        //The event goes from the top (document) → down to the target element.
    // 2)Phase 2 — Target
        //The event reaches the actual element you interacted with (the target).
    //3) Phase 3 — Bubbling (Go Up)
        //Then it goes back up the DOM tree, firing events on each ancestor.

    // 🧠 Default browser behavior = Bubbling Phase
