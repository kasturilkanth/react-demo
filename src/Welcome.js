// write code for Welcome component here
import {useState} from 'react'
function Welcome(props){
    const {startVal}=props;
    const [val,setVal]=useState(startVal)

    function increment(){
        setVal(val+1)
    }
    return (<div>
             {val}
         <div>   <button onClick={increment}>+</button>
            <button onClick={()=>{setVal(val-1)}}>-</button></div>
            
            </div>)
  }
  export default Welcome;