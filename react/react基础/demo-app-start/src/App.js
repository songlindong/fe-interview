// import logo from './logo.svg';
import './App.css';
import {useState} from 'react';

function MyButton() {
  function handleClick() {
    alert('You clicked me!')
  }
  return (
    <button onClick={handleClick}>
      I'm a button
    </button>
  )
}
const products = [
  { title: 'Cabbage', id: 1 },
  { title: 'Garlic', id: 2 },
  { title: 'Apple', id: 3 },
];

const listItems = products.map(product =>
  <li key={product.id}>
     {product.title}
  </li>
);
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
      <MyButton />
      <ul>
        {listItems}
      </ul>
    </div>
  );
}


export default App;
