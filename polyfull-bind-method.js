let post = {
    fname: "ayn",
    lname: "rand"
}

let fullname = function(country, book, sex) {
    console.log(this.fname + " " + this.lname +" "+ country + " " + book + " " + sex)

}

let b = fullname.bind(post,"russian")
b("founten head", "female")

Function.prototype.mybind = function(...args) {
    let thisbind = this,
    params = args.slice(1)
    return function(...args1) {
        thisbind.apply(args[0], [...params, ...args1])
    }
}

let mb = fullname.mybind(post, "russian")
mb("founten head", "female")
