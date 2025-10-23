//what is debouncing?
    //wait until the user stop doing something for a while, and then do the action only once.
    //in other words, when a function is called repeatedly in quick, debouncing helps to make delay its in execution until there is a pause in call.
    //example: search bar, when user start searching, instead of calling search fn for every keypress, it wait for a pause(delay) in typing,
    //then only execute the function


function debounce(handleSearch, delay) {
    let timer;
    return function(...args) {
        clearTimeout(timer);
        timer = setTimeout(() => handleSearch.apply(this, args), delay);
    }
}


function handleSearch(e){
    console.log(e.target.value)
    //here we can fetch we can do network calls.
}

let handleDebounce=debounce(handleSearch,800)