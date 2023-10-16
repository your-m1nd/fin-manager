import React from 'react';
import Foot from '../views/global/Foot';
import DataList from '../views/local/DataList';

const Stat = (props) => {

    const {statData} = props;

    return (
        <React.Fragment>
            <DataList data={statData}/>
            <Foot></Foot>
        </React.Fragment>
    )
}

export default Stat;