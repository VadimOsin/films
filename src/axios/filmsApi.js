import {instance} from "./index";

export const getFilms = async (page) => {
    const {data} = await instance.get(`api/v2.2/films/?page=${page}`)
    return data;
}

export const getFilmById = async (id) => {
    const {data} = await instance.get(`api/v2.2/films/${id}`)
    return data;
}

export const getBudgetById = async (id) => {
    const {data} = await instance.get(`api/v2.2/films/${id}/box_office`)
    return data;
}

export const getImagesFilmById = async (id) => {
    const {data} = await instance.get(`api/v2.2/films/${id}/images`)
    return data;
}