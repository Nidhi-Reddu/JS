// can we change value of built-in constants like pi

// console.log(Math.PI)
Math.PI = 5
// console.log(Math.PI)

// let's check why not
const descripter = Object.getOwnPropertyDescriptor(Math, "PI")
// console.log(descripter)

// can we stop property of objects like writable, enumerable(or iterable) etc. : YES, only to limited
const chai = {
    name:"masalaChai",
    price : 20,
    isAbvailable : true,

    order : function(){
        console.log(`Ordered : ${this.name}`)
    }
}

// console.log(Object.getOwnPropertyDescriptor(chai, "price"))

Object.defineProperty(chai, "price", {
    writable : false,
    enumerable : false
})

chai.price = 55                         // not change
console.log(chai.price)     

// console.log(Object.getOwnPropertyDescriptor(chai, "price"))
for (const [key, value] of Object.entries(chai)) {
    if(typeof value !== 'function'){
        console.log(`${key} : ${value}`)                        // price will not shown
    }
}