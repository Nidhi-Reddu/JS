class User{
    constructor(username){
        this.username = username
    }
    
    logMe(){
        console.log(`User Name : ${this.user_name}`)
    }
    static createId(){
        return '456987'
    }
}

const temp = new User("xxx")
// console.log(temp.createId())                             //error bcose:static gives not access to new instanciated objects

// not also access to inherited
class member extends User{
    constructor(username, email, password){
        super(username)
        this.email = email
        this.password = password
    }
}

const member1 = new member("tingtong", "temp@eg.com","123698")
// console.log(member1.createId())                                  //error