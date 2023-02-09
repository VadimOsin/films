import React, {useEffect, useState} from 'react';
import {Button, Card, Carousel} from "react-bootstrap";
import {getCreatorsById} from "../axios/filmsApi";
import './creatorsFilm.css'
const CreatorsFilms = ({id}) => {
    const [creators, setCreators] = useState()

    useEffect(() => {
        getCreatorsById(id).then((response) => {
            setCreators(response)
        })
    }, [])

    return (

        <Carousel>
            {creators?.map((i) =>
                <Carousel.Item key={i.staffId} className="creators--item">
                    <Card className="creators--card">
                        <Card.Img variant="top" src={i?.posterUrl} className="creators--img"/>
                        <Card.Body className="creators--body">
                            <Card.Title>{i.nameRu === '' ? i?.nameEn : i.nameRu}</Card.Title>
                            <Card.Title>{i?.professionText}</Card.Title>
                            <Card.Text>
                                {i?.description}
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                </Carousel.Item>
            )}
        </Carousel>

    );
};

export default CreatorsFilms;