import React, {useState} from 'react'

function logProps(WrappedComponent) {
    return function (props) {
        const [num, setNum] = useState(0);
        return <div>
            hocsss: 
            <WrappedComponent  {...props}/>
        </div>
    }
}


function Index(props) {
    return <div>这是一个简单的组件{props.name}</div>
}

const Comp = logProps(Index);

export default function Func() {
  return (
    <div>
        <Comp name={'测试6666'}/>
    </div>
  )
}
