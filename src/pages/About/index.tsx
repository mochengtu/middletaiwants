import React, {FC, memo} from 'react';

interface IProps {}

const About: FC = memo<IProps>(() => {
    return (
        <div>
            this is about pages
        </div>
    );
});

export default About;