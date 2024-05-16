import React from 'react';
import SideBar from './Components/SideBar';
import DetailView from './Components/DetailView';

const Index = () => {
    return (
        <div className='flex h-screen w-screen overflow-hidden flex flex-row'>
            <SideBar/>
            <DetailView/>
        </div>
    );
};

export default Index;