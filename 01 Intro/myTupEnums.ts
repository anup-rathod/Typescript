//=> Tuple types are type of array of known length and where the different elements may have diff types.

// const user: (string | number)[] = [1, "hc"]
let tUser: [string, number, boolean]
// => tuples
tUser = ["shd", 1223, true]

let rgb: [number, number, number] = [255, 123, 112]

type Customer = [number, string]

const newCustomer: Customer = [112, "example@google.com"]

newCustomer[1] = "hc.com"
newCustomer.push(true)
