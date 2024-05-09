import React, { useState } from 'react'

const TextField = () => {

    const [inputVale, setInputValue] = useState<any>("")
    const [add, setAdd] = useState();

    const handleInputChange = (event: any) => {
        setInputValue(event.target.value)
    }

    const handleAdd = () => {
        setAdd(inputVale)
        setInputValue("");
    }

    return (
        <div className='mx-auto flex  gap-5 my-5'>
            <input type='text' className='border-b -2 border-black outline-none' onChange={handleInputChange} value={inputVale} placeholder='Type todo'></input>
            <button onClick={handleAdd} className='border-none bg-green-700 text-white rounded-[2px] shadow-md px-3 py-1 font-sans '>Add</button>
        </div>
    )
}

export default TextField
