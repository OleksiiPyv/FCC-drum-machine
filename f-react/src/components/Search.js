import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux/es/exports";
import { search } from "../store/slices/packagesSlice";

export default function Search() {
    const [searchVal, setSearchVal] = useState('');
    const dispatch = useDispatch()

    function handleSubmit(e) {
        e.preventDefault()
        dispatch(search(searchVal))
    }

    return (
        <form>
            <div className="input-group my-3">
                <input
                    className="form-control"
                    type="text"
                    value={searchVal}
                    onChange={(e) => setSearchVal(e.target.value)}
                />
                <button
                    className="btn btn-outline-secondary"
                    type="submit"
                    id="button-addon2"
                    onClick={handleSubmit}
                >
                    Search
                </button>
            </div>
        </form>
    );
}
