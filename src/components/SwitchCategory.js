import React from 'react';
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";

const SwitchCategory = ({category, setCategory, setActivePages}) => {

    return (
        <Tabs
            defaultActiveKey={category}
            id="fill-tab-example"
            className="mb-3 switchCategory"
            fill
            onSelect={(event) => {
                setCategory(event)
                setActivePages(1)
            }}
        >
            <Tab eventKey="ALL" title="Все">

            </Tab>
            <Tab eventKey="FILM" title="Фильмы">

            </Tab>
            <Tab eventKey="TV_SHOW" title="Шоу">

            </Tab>
            <Tab eventKey="TV_SERIES" title="Сериалы">

            </Tab>
            <Tab eventKey="MINI_SERIES" title="Мини-сериалы">

            </Tab>
        </Tabs>
    );
};

export default SwitchCategory;