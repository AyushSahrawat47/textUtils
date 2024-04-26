import React, { useState } from "react";
  


const Textform = (props) => {
  const handleUpClick = ()=>{
    setText(text.toUpperCase());
    props.showAlert("converted to uppercase","success")
  }
  const handleDownClick = ()=>{
    setText(text.toLowerCase());
    props.showAlert("converted to lowercase","success")
  }
  const handleClear = ()=>{
    setText(" ");
    props.showAlert("text cleared","success")
    
  }
  
  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    props.showAlert("copied!!","success")
  }
  const handleCapital = () => {
    setText((text[0]).toUpperCase() + text.slice(1) )
    props.showAlert("done bhai!","success")
    
  }
  const handleOnChange = (event)=>{
    setText(event.target.value);
    if(text === "Enter text here")
      setText(" ")
  }
 
  
  const [text, setText] = useState("Enter text here");

  return (
    <div>
      <h1>Enter your text below</h1>
      <div className="mb-3">
        <textarea className={`form-control bg-${props.mode} text-${props.mode==='light'?'dark':'light'}`} id="mybox" rows="8" onChange={handleOnChange} value={text}></textarea>
        <button disabled={text.length===0} type="button" className="btn btn-primary my-3"  onClick={handleUpClick}>Uppercase</button>
        <button disabled={text.length===0} type="button" className="btn btn-primary my-3 mx-2"  onClick={handleDownClick}>Lowercase</button>
        <button disabled={text.length===0} type="button" className="btn btn-primary my-3 "  onClick={handleClear}>Clear</button>
        <button disabled={text.length===0} type="button" className="btn btn-primary my-3 mx-2"  onClick={handleCopy}>Copy</button>
        <button disabled={text.length===0} type="button" className="btn btn-primary my-3 "  onClick={handleCapital}>Captial Letter</button>


      </div>
      <div className="container">
        <h1>Text Summary</h1>
        <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length } words and {text.length-1} characters</p>
        <p>Time needed : {(text.split(" ").filter((element)=>{return element.length!==0}).length)*(0.24)} seconds</p>
      </div>
    </div>
  );
};

export default Textform;
