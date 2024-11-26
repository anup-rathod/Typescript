// => In this function to return number only function addTwo(num: number): number <=after decl func add this 
function addTwo(num: number): number{
    return num + 2
    // return "hello"
}

function getUpper(val: string){
    return val.toUpperCase()
}

function signUpUser(name: string, email:string, isPaid: boolean)
{}

// Default value
let loginUser = (name:string, email:string, isPaid:boolean = false ) => {}

let myValue = addTwo(5)
getUpper("hitesh")
signUpUser("hitesh", "hitesh@lco.dev", false)
loginUser("h","h@h.com")

// function getValue(myVal: number){
//     if(myVal > 5){
//         return true
//     }

//     return "200 OK"
// }

const getHello = (s: string): string => {
    return ""
}


const heros = ["thor", "spiderman", "ironman"]
// const heros = [ 1, 2 , 3 ] 

heros.map((hero): string => {
    return `hero is ${hero}`
    // return 2
})


function consoleError(errmsg: string): void {
    console.log(errmsg);
}

// => to handle error more Robust
function handleError(errmsg: string): never {
    throw new Error(errmsg);
}


export {}