import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";

export default function Select({ options, name, setFilter }) {
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState("All");
    const dispatch = useDispatch();

    return (
        <div
            className={
                "select" +
                (open ? " open" : "") +
                (value !== "All" && !open ? " active" : "")
            }
        >
            <div
                onClick={() => {
                    setOpen(!open);
                }}
                className="select__toggle"
            >
                {value === "All" ? name : open ? name : value}
            </div>
            <div className="select__dropdown">
                <ul className="select__options">
                    <li
                        onClick={() => {
                            setValue("All");
                            dispatch(
                                setFilter({
                                    name: name.toLowerCase(),
                                    value: "All",
                                })
                            );
                        }}
                        className={
                            "select__options-item" +
                            (value !== "All" ? "" : " active")
                        }
                        key="All"
                    >
                        All
                    </li>

                    {options.map((x) => (
                        <li
                            onClick={() => {
                                setValue(x);
                                dispatch(
                                    setFilter({
                                        name: name.toLowerCase(),
                                        value: x,
                                    })
                                );
                            }}
                            className={
                                "select__options-item" +
                                (value !== x ? "" : " active")
                            }
                            key={x}
                        >
                            {x}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
