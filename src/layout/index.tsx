import React, { FC, memo } from 'react';
import Router from '../router';


interface IProps {}

const App: FC = memo<IProps>(() => {
    return (
        <>
            <Router />
        </>
    );
})

export default App;
