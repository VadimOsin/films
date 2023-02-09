import {instance} from "./index";

export const getFilms = async (page, category, rating, year, keyword) => {
    const {data} = await instance.get(`api/v2.2/films/?page=${page}&type=${category}&ratingTo=${rating}${year}&keyword=${keyword}`)
    return data;
}

export const getFilmById = async (id) => {
    const {data} = await instance.get(`api/v2.2/films/${id}`)
    return data;
}
export const getCreatorsById = async (id) => {
    const {data} = await instance.get(`api/v1/staff?filmId=${id}`)
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

export const getSequelsById = async (id) => {
    const {data} = await instance.get(`api/v2.1/films/${id}/sequels_and_prequels`)
    return data;
}