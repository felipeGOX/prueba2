import React from 'react';
import SearchBar from './SearchBar';
import TaskList from './TaskList';
import Pagination from './Pagination';
import List from '../List.json'

const DetailView = () => {
    const recurso = List;
    return (
        <div className="">
            <h1 className="">
              Monitoreo de Facturacion Offline
            </h1>
            <SearchBar/>
            <TaskList tasks={recurso} />
            <Pagination currentPage={1000} totalPages={2000} onPageChange={function (page: number): void {
                throw new Error('Function not implemented.');
            } }/>
        </div>
    );
};

export default DetailView;