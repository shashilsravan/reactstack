import React, {useState, useEffect} from 'react'
import ShowStack from './ShowStack'

export default function Stack() {
    const [stackSize, setStackSize] = useState(2)
    const [stack, setStack] = useState([])
    const [inputVal, setInputVal] = useState('')
    const [message, setMessage] = useState({})

    const handleSubmit = (e) => {
        e.preventDefault()
        setMessage({})
        if (stack.length >= stackSize){
            setMessage({type: 'danger', text: 'Stack is full'})
        }
        else{
            setStack([...stack, inputVal])
            setMessage({type: 'success', text:'Added to stack'})
            setInputVal('')
        }
        setTimeout(() => {
            setMessage({})
        }, 3000);
    }

    const handlePop = () => {
        setMessage({})
        if (stack.length <= 0){
            setMessage({type: 'danger', text: 'Stack is Empty'})
        }
        else{
            let temp = stack
            temp.splice(stack.length - 1)
            setStack(temp)
            setMessage({type: 'success', text:'Popped out from stack'})
        }
        setTimeout(() => {
            setMessage({})
        }, 3000);
    }

    const clearStack = () => {
        setMessage({})
        if (stack.length <= 0){
            setMessage({type: 'danger', text: 'Stack is already Empty'})
        }
        else{
            setStack([])
            setMessage({type: 'success', text:'Cleared stack'})
        }
        setTimeout(() => {
            setMessage({})
        }, 3000);
    }

    const handlePeak = () => {
        setMessage({})
        if (stack.length <= 0){
            setMessage({type: 'danger', text: 'Stack is Empty'})
        }
        else{
            setMessage({type: 'success', text:`Peaked value: ${stack[stack.length - 1]}`})
        }
        setTimeout(() => {
            setMessage({})
        }, 3000);
    }

    return (
        <div className='container my-5'>
            <h5>Stack size is : {stackSize} </h5>
            {stack.length > 0 && <ShowStack stack={stack} />}
            {message.type &&
            <div className={`alert alert-${message.type}`}>
                {message.text}
            </div>}

            <div className='d-flex my-2'>
                <input type="number" min={0} className='form-control me-3' value={stackSize}
                    onChange={(e) => setStackSize(e.target.value)} />
                <button className='btn btn-success' style={{whiteSpace: 'nowrap'}}>
                    set Stack size
                </button>
            </div>
            <form onSubmit={handleSubmit} className='d-flex'>
                <input type='text' className='form-control me-2' value={inputVal} 
                    onChange={(e) => setInputVal(e.target.value)} />
                <button className='btn btn-success' type='submit' style={{whiteSpace: 'nowrap'}}>
                    Push to Stack
                </button>
            </form>
            <div className='my-4'>
                <h6>Options: </h6>
                <button className={`btn btn-${stack.length === 0 ? 'success': 'warning'} mx-2`}>
                    is Empty
                </button>
                <button className='btn btn-danger mx-2'
                    onClick={handlePop}>Pop</button>
                <button className={`btn btn-${stack.length >= stackSize ? 'success': 'warning'} mx-2`}>
                    is Full
                </button>
                <button className='btn btn-danger mx-2' onClick={clearStack}>
                    Clear
                </button>
                <button className='btn btn-info mx-2' onClick={handlePeak}>
                    Peak
                </button>
            </div>
        </div>
    )
}
