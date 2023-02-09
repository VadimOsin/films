import React from 'react';
import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {getBudgetById, getFilmById} from "../axios/filmsApi";
import './FilmPage.css'
import ImagesFilms from "./ImagesFilms";
import CreatorsFilms from "./creatorsFilms";

const FilmPage = () => {
    const {id} = useParams()
    const [film, setFilm] = useState([])
    const [budget, setBudget] = useState([])

    useEffect(() => {
            getFilmById(id).then(response => {
                setFilm(response)
            })
            getBudgetById(id).then(response => {
                setBudget(response)
            })
    }, [])

    return (
        <div className="container--page">
            <h1 className="title">{film.nameRu === null ? film.nameOriginal : film.nameRu}</h1>
            <div className="descriptions">
                <div className="rating">{film.ratingKinopoisk}</div>
                {film.genres?.map((genre, index) =>
                    <div key={index} className="descriptions--info"
                    >{genre.genre}</div>
                )}

                <div className="descriptions--info">{film.year}</div>
                {film.countries?.map((country, index) =>
                    <div key={index} className="descriptions--info"
                    >{country.country}</div>
                )}
                <div className="descriptions--info">{film.ratingAgeLimits?.slice(-1)}</div>
            </div>
            <div className="img--container">
                <img src={film.posterUrl} className="img"/>
            </div>
            <div className="film--info">
                <img className="film--info--img" src={film.posterUrl}/>
                <div className="film--info--descriptions">
                    <div>Год:&nbsp;{film.year}</div>
                    <div>Страна:&nbsp;{film.countries?.map((country, index) =>
                        <span key={index}
                        >{country.country} </span>
                    )}</div>
                    <div>Жанр:&nbsp;{film.genres?.map((genre, index) =>
                        <span key={index}
                        >{genre.genre} </span>
                    )}</div>
                    <div>Возраст:&nbsp;{film.ratingAgeLimits?.slice(-1)}+</div>
                    <div>Рейтинг:&nbsp;{film.ratingKinopoisk}</div>
                    {budget.total === undefined ? '' : <div>Бюджет:&nbsp;{budget.items[0]?.amount}{budget.items[0]?.symbol}</div>}
                </div>
            </div>
            <div className="descriptions--info--text">
                {film.description}
            </div>
            <ImagesFilms id={id}/>
            <CreatorsFilms id={id}/>
        </div>
    );
};

export default FilmPage;