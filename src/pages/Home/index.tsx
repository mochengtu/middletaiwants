import React, {FC, memo} from 'react';
import VimVideo from '../../components/VimeVideo';
import styles from './styles.module.css';


interface IProps {
}

const App: FC = memo<IProps>( () => {

    return (
        <div className={styles.App}>
            <p>This is app pages!!!</p>
            <VimVideo />
        </div>
    );
} )

export default App;
