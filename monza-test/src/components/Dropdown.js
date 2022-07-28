import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";

export default function Dropdown({ options, setSorted }) {
    const [selected, setSelected] = useState(options[0]);
    const dispatch = useDispatch();

    return (
        <div className="dropdown">
            <div
                className={
                    "dropdown-toggle dropdown-custom-header" +
                    " " +
                    selected.order
                }
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
            >
                {selected.name}
            </div>
            <ul className="dropdown-menu">
                {options.map((x) =>
                    x.name !== selected.name ? (
                        <li key={x.name}>
                            <span
                                onClick={() => {
                                    setSelected(x);
                                    dispatch(setSorted(x))
                                }}
                                className="dropdown-item dropdown-custom-item"
                            >
                                {x.name}
                            </span>
                        </li>
                    ) : null
                )}
            </ul>
        </div>
    );
}
