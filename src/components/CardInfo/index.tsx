import React, {FC, memo} from 'react';
import { Card } from 'antd';

const { Meta } = Card;

interface IProps {}

export interface IConfig {
    img: string;
    title: string;
    uri: string;
}

const CardInfo: FC = memo<IProps>((props) => {
    console.log(props)
    return (
        <Card
            hoverable
            style={{ width: 240 }}
            cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
        >
            <Meta title="Europe Street beat" description="www.instagram.com" />
        </Card>
    );
});
export default CardInfo;