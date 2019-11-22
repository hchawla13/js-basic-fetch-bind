function talk (){
    console.log(this.sound)
}
let animal = {
    talk:talk
}
animal.talk() // returns undefined since animal is does not have sound property
let dog = {
    sound:'woof'
}
Object.setPrototypeOf(dog,animal)//this sets the dog object to be a prototype of animal
dog.talk()
////////////////////////////////////////part1////////////////////////////////////////////////
function Person(name){
    this.name = name
}
Person.prototype.talk = function(){
    console.log("hello ",this.name)
}
let p1 = new Person('harpreet')
p1.talk();