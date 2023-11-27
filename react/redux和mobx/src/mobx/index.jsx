

import { Observer } from 'mobx-react';
import { useLocalObservable } from 'mobx-react'
import React from 'react'
import store from './store'

export default function Index() {

    const r_store = useLocalObservable(() => store);

    
  return (
    <div>index
    <Observer>
        {
            () => (
                <div>
                <h2>{r_store.count}</h2>
                <h2>{r_store.double}</h2>
                    <button onClick={() => r_store.add_count()}>++</button>
                </div>
            )
        }
    </Observer>
    </div>
  )
}
