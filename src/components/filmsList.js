import React, {useEffect, useState} from 'react';
import {getFilms} from "../axios/filmsApi";
import FilmItem from "./filmItem";
import Pages from "./Pages";
import SwitchCategory from "./SwitchCategory";
import {Container, Spinner} from "react-bootstrap";
import './Container.css'
import SortFilms from "./SortFilms";
import InputFilms from "./InputFilms";

const FilmsList = () => {
    let date = new Date().getFullYear()
    const [films, setFilms] = useState([])
    const [activePage, setActivePage] = useState(1)
    const [category, setCategory] = useState('ALL')
    const [rating, setRating] = useState('')
    const [year, setYear] = useState(`&yearFrom=1980&yearTo=${date}`)
    const [loading, setLoading] = useState(true)
    const [keyword, setKeyword] = useState('')
    const [search, setSearch] = useState(true)

    useEffect(() => {
        setLoading(true)
        setSearch(true)
        setTimeout(() => {
            getFilms(activePage, category, rating, year, keyword).then(response => {
                setFilms(response)

            }).finally(() => setLoading(false))
        }, 1000)

    }, [activePage, category, rating, year, search])

    return (
        <>
            <SwitchCategory category={category} setCategory={setCategory} setActivePages={setActivePage}/>
            <InputFilms keyword={keyword} setKeyword={setKeyword} setSearch={setSearch}/>
            <div className='container--main'>
                {
                    loading ?
                        <Spinner className='loading' animation={"border"}/>
                        :
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
                }
                <SortFilms setRaiting={setRating} date={date} setYear={setYear}/>
            </div>
            <Pages pageCount={films.totalPages} active={activePage} setActivePages={setActivePage}/>
        </>
    );
};

export default FilmsList;