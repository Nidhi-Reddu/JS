class User{
    constructor(username, email, password){
        this.username = username
        this.email = email
        this.password = password

    }
    
    encryptpassword(){
        return `${this.password}xyzb`
    }

    changeusername(){
        return `${this.username.toUpperCase()}`
    }
}

const chai = new User("xxx", "xxx@example.com",'5678912')

// console.log(chai.encryptpassword())
// console.log(chai.changeusername())

// behind the scene

function Users(name, mail, password){
    this.name = name,
    this.mail = mail,
    this.password = password
}

Users.prototype.encrypt_password = function(){
    return `${this.password}abz`
}

Users.prototype.change_username = function(){
    return `${this.name.toUpperCase()}`
}

const user1 = new Users("jack","jack@temp.com",'5678')
const user2 = new Users("bunny","bunny@fb.com","2389")

// console.log(user1.change_username())

// Inheritance

class members{
    constructor(user_name){
        this.user_name = user_name
    }
    logMe(){
        console.log(`User Name : ${this.user_name}`)
    }
}

class Manager extends members{
    constructor(user_name, email, password){
        super(user_name)
        this.email = email,
        this.password = password
    } 
    addProject(){
        console.log(`Project is added by ${this.user_name}`)
    }  
}

const emp = new Manager('nitesh','nitesh@fb.com','123987')
emp.addProject()
emp.logMe()

