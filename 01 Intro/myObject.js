var User = {
    name: "hitesh",
    email: "hitesh@lco.dev",
    isActive: true
};
function createUser(_a) {
    var string = _a.name, boolean = _a.isPaid;
}
// => To give extra input var even if there are two in createUser we give additional field of email 
var newUser = { name: "hitesh", isPaid: false, email: "h@h.com" };
// => for this we only need to store that in a variable and give var to the func call
createUser(newUser);
function createCourse() {
    return { name: "reactjs", price: 399 };
}
function newCreateUser(user) {
    return { name: "", email: "", isActive: true };
}
newCreateUser({ name: "", email: "", isActive: true });
var myUser = {
    _id: "1234",
    name: "h",
    email: "h@H.COM",
    isActive: false
};
myUser.email = "h@gmail.com";
// myUser._id = "asa"  //=> cannot change readonly property
