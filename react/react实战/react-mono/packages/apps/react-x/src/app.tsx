import React, { FC } from 'react';
// import styles from './index.module.less'
import { useRecoilState, useRecoilValue } from 'recoil';
import { fontSizeLabelState, fontSizeState } from './store';

type Props = {
    style?: string;
}

// export default function App(props: Props) {
//     return (
//         <div>{props?.style} App</div>
//     )
// }

const App: FC<Props> = () => {
   const [fontSize, setFontSize ] = useRecoilState<number>(fontSizeState)

    return (
        <><div className=' text-blue-500 bg-red-300 text-lg flex flex-col'>App</div>
            <div style={{ fontSize }}>测试</div>
            <div>{process.env.BASE_ENV}</div>
            <button onClick={() => setFontSize((size) => size + 1)}>+</button>
            <Child />
            </>
    )
}

const Child: FC = () => {
    const [fontSize, setFontSize ] = useRecoilState<number>(fontSizeState)
    const fontSizeLabel = useRecoilValue<string>(fontSizeLabelState);


    return <div>
        <div style={{fontSize}}> hello child {fontSizeLabel}</div>
    </div>
}
export default App;