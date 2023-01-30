import React from 'react';
import {Route, Routes} from "react-router-dom"
import FilmsList from "./filmsList";
import {Container} from "react-bootstrap";
import './Container.css'
import FilmPage from "./FilmPage";

const AppRouter = () => {

    return (
        <Container className="container">
            <Routes>
                <Route path={`/films/:id`} element={<FilmPage/>} exact/>
                <Route exact path='/' element={<FilmsList/>}/>
                <Route path="*" element={<FilmsList />} />
            </Routes>
        </Container>
    );
};

export default AppRouter;