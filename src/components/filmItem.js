import React from 'react';
import {useNavigate} from "react-router";
import {Card} from "react-bootstrap";
import './filmItem.css'

const FilmItem = ({kinopoiskId,nameOriginal, posterUrlPreview, ratingKinopoisk, year, genre}) => {
    let navigate=useNavigate()
    return (
        <Card style={{width: '18rem'}} className="filmCard" onClick={() => navigate(`films/${kinopoiskId}`)}>
            <Card.Img variant="top" src={posterUrlPreview} className="filmImg"/>
            <div className='filmDescriptions'>
            <Card.Title className="filmTitle">{nameOriginal}</Card.Title>
            <Card.Body className="filmBody">
                <Card.Text className="filmRating">{ratingKinopoisk} </Card.Text>
                <Card.Text>{year} {genre}</Card.Text>
            </Card.Body>
            </div>
        </Card>
    );
};

export default FilmItem;