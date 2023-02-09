import React, {useEffect, useState} from 'react';
import './ImagesFilm.css'
import {getImagesFilmById} from "../axios/filmsApi";
import {Carousel, Image} from "react-bootstrap";

const ImagesFilms = ({id}) => {
    const [img, setImg] = useState()

    useEffect(() => {
        getImagesFilmById(id).then(response => {
            setImg(response.items)
        })
    }, [])

    return (
        <div className="img--film">
            <Carousel>
                {img?.map((i, index) =>
                    <Carousel.Item className="img--film--item" key={index}>
                        <Image
                               src={i.previewUrl}
                               className="img--film--item--img d-block w-50"
                               alt="slide"
                               />
                    </Carousel.Item>
                )}
            </Carousel>
        </div>
    );
};

export default ImagesFilms;