// with get there must be set
// Maximum call stack size exceeded  : either change getter&setter function name or change variable name inside getter&setter
class user{
    constructor(name, email, password){
        this.name = name,
        this.email = email,
        this.password = password
    }
    
    get _password(){
        return `${this.password}abc`                   
        // return this._password.toLowerCase()
    }

    set _password(value){
        this.password = value
        // this._password = value
    }
}

const user1 = new user("abc", "abc@eg.com","456789")
console.log(user1.password)

// without classes
function tea (tea_name, price){
    // either
    this._tea_name = tea_name,
    this._price = price,

    Object.defineProperty(this, "price", {
        get : function(){
            return `${this._price} Rs.`
        },
        set : function(value){
            this._price = value
        }
    })
    Object.defineProperty(this, "tea_name", {
        get : function(){
            return `${this._tea_name}`
        },
        set : function(value){
            this._tea_name = value
        }
    })
    // or
    // this.tea_name = tea_name,
    // this.price = price
}

const menu = new tea("masalaChai",25)
console.log(menu.price)
console.log(menu.tea_name)

// with objects
const member = {
    name : "abc",
    _email : "XXXYZ@fb.com",

    get email(){                    // it's a property
        return `${this._email.toLowerCase()}`
    },
    set email(value){
        this._email = value
    }
}

const member1 = Object.create(member)
console.log(member1.email)

// static #key