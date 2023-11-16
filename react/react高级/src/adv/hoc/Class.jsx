import React, { useState, useEffect } from 'react'

function logProps(WarppedComponent) {
    return class extends React.Component {

        componentDidMount() {
            console.log('loaded')
        }
        render() {

            const auth = false;

            return ( <div>
            {
                auth? <WarppedComponent {...this.props} />: <div>您没有权限</div>
            }
                
            </div>)
        }
    }
}


function Index(props) {
    return <div>这是一个简单的组件： {props.name}</div>
}

const Comp = logProps(Index);



export default function Func() {
  return (
    <div>
        <Comp name={'luyi'} />
    </div>
  )
}
