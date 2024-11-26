let score: number | string = 33

score = 44
score = "55"

type myUser = {
    name: string
    id: number
}

type Admin = {
    username: string
    id: number
}

let hitesh: myUser | Admin = {name: "hitesh", id: 334}

hitesh = { username: 'hc', id: 334 }

function getDbId(id: number | string){
    if(typeof id === "string"){

        id.toLowerCase()
    }
    console.log(`DB id is : ${id}`)
}

getDbId(3)
getDbId("3")

// array

const data: number[] = [1,2,3]
const data2: string[] = ["1","2","3"]
const data3: (string | number)[] = [ "1", "2", 3, 4 ]

let seatAllotment: "aisle" | "middle" | "window"

seatAllotment = "aisle"
// seatAllotment = "crew"
