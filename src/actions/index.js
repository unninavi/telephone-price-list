import {GET_LIST, SEARCH } from '../constants';

export const getList = () => {
    return {
        type:GET_LIST,
    }
}


export const searchAction = (searchText) => {
    return {
        type:SEARCH,
        payload:searchText
    }
}
