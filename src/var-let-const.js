(()=>{
    if(true){
        let i=0;
        var j=0;
    }
    console.log(`i is not accessible here: , j is accessible here : ${j}`)
    for(var a=0;a<2;a++){
        console.log("hello")
    }
    console.log("a outside scope",a)

    console.log(`c before declaration ${c}`)
    let c = 5;

    console.log(`d before declaration ${d}`)
    var d = 4;

    console.log(`pi before declaration ${PI}`)
    const PI = 3.14;
    dec();
    function dec() {
        console.log("exp")
    }

})();