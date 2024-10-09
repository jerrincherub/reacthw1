import Addition from "./addition"
import Substraction from "./substraction"
import Multiplication from "./multiplication"
import Division from "./division"

function Thecalculator(){

    var a=40;
    var b=20;
    function sum(num1,num2){
        return num1+num2
    }
    function substract(num1,num2){
        return num1-num2
    }
    function multiply(num1,num2){
        return num1*num2
    }
    function division(num1,num2){
        return num1/num2
    }

    return(
        <div>
           The Calculator 
           <Addition num1={a} num2={b} sum={sum} />
           <Substraction num1={a} num2={b} substract={substract} />
           <Multiplication num1={a} num2={b} multiply={multiply} />
           <Division num1={a} num2={b} division={division} />
        </div>
        
        
        
    )
    
    



}



export default Thecalculator;