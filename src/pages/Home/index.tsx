import React, {FC, memo} from 'react';
// import CardInfo, { IConfig } from '../../components/CardInfo';
import styles from './styles.module.css';


interface IProps {
}

const App: FC = memo<IProps>( () => {
    /*const config: IConfig = {
        img: 'https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png',
        title: 'Europe Street beat',
        uri: 'www.instagram.com',
    }*/
    return (
        <div className={styles.App}>
            <p>This is app pages</p>
            {/*<CardInfo config={config} />*/}
        </div>
    );
} )

export default App;
