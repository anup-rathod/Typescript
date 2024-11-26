const User = {
    name: "hitesh",
    email: "hitesh@lco.dev",
    isActive: true
}

function createUsers({name: string, isPaid: boolean}) {}
// => To give extra input var even if there are two in createUser we give additional field of email 
let newUser1 = {name: "hitesh", isPaid: false, email: "h@h.com"}
// => for this we only need to store that in a variable and give var to the func call
createUsers(newUser)

function createCourses(): {name: string, price:number}{
    return{name: "reactjs", price: 399}
}

// => TYPE ALIASES 
type User1 = {
    name: string;
    email: string;
    isActive: boolean;
}

function newCreateUsers(user: User1): User1{
    return {name: "", email: "", isActive: true}
}

newCreateUsers({name: "", email: "", isActive: true})

type Users = {
    readonly _id: string
    name: string
    email: string
    isActive: boolean
    creditcardDetails?: number  //=> to give this as optional
}

let myUser: Users = {
    _id: "1234",
    name: "h",
    email: "h@H.COM",
    isActive: false
}

type cardNumber = {
    cardnumber: string
}

type cardDate = {
    cardDate: string
}

type cardDetails = cardNumber & cardDate & {
    cvv: number
}

myUser.email = "h@gmail.com"
// myUser._id = "asa"  //=> cannot change readonly property

