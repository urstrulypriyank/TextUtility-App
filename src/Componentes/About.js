import React from 'react'
import { useState } from 'react'
export default function About() {

    const [myStyle,setMyStyle] = useState({color:"white",backgroundColor:"black"})
    const [btnText,setText] = useState("Enable Dark Mode")
    const handleDarkMode = ()=>{
        if(myStyle.color === "black")
            {
                setMyStyle({
                    color:"white",
                    backgroundColor:"black",
            
                })
                setText("Enable Light Mode")
            }
            else{
                setMyStyle({
                    color:"black",
                    backgroundColor:"white",
                    display:"hidden"
            
                })
                setText("Enable Dark Mode")
            }
    }


  return (
    <div className="container" style={ myStyle }>
        <ul className="list-group" >
  <li className="list-group-item active" aria-current="true">An active item</li>
  <li className="list-group-item">A second item</li>
  <li className="list-group-item">A third item</li>
  <li className="list-group-item">A fourth item</li>
  <li className="list-group-item">And a fifth one</li>
</ul>
<div className="button-container text-center">
    <button onClick={handleDarkMode} className="btn-primary my-5 center ">{ btnText }</button>
</div>
    </div>
  )
}
