let obj = {
    action:function(){
        console.log(this.sound)
    }
}
let obj1 = {
    sound:'abc'
}
obj.action.bind(obj1)();
