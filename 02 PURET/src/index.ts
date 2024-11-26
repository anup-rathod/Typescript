class User {
    email: string
    name: string
    private readonly city: string = "Jaipur"
    constructor(email: string, name: string){

        this.email = email;
        this.name = name;

    }
}

const hitesh = new User("h@h.com","hitesh")
// hitesh.city = "jaipur"