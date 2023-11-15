// import logo from './logo.svg';
import './App.css';
import {useState} from 'react';

// 函数组件

function App() {
  // state,dispatch
  // 1. 状态，我要用这个值，去触发界面更新
  let title = '测试';
  const [data, setData] = useState(1)
  const handleClick = () => {
    const newData = data + 1
    setData(newData)
  }
  return (
    <div>
      <div>hello world</div>
      <div>this title is{title}</div>
      <div>this data is{data}</div>
      <button onClick={handleClick}>change</button>
    </div>
  );
}


export default App;
