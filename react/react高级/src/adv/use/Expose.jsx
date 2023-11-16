import React, { forwardRef, useImperativeHandle, useRef } from 'react'

function ComInput (props, ref) {
    const inputRef = useRef();
    useImperativeHandle(ref, () => ({
        test: 'hello',
        focus: () => {
            inputRef.current.focus()
        },
        changeData: () => {
            inputRef.current.value = "hello input"
        }
    }))
    return <input ref={inputRef}/>
};

const FComInput = forwardRef(ComInput);

export default function Expose() {
   
    const ref = useRef();
    const fatherRef = useRef();

    return (
        <div>
            <input ref={ref} />
            <button onClick={() => ref.current.focus()}>focus</button>
            <FComInput ref={fatherRef}/>
            <button onClick={() => fatherRef.current.changeData()}>console</button>
        </div>
    )
}