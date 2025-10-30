//reverse a string:
function reverseString(str){
    return str.split('').reverse().join('')
}

function reverseString2(str){
    let reverse=""
    for(let i=str.length-1;i>=0;i--){
        reverse+=str[i]
    }
    return reverse
}
console.log(reverseString("hey"))
console.log(reverseString2("hey"))


//remove duplicate from array

function removeDuplicate(arr){
    for(let i=arr.length-1; i>=0; i--){
        if(arr.indexOf(arr[i])!==arr.lastIndexOf(arr[i])){
            arr.splice(i,1)
        }
    }
    return arr
}

function removeDuplicate2(arr){
    for(let i=0;i<arr.length;i++){
        for(let j=i+1;j<arr.length;j++){
            if(arr[i]==arr[j]){
                arr.splice(j,1)
                j--
            }
        }
    }
    return arr
}

function removeDuplicate3(arr){
    return [...new Set(arr)]
}

function removeDuplicate4(arr){
    let seen={}
    let unique=[]
    for(let i=0;i<arr.length;i++){
        if(!seen[arr[i]]){
            seen[arr[i]]=true;
            unique.push(arr[i])
        }
        
    }
    console.log(seen)
    return unique
}

console.log(removeDuplicate([1,2,3,4,4,5,3,2,7,8]))
console.log(removeDuplicate2([1,2,3,4,4,5,3,2,7,8]))
console.log(removeDuplicate3([1,2,3,4,4,5,3,2,7,8]))
console.log(removeDuplicate4([1,2,3,4,4,5,3,2,7,8]))

//find maximum number

function findMax(arr){
    return Math.max(...arr)
}

function findMax2(arr){
    let max=-Infinity
    for(let i=0;i<arr.length;i++){
        if(arr[i]>max){
            max=arr[i]
        }
    }
    return max
}
function findMax3(arr){
    return arr.reduce((acc,curr)=>curr > acc ? curr : acc,-Infinity)
}


console.log(findMax([1,2,4,62,4,53,3,522,52]))
console.log(findMax2([1,2,4,62,4,53,3,522,52]))
console.log(findMax3([1,2,4,62,4,53,3,522,52]))

//find occurance of each character

function findOccurance(str){
    let freq={}
    for(let char of str){
            freq[char]=(freq[char]||0)+1
    }
    return freq
}

function findOccurance2(str){
    let map=new Map()
    for(let char of str){
        map.set(char,(map.get(char)||0)+1)
    }
    return Object.fromEntries(map)
}

console.log(findOccurance("heyyahahhaka"))
console.log(findOccurance2("heyyahahhaka"))

//check if a string is palindrome

function palindrome(str){
    for(let i=0;i<Math.floor(str.length / 2);i++){
        if(str[i]!==str[str.length-1-i]){
            return false
        }
    }
    return true
}
console.log(palindrome("hey"))
console.log(palindrome("ardra"))
console.log(palindrome("malayalam"))
console.log(palindrome("yumy"))

console.log("=========================")

function palindrome2(str){
    return str===str.split('').reverse().join('')
}
console.log(palindrome2("hey"))
console.log(palindrome2("ardra"))
console.log(palindrome2("malayalam"))
console.log(palindrome2("yumy"))

console.log("=========================")

function palindrome3(str){
    let left=0;
    let right=str.length-1
    while(left<right){
        if(str[left]!==str[right])return false
        left++
        right--
    }
    return true
}

console.log(palindrome3("hey"))
console.log(palindrome3("ardra"))
console.log(palindrome3("malayalam"))
console.log(palindrome3("yumy"))


//flatten the array

function flattenArray(arr){
    return arr.flat(Infinity)
}
console.log(flattenArray([1,2,[3,4,[[3,7,[4,[10,[100]]]]]]]))
console.log(flattenArray([1,2,[30,40],[50,4],[2,3,[88,89,00,2]]]))
console.log("=========================")

function flattenArray2(arr){
    let flatt=[]
    for(let i=0;i<arr.length;i++){
        if(Array.isArray(arr[i])){
            flatt=flatt.concat(flattenArray2(arr[i]))
        }else{
            flatt.push(arr[i])
        }
    }
    return flatt
}
console.log(flattenArray2([1,2,[3,4,[[3,7,[4,[10,[100]]]]]]]))
console.log(flattenArray2([1,2,[30,40],[50,4],[2,3,[88,89,00,2]]]))
console.log("=========================")

function flattenArray3(arr){
    return  arr.reduce((acc,curr)=>acc.concat(Array.isArray(curr)?flattenArray3(curr):curr),[])
}
console.log(flattenArray3([1,2,[3,4,[[3,7,[4,[10,[100]]]]]]]))
console.log(flattenArray3([1,2,[30,40],[50,4],[2,3,[88,89,00,2]]]))















