import axios from "axios";

const initialState = {
    Venta: [],
    Renta: []
}

const GET_PRODUCTS = 'GET_PRODUCTS';

export const producstReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_PRODUCTS:
            return {
                ...state,
                Venta:action.payload.Venta,
                Renta:action.payload.Renta
            }
        default:
            return state
    }
}

export const getProducts = () => async(dispatch, getState) => {
    try {
        await fetch('https://water-shop-91444-default-rtdb.firebaseio.com/.json')
        .then(response => response.json())
        .then(data => dispatch({
            type:'GET_PRODUCTS',
            payload: data
        }))
    } catch (error) {
        console.log(error)
    }
}