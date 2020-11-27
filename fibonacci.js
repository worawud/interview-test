module.exports.fibonacci = (start=0, end=1 , index) => {
    
    let listFibo  = [start,end] ;
    var num1=start; 
    var num2=end; 
    var sum; 
    var i=0; 
    for (i = 0; i < index; i++)  
    { 
        sum=num1+num2; 
        listFibo.push(sum);
        num1=num2; 
        num2=sum; 
    } 
    console.log(listFibo.join(','))
    return num2; 

}
require('make-runnable/custom')({
    printOutputFrame: false
})