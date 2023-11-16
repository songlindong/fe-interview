import React from 'react'

function logProps(WarppedComponent) {
    // return function () {
    //     return <WarppedComponent />
    // }

    const didMount = WarppedComponent.prototype.componentDidMount;

    return class A extends WarppedComponent {
        componentDidMount() {
            if(didMount) {
                didMount.apply(this);
            }
            console.log(' loadedddddd')
        }

        render() {
            return <div>
                ------ {super.render()} -------
            </div>
        }
    }
}




class Index extends React.Component {
    render() {
        return <div>这是一个简单的组件： {this.props.name}</div>
    }
}

const Comp = logProps(Index);



export default function Func() {
  return (
    <div>
        <Comp name={'luyi'} />
    </div>
  )
}