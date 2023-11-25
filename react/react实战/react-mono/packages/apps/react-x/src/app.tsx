import React from 'react';

type Props = {
    style?: string;
}

export default function App(props: Props) {
    return (
        <div>{props?.style} App</div>
    )
}