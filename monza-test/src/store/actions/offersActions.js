import { offers } from "../offers";
import {
    loaded,
    setQuantity,
    setCategories,
    setFilter,
    filterOffers,
} from "../slices/offersSlice";

export const setOffers = () => {
    return (dispatch) => {
        dispatch(loaded(offers));
        dispatch(setQuantity(offers.length));
        dispatch(setCategories(offers));
    };
};

export const setFilterOn = (data) => {
    return (dispatch) => {
        dispatch(setFilter(data));
        dispatch(filterOffers());
    };
};
