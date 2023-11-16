import React, {useState, useMemo, useCallback} from 'react'


function Child({title, onChangeTitle, count, num}) {
    console.log('子组件渲染');

    const result = useMemo(() => {
        console.log('calculating....');
        return count * num    
    }, [count, num])

    return <div>{title}----{result}
        <button onClick={() => onChangeTitle(" new Title" + Math.random())} >change</button>
    </div>
}

const MemoChild = React.memo(Child)


export default function Callback() {

    const [ count, setCount ] = useState(1);
    const [num, setNum] = useState(10);
    const [ title, setTitle ] = useState('我是子组件')

    // const memoTitle = useMemo(() => ({ value: title }), [title])

    const handleChangeTitle = useCallback((text) => {
        setTitle(text)
    }, [])

  return (
    <div>
        <MemoChild 
            count={count} num={num}
        title={title} onChangeTitle={handleChangeTitle}/>
        <button onClick={() => setCount(count + 1)}>+</button>
        <button onClick={() => setCount(num + 1)}>+</button>
        <div>count: {count}, num: {num}</div>
    </div>
  )
}
