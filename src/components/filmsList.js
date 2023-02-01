import React, {useEffect, useState} from 'react';
import {getFilms} from "../axios/filmsApi";
import FilmItem from "./filmItem";
import Pages from "./Pages";
import SwitchCategory from "./SwitchCategory";
import {Container} from "react-bootstrap";
import './Container.css'
import SortFilms from "./SortFilms";

const FilmsList = () => {
    let date = new Date().getFullYear()
    const [films, setFilms] = useState([])
    const [activePage, setActivePage] = useState(1)
    const [category, setCategory] = useState('ALL')
    const [raiting, setRaiting] = useState(0)
    const [year, setYear] = useState(`&yearFrom=${date-1}&yearTo=${date-1}`)

    useEffect(() => {
        getFilms(activePage, category, raiting,year).then(response => {
            setFilms(response)
        })
    }, [activePage, category, raiting,year])

    return (
        <>
            <SwitchCategory category={category} setCategory={setCategory} setActivePages={setActivePage}/>
            <div className='container--main'>
                <Container className='container'>
                    {films.items?.map(i =>
                        <FilmItem key={i.kinopoiskId} kinopoiskId={i.kinopoiskId}
                                  nameOriginal={i.nameRu === null ? i.nameOriginal : i.nameRu}
                                  posterUrlPreview={i.posterUrlPreview} ratingKinopoisk={i.ratingKinopoisk}
                                  year={i.year}
                                  genre={i.genres[0]?.genre}
                        />
                    )}
                </Container>
                <SortFilms setRaiting={setRaiting} date={date} setYear={setYear}/>
            </div>
            <Pages pageCount={films.totalPages} active={activePage} setActivePages={setActivePage}/>
        </>
    );
};

export default FilmsList;