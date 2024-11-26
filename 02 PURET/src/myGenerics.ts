const score: Array<number> = []
const names: Array<string> = []

function identityOne(val : boolean | number): boolean | number{
    return val
}

function identityTwo(val:any): any{
    return val
}

//--> It can take any input value and then lock that value & give to all types
function identityThree<Type>(val: Type): Type{
    return val
}


identityThree(1) 

function identityFour<T>(val: T): T{
    return val
}

interface Bootle{
    brand: string,
    type: number
}

// identityFour<Bootle>({})
// <T>()  -- () is used in generic that there we enter datatype we are expecting in this
function getSearchProducts<T>(products: T[]): T {
    // do some database operations
    const myIndex = 3
    return products[myIndex]
}
//--> can also do <T,>
const getMoreSearchProducts = <T,>(products: T[]): T => {
    //do some db operations
    const myIndex = 4
    return products[myIndex]
}

// function anotherFunction<T, U extends number>(valOne:T, valTwo:U): object {
//     return {
//         valOne,
//         valTwo
//     }
// }

// anotherFunction(3, "4")  --> give error cz U extends number
// anotherFunction(3, 4.6)

interface Database {
    connection: string,
    username: string,
    password: string
}

function anotherFunction<T, U extends Database>(valOne:T, valTwo:U): object {
    return {
        valOne,
        valTwo
    }
}

// anotherFunction(3, {})  --> this used with Database implementation of conn,usern,pass

interface Quiz{
    name: string,
    type: string
}

interface Course{
    name: string,
    author: string,
    subject: string
}

class Sellable<T> {
    public cart: T[] = []
    
    addToCart(product: T){
        this.cart.push(product)
    }
}