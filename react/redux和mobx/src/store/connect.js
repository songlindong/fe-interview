import { useContext, useState, useEffect } from 'react';
import ReduxContext from './context';

export const connect = (mapStateToProps, mapDispatchToProps) => Component => {
    function Connect(props) {
        const store = useContext(ReduxContext);
        const [, setBool] = useState(true);
        useEffect(() => {
            store.subscribe(() => setBool(val => !val));
        }, [])
        return (
            <ReduxContext.Consumer>
                {
                    store => <>
                        <Component 
                            {...props}
                            {...mapStateToProps(store.getState())}
                            {...mapDispatchToProps(store.dispatch)}
                        />
                    </>
                }
            </ReduxContext.Consumer>
        )
    }

    return Connect;
}