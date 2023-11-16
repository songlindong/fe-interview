import React, { Component } from 'react'

class dom extends Component {
  render() {
    return (
      <div>
        <ul>
            <li>yunyin</li>
            <li>aliang</li>
            <li>xianzao</li>
            <li>yufeng</li>
        </ul>
      </div>
    )
  }
}

function HoC(WComponent) {
    return class Advance extends WComponent {
        render() {
            const element = super.render();
            
            const newChild =
                React.Children.map(element.props.children.props.children, (child, idx) => {
                    if(idx === element.props.children.props.children.length -1) {
                        const appendChild = 
                            React.createElement('li', {}, `this is the last teacher: ${child.props.children}`);
                        return appendChild;
                    } else {
                        return child;
                    }
                })

            return React.cloneElement(element, element.props, newChild)
        }
    }
}

export default HoC(dom)