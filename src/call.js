console.log("call")
var obja = {
    addToThisa : function(arg1,arg2,arg3){
        return arg1 + this.num + arg2 + arg3
    }
}
var obj1a = {
    num:4
}
//console.log(obja.addToThisa.bind(obj1a)(2))
console.log('CALL',obja.addToThisa.call(obj1a,1,2,3))
console.log('APPLY',obja.addToThisa.apply(obj1a,[1,2,3]))