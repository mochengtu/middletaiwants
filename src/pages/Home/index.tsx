import React, {FC, memo, useEffect} from 'react';
import VimVideo from '../../components/VimeVideo';
import styles from './styles.module.css';

import { request } from '../../utils/request';


interface IProps {
}

const App: FC = memo<IProps>( () => {

    useEffect(() => {
        request({
            api: 'admin-web/userLogin/login',
            method: 'post',
            payload: {
                "initiationID":"",
                "password":"123456ab",
                "username":"admin6"
            },
            callback: (res: any): void => {
                console.log(res);
            }
        });
    })

    return (
        <div className={styles.App}>
            <p>This is app pages!!!</p>
            <VimVideo />
        </div>
    );
} )

export default App;
