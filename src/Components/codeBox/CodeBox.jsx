import React, {useState} from 'react'
import jsBeautify from 'js-beautify'

const CodeBox = ({ code = `
<div>
    <h1>Hello world</h1>
    <p classname="w-[]">Lorem ipsum</p>
</div>
` }) => {
    const [widthValue, setWidthValue] = useState(1)
    const beautyCode = jsBeautify.html(code , {indent_size: 2})   
    const code2= `

    `
    const rangeHandler = (e)=>{
        setWidthValue(e.target.value)        
    }

  return (
    <div className=''>
        <form action="">
            <input type="range" min={1} max={10} onChange={rangeHandler}/>
        </form>
        
    </div>

  )
}

export default CodeBox