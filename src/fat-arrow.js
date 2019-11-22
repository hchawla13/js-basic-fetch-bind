// var x = function(){
//     this.val = 1;
//     setTimeout(function() {
//         this.val++;
//         console.log("inside sto",this.val)
//     },1)
// }

// var x1 = new x();
var hello = "Hello";

function createCheckDigit(membershipId) {
    // Write the code that goes here.
    sum=0;
    function summer (){
        while(membershipId){
            sum = sum + membershipId%10;
            membershipId = Math.floor(membershipId/10)  ;
          }
    }
    summer();
    if(sum>9){
        membershipId = sum;
        sum=0;
        summer();
    }
    return sum
  }
  
  console.log(createCheckDigit("12345"));