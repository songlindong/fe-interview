import React, { FC } from 'react';
// import styles from './index.module.less'
type Props = {
    style?: string;
}

// export default function App(props: Props) {
//     return (
//         <div>{props?.style} App</div>
//     )
// }

const App: FC<Props> = () => {
    return (
        <div className= ' text-blue-500 bg-red-300 text-lg flex flex-col'>App</div>
    )
}

export default App;