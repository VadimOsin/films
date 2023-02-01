import React from 'react';
import {Route, Routes} from "react-router-dom"
import FilmsList from "./filmsList";
import FilmPage from "./FilmPage";

const AppRouter = () => {

    return (
            <Routes>
                <Route path={`/films/:id`} element={<FilmPage/>} exact/>
                <Route exact path='/' element={<FilmsList/>}/>
                <Route path="*" element={<FilmsList />} />
            </Routes>
    );
};

export default AppRouter;