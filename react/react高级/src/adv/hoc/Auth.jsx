import React, { useState, useEffect } from 'react'

function withAuth(WarppedComponent) {
    return function (props) {
        const [status, setStaus] = useState(0);
        useEffect(() => {
            setInterval(() => {
                console.log('setInterval', status)
            }, 1000)   
        }, [])
        return <div>
        <botton></botton>
            {/* {
                status? (
                    status === 1?
                    <WarppedComponent {...props} />
                    : <div>您没有权限</div>
                ): <div>loading</div>
            }
             */}
        </div>
    }
}


function Index(props) {
    return <div>这是一个有权限了的简单的组件： {props.name}</div>
}

const Comp = withAuth(Index);



export default function Func() {
  return (
    <div>
        <Comp name={'luyi'} />
    </div>
  )
}
