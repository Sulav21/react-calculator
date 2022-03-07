import React,{useState} from 'react'
import {Display} from './Display' ;
import {Button} from './Button';


const  buttons = [
    {cls:"clear", label: "AC"},
    {cls:"clean", label: "C"},
    {cls:"divide", label: "/"},
    {cls:"multi", label: "*"},
    {cls:"plus", label: "+"},
    {cls:"minus", label: "-"},
    {cls:"nine", label: "9"},
    {cls:"eight", label: "8"},
    {cls:"seven", label: "7"},
    {cls:"six", label: "6"},
    {cls:"five", label: "5"},
    {cls:"four", label: "4"},
    {cls:"three", label: "3"},
    {cls:"two", label: "2"},
    {cls:"one", label: "1"},
    {cls:"zero", label: "0"},
    {cls:"equal", label: "="},
    {cls:"dot", label: "."},
]
const symbols =["+","-","*","/"]
export const CalculatorFrame = () => {

    const [textToDisplay,setTextToDisplay] = useState("")
    const [isAnswered, setIsAnswered] = useState(false)
    const [lastSymbol,setLastSymbol] = useState("")

    const handleOnClick=value=>{
    
        let str = textToDisplay+ value

        if(textToDisplay.length<1 && ["*","/"].includes(value)){
            return
        }

        if(symbols.includes(value)){
            setLastSymbol(value)
        }

        if(value==="."){

            if(lastSymbol){
                const lastSymbolIndex = textToDisplay.lastIndexOf(lastSymbol);

                const lastNumberSet = textToDisplay.slice(lastSymbolIndex + 1,textToDisplay.length);

                if(lastNumberSet.includes(".")){
                    return;
                }
            }

            if(!lastSymbol && textToDisplay.includes(".")){
                return;
            }
            
        }

        if(value === "="){
            return onTotal()
        }
        if(value==="AC"){
            return setTextToDisplay("")
        }
        if(value==="C"){
             str = textToDisplay.slice(0,-1)
             return setTextToDisplay(str)
        }

        if(symbols.includes(value)){
            const lastchar = textToDisplay.slice(-1)
            if(symbols.includes(lastchar)){
            str = textToDisplay.slice(0,-1)+value
            }
        }
        // if( value==="." && textToDisplay.includes(".")){
  
        //     return

        // }
        if(isAnswered && value!=="="){
            setIsAnswered(false)
            setTextToDisplay(value)
            return
        }
        setTextToDisplay(str)
        }

        const onTotal =()=>{
            let str=textToDisplay
            const lastchar = textToDisplay.slice(-1)
            if(symbols.includes(lastchar)){
                str = textToDisplay.slice(0,-1)
            }
            const ttl = eval(str)
            setTextToDisplay(ttl.toString())
            setIsAnswered(true)
        }
  return (
    <div className="mainparent">
    <Display textToDisplay={textToDisplay}/>
    <div className="items">

    {
        buttons.map((item,i)=>{
           return <Button key={i} item={item} handleOnClick={handleOnClick}/>
        })
    }
      
    </div>
    </div>
  )
}
