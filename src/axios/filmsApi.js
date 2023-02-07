import {instance} from "./index";

export const getFilms = async (page, category, raiting, year, keyword) => {
    const {data} = await instance.get(`api/v2.2/films/?page=${page}&type=${category}&raitingTo=${raiting}${year}&keyword=${keyword}`)
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