import React from 'react';
import './SortFilms.css'
import Form from 'react-bootstrap/Form';

const SortFilms = ({setRaiting, date, setYear}) => {
    let raiting = []
    let year = []
    for (let i = date; i > 2013; i--) {
        year.push(i)
    }
    for (let i = 0; i < 10; i++) {
        raiting.push(i + 1)
    }
    return (
        <div className="sortFilms">
            <Form.Text>Выберите рейтинг</Form.Text>
            <Form.Select className="sortFilm--select" onChange={(event) => setRaiting(event.target.value)}>
                <option value=''>все</option>
                {
                    raiting.map(r =>
                        <option key={r} value={r}>{r}</option>
                    )
                }
            </Form.Select>
            <Form.Text>Выберите год</Form.Text>
            <Form.Select className="sortFilm--select" onChange={(event) => setYear(event.target.value)}>
                <option value={`&yearFrom=''&yearTo=''`}>все</option>
                {
                    year.map(r =>
                        <option key={r} value={`&yearFrom=${r}&yearTo=${r}`}>{r}</option>
                    )
                }
                <option value={'&yearFrom=2010&yearTo=2015'}>2010-2015</option>
                <option value={'&yearFrom=2000&yearTo=2010'}>2000-2010</option>
                <option value={'&yearFrom=1990&yearTo=2000'}>1990-2000</option>
                <option value={'&yearFrom=1980&yearTo=1990'}>1980-1990</option>
                <option value={'&yearTo=1980'}>До 1980</option>
            </Form.Select>

        </div>
    );
};

export default SortFilms;