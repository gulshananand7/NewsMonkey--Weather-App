import React, { useState } from 'react'

export default function TextForm(props) {
    const handleUpClick = () => {
        //console.log("UpperCase was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("converted to uppercase", "success")

    }
    const handleDownClick = () => {
    //console.log("UpperCase was clicked" + text);
      let newText = text.toLowerCase();
      setText(newText)
      props.showAlert("converted to lowercase", "success")
    }

    const handleClearClick = () => {
      //console.log("UpperCase was clicked" + text);
      let newText = " ";
      setText(newText)
    }

    const handleOnChange = (event) => {
        //console.log("On Change");
        setText(event.target.value)
    }

    const [text, setText] = useState('')
  return (
    <><div className="container" style={{color: props.mode === 'dark'?'white':'#042743'}} >
          <h1>{props.heading}</h1>
          <div className="mb-3">
          <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode === 'dark'?'grey':'white', color: props.mode === 'dark'? 'white':'#042743'}} id="myBox" rows="8"></textarea>
          </div>
          <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to UpperCase </button>
          <button className="btn btn-primary mx-2" onClick  ={handleDownClick}>Convert to LowerCase </button>
          <button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear Text </button>
      </div>
      <div className="container my-3" style={{color: props.mode=== 'dark'?'white':'#042743'}} >
        <h1>Your Text Summary</h1>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").length} Minutes to Read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter something in the above textbox to preview"}</p>
      </div></>
  )
}
