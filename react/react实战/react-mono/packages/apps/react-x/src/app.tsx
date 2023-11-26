import React, { FC } from 'react';
import styles from './index.module.less'
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
        <div className={styles.app}>App</div>
    )
}

export default App;