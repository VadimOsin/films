import React, {useEffect, useState} from 'react';
import {getFilms} from "../axios/filmsApi";
import FilmItem from "./filmItem";
import Pages from "./Pages";

const FilmsList = () => {
    const [films, setFilms] = useState([])
    const [activePage,setActivePage] = useState(1)
    useEffect(() => {
        getFilms(activePage).then(response => {
            setFilms(response)

        })
    }, [activePage])

    return (
        <>
            {films.items?.map(i =>
                <FilmItem key={i.kinopoiskId} kinopoiskId={i.kinopoiskId}
                          nameOriginal={i.nameRu === null ? i.nameOriginal : i.nameRu}
                          posterUrlPreview={i.posterUrlPreview} ratingKinopoisk={i.ratingKinopoisk} year={i.year}
                          genre={i.genres[0].genre}
                />
            )}
            <Pages pageCount={films.totalPages} active={activePage} setActivePages={setActivePage}/>
        </>
    );
};

export default FilmsList;