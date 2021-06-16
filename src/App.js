import React ,{useState} from 'react'

const Sub_block=(props)=>{
    return(
        <div className="sub_block">
           <h1><i>{props.hh}</i></h1>     
        </div>
    )
}

const Clock = ()=>{

    const [tim,setCount] = useState(new Date());
    
    const IncNum=()=>{

        setCount(new Date())
        
    }
    setInterval(IncNum,1000);


    return(
        <>
            <div className="main_block">
            <Sub_block hh={tim.getHours()}/>
            <span className="sp"><i>:</i></span>
            <Sub_block hh={tim.getMinutes()}/>
            <span className="sp"><i>:</i></span>

            <Sub_block hh={tim.getSeconds()}/>

            </div>
        </>
    )
}

export default Clock

