import React from 'react';
import {Button, InputGroup} from "react-bootstrap";
import Form from 'react-bootstrap/Form';
import './InputFilms.css'

const InputFilms = ({keyword, setKeyword,setSearch}) => {

    return (
        <InputGroup className="inputFilms">
            <Form.Control
                placeholder="Ключевое слово, которое встречается в названии фильма"
                aria-label="Recipient's username"
                aria-describedby="basic-addon2"
                value={keyword}
                onChange={(e) => setKeyword(e.target.value)}
            />
            <Button variant="outline-secondary" onClick={()=>setSearch(false)}>
              Поиск
            </Button>
        </InputGroup>
    );
};

export default InputFilms;