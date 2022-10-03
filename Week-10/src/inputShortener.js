import React, { useState } from 'react'

const InputShortener = ({setInputvalue}) => {

    const [value,setValue]=useState("");

    const handleClick=()=>{
        setInputvalue(value);
        setValue("");
    }

  return (
    <div className="inputContainer">
        <h1>URL <span>Shortner</span></h1>
        <div>
            <input 
            type="text" 
            placeholder="Paste the Link to shorten it"
            value={value}
            onChange={e=>setValue(e.target.value)}/>
            <button onClick={handleClick}>shorten</button>
        </div>
    </div>
  )
};

export default InputShortener;
