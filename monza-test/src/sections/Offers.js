import React from "react";
import { useDispatch } from "react-redux/es/exports";
import { useEffect } from "react";
import { setOffers } from "../store/actions/offersActions";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { setFilterOn } from "../store/actions/offersActions";
import { setAvailable, setFilteredOffers, setSorted } from "../store/slices/offersSlice";
import Select from "../components/Select";
import CarCard from "../components/CarCard";
import Dropdown from "../components/Dropdown";

export default function Offers() {
    const { categories, offersToShow, numberToShow } = useSelector(
        (state) => state.offers
    );
    const dispatch = useDispatch();

    function handleAvailableCheck(e) {
        e.target.checked ? dispatch(setAvailable()) : dispatch( setFilteredOffers() )
    }

    useEffect(() => {
        dispatch(setOffers());
    }, [dispatch]);

    return (
        <section className="offers">
            <div className="container">
                <h2 id="browseCars" className="section-header">
                    CURRENT OFFERS
                </h2>

                <div className="offers__filters">
                    <Select
                        setFilter={setFilterOn}
                        name="Year"
                        options={categories.year}
                    />
                    <Select
                        setFilter={setFilterOn}
                        name="Make"
                        options={categories.make}
                    />
                    <Select
                        setFilter={setFilterOn}
                        name="Model"
                        options={categories.model}
                    />
                    <Select
                        setFilter={setFilterOn}
                        name="Fuel"
                        options={categories.fuel}
                    />
                    <Select
                        setFilter={setFilterOn}
                        name="Mileage"
                        options={categories.mileage}
                    />

                    <button
                        onClick={() => {
                            dispatch(setFilteredOffers());
                        }}
                        className="button button-secondary button_thin offers__button"
                    >
                        {numberToShow} cars
                    </button>
                </div>

                <div className="offers__sort d-sm-flex justify-content-between">
                    <div className="offers__sort-available">
                        <input
                            onChange={handleAvailableCheck}
                            className="checkbox"
                            type="checkbox"
                            id="available"
                            name="available"
                            value="available"
                        />
                        <label className="checkbox-label" htmlFor="available">
                            Instantly available vehicles
                        </label>
                    </div>

                    <div className="offers__sort-by">
                        <span className="offers__sort-by-text text-black">
                            Sort by
                        </span>

                        <div className="offers__sort-by">
                            <Dropdown 
                                options={[
                                    {
                                        name: "Publication date (ascending)",
                                        val: 'id',
                                        order: 'asc',
                                    },
                                    {
                                        name: "Publication date (descending)",
                                        val: 'id',
                                        order: 'desc',
                                    },
                                    {
                                        name: "Price (ascending)",
                                        val: 'price',
                                        order: 'asc',
                                    },
                                    {
                                        name: "Price (descending)",
                                        val: 'price',
                                        order: 'desc',
                                    },
                                    {
                                        name: "Mileage (ascending)",
                                        val: 'mileage',
                                        order: 'asc',
                                    },
                                    {
                                        name: "Mileage (descending)",
                                        val: 'mileage',
                                        order: 'desc',
                                    },
                                ]}
                                setSorted={setSorted}
                            />
                        </div>
                    </div>
                </div>

                <div
                    className="offers__items grid text-center"
                    style={{
                        "--bs-gap": "1.2rem",
                    }}
                >
                    {offersToShow.length > 0
                        ? offersToShow.map((x) => (
                              <CarCard
                                  key={x.id}
                                  year={x.year}
                                  make={x.make}
                                  model={x.model}
                                  fuel={x.fuel}
                                  transmission={x.transmission}
                                  mileage={x.mileage}
                                  price={x.price}
                                  img={x.img}
                                  isNew={x.isNew}
                                  sold={x.sold}
                              />
                          ))
                        : (<span className="text-dark g-col-12">Nothing to show.</span>)}}
                </div>
            </div>
        </section>
    );
}
