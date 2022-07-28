import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    offers: [],
    offersToShow: [],
    filteredOffers: [],
    categories: {
        year: [],
        make: [],
        model: [],
        fuel: [],
        mileage: [],
    },
    filter: {
        year: "All",
        make: "All",
        model: "All",
        fuel: "All",
        mileage: "All",
    },
    numberToShow: 0,
};

const offersSlice = createSlice({
    name: "offers",
    initialState: initialState,

    reducers: {
        loaded(state, action) {
            state.offers = action.payload;
            state.offersToShow = action.payload;
            state.filteredOffers = action.payload;
        },

        setCategories(state) {
            const { filteredOffers } = state;
            const categories = {
                year: Array.from(
                    new Set(filteredOffers.map((x) => x.year))
                ).sort(),
                make: Array.from(
                    new Set(filteredOffers.map((x) => x.make))
                ).sort(),
                model: Array.from(
                    new Set(filteredOffers.map((x) => x.model))
                ).sort(),
                fuel: Array.from(new Set(filteredOffers.map((x) => x.fuel))),
                mileage: Array.from(
                    new Set(filteredOffers.map((x) => x.mileage))
                ).sort((a, b) => +a - +b),
            };
            state.categories = categories;
        },

        setQuantity(state, action) {
            state.numberToShow = action.payload;
        },

        setFilter(state, action) {
            const { name, value } = action.payload;
            state.filter[name] = value;
        },

        filterOffers(state) {
            const { offers, filter } = state;

            const filtered = offers
                .filter((x) => {
                    return filter.year === "All"
                        ? true
                        : x.year === filter.year;
                })
                .filter((x) => {
                    return filter.make === "All"
                        ? true
                        : x.make === filter.make;
                })
                .filter((x) => {
                    return filter.model === "All"
                        ? true
                        : x.model === filter.model;
                })
                .filter((x) => {
                    return filter.fuel === "All"
                        ? true
                        : x.fuel === filter.fuel;
                })
                .filter((x) => {
                    return filter.mileage === "All"
                        ? true
                        : x.mileage === filter.mileage;
                });

            state.filteredOffers = filtered;
            state.numberToShow = filtered.length;
        },

        setFilteredOffers(state) {
            state.offersToShow = state.filteredOffers;
        },

        setAvailable(state) {
            state.offersToShow = state.offersToShow.filter((x) => !x.sold);
        },

        setSorted(state, action) {
            if (action.payload.order === "asc") {
                state.offersToShow = state.offersToShow.sort((a, b) => {
                    return a[action.payload.val] - b[action.payload.val];
                });
            } else {
                state.offersToShow = state.offersToShow.sort((a, b) => {
                    return b[action.payload.val] - a[action.payload.val];
                });
            }
        },
    },
});

const { actions, reducer } = offersSlice;

export const {
    loaded,
    setQuantity,
    setCategories,
    setFilter,
    filterOffers,
    setFilteredOffers,
    setAvailable,
    setSorted,
} = actions;

export default reducer;
