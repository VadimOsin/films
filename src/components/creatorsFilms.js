import React, {useEffect, useState} from 'react';
import {Card} from "react-bootstrap";
import {getCreatorsById} from "../axios/filmsApi";
import './creatorsFilm.css'

const CreatorsFilms = ({id}) => {
    const [creators, setCreators] = useState()

    useEffect(() => {
        getCreatorsById(id).then((response) => {
            setCreators(response)
        })
    }, [])
    if (creators?.length !==0) {
        return (
            <div className='scrolling-wrapper'>
                {creators?.map((i) =>
                    <div key={i.staffId} className="creators--item">
                        <Card className="creators--card">
                            <Card.Img variant="top" src={i?.posterUrl} className="creators--img"/>
                            <Card.Body className="creators--body">
                                <Card.Title>{i.nameRu === '' ? i?.nameEn : i.nameRu}</Card.Title>
                                <Card.Title>{i?.professionText}</Card.Title>
                                <Card.Text>
                                    {i?.description}
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                )}
            </div>
        );
    } else {
        return (<></>);
    }
};

export default CreatorsFilms;