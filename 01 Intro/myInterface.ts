interface Client {
    readonly dbId: number
    email: string,
    clientId: number,
    googleId?: string
    startTrail: () => string        //=> Used for Type is method or func and returns string 
    // startTrail() : string         //=> we can also do by using this
    getCoupon(couponName: string, value: number): number
}


//--> when adding in this again in interface its called REOPENING of interface
interface Client {
    githubToken: string
}

interface TheAdmin extends Client {
    role: "admin" | "ta" | "learner"
}
//--> for Client
// const dheeraj: Client = { dbId: 22, email: "h@h.com", clientId: 2211,
// githubToken: "github" ,startTrail: () => {return "trail started"},
// getCoupon: (name: "hitesh10", off: 10) => { return 10 }
// }

//--> for TheAdmin
const dheeraj: TheAdmin = { dbId: 22, email: "h@h.com", clientId: 2211, 
role: "admin",
githubToken: "github" ,startTrail: () => {return "trail started"},
getCoupon: (name: "hitesh10", off: 10) => { return 10 }
}

dheeraj.email = "h@hc.com"