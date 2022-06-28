import React, { useState } from "react";

export default function Textform(props) {
    const [text, setText] = useState("");
    const handleChange = (e) => {
        setText(e.target.value);
    };
    const handleUpClick = () => {
        let flag = "" + text;
        setText(flag.toUpperCase());
    };
    const handleLowerClick = () => {
        let flag = "" + text;
        setText(flag.toLowerCase());
    };
    const handleCopy = (e)=>{
        navigator.clipboard.writeText(text);
        let ele = document.getElementsByClassName("copy");
       let interval = setInterval(() => {
          ele.innerText = "copid"
        }, 20).then(()=>{
            clearInterval(interval);
            ele.innerText = "copy"
        })
        
    }
    const handleClear = ()=>{
        setText("");
    }
   
    const handleSpeak  = ()=>{
        let msg = new SpeechSynthesisUtterance();

        msg.text = text;
      
        window.speechSynthesis.speak(msg);
      
      
           
    }

    // handleInverseCase 
    const handleInverseCase = ()=>{
        let flag = "";
        for(let x of text)
        {
            if (x === x.toUpperCase())
            {
                flag += x.toLowerCase()
            }
            else{
                flag += x.toUpperCase()
            }
        }
        setText(flag);
    }

    return (
        <>
            <div className="textform">
                <div className="mb-3 my-2 mx-5 text-center fw-bolder fs-2 ">
                    <label
                        htmlFor="exampleFormControlTextarea1"
                        className="form-label my-2"
                    >
                        {props.heading}
                    </label>
                    <textarea
                        onChange={(e) => {
                            handleChange(e);
                        }}
                        className="form-control text-center text-area"
                        value={text}
                        id="exampleFormControlTextarea1"
                        rows="8"
                        style={{
                            border: "2px solid",
                            borderRadius: "1rem",
                            padding: "0rem 2rem",
                        }}
                    ></textarea>
                    <button
                        onClick={handleUpClick}
                        className="btn-primary text-center fs-4"
                        style={{
                            border: "2px solid",
                            borderRadius: "1rem",
                            padding: "0rem 2rem",
                        }}
                    >
                        Upper
                    </button>
                    <button
                        onClick={handleLowerClick}
                        className="btn-primary text-center fs-4"
                        style={{
                            border: "2px solid",
                            borderRadius: "1rem",
                            padding: "0rem 2rem",
                        }}
                    >
                        Lower
                    </button>
                    <button
                        onClick={(e)=>{handleCopy(e)}}
                        className="btn-primary text-center fs-4"
                        style={{
                            border: "2px solid",
                            borderRadius: "1rem",
                            padding: "0rem 2rem",
                        }}
                    ><i className="bi bi-clipboard-check copy">Copy</i>
                    </button>
                    <button
                        onClick={(e)=>{handleClear(e)}}
                        className="btn-primary text-center fs-4"
                        style={{
                            border: "2px solid",
                            borderRadius: "1rem",
                            padding: "0rem 2rem",
                        }}
                    >clear
                    </button>
                    <button
                        onClick={handleSpeak}
                        className="btn-primary text-center fs-4"
                        style={{
                            border: "2px solid",
                            borderRadius: "1rem",
                            padding: "0rem 2rem",
                        }}
                    ><i className="bi bi-ear"></i>
                    </button>
                    <button
                        onClick={handleInverseCase}
                        className="btn-primary text-center fs-4"
                        style={{
                            border: "2px solid",
                            borderRadius: "1rem",
                            padding: "0rem 2rem",
                        }}
                    >InverseCase
                    </button>
                </div>
            </div>

                        <div className="container my-2">
                            <h2>Your Text summary</h2>
                            <p>Number of characaters:{text.length},Words:{text.split(" ").length}</p>
                            <p>Time to read:{0.008* text.split(" ").length}</p>
                        </div>


        </>
    );
}
