import Addition from "./addition"
import Substraction from "./substraction"
import Multiplication from "./multiplication"
import Division from "./division"
var a=10;
var b=20;
function Thecalculator(){

    return(
        <div>
           The Calculator 
           <Addition num1={a} num2={b} />
           <Substraction />
           <Multiplication />
           <Division />
        </div>
        
        
        
    )
    
    



}



export default Thecalculator;