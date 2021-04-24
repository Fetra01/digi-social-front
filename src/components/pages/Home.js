import React from 'react';
import LeftNav from '../LeftNav';
import Log from '../Log/index';

const Home = () => {
    return (
        <div className="home">
            <LeftNav />
            <div className="main">
                <div className="home-header">
                    <Log signin={true} signup={false} />
                </div>
            </div>
        </div>
    );
};

export default Home;