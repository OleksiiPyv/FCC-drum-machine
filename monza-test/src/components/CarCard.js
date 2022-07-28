import React from "react";
import { useState, useEffect } from "react";

export default function CarCard({
    year,
    make,
    model,
    fuel,
    transmission,
    mileage,
    price,
    img,
    isNew,
    sold,
}) {
    const [image, setImage] = useState("");

    useEffect(() => {
        (async (img) => {
            const res = await import(`../assets/img/${img}.png`);
            setImage(await res.default);
        })(img);
    }, [img]);

    return (
        <div className="g-col-12 g-col-md-6 g-col-xl-4 g-col-xxl-3">
            <a href="!#" className={"card" + (sold ? ' sold' : '')}>
                <div className={"card__image" + (isNew ? ' new' : '') + (sold ? ' sold' : '')}>
                    <img
                    className="card__image-img"
                        src={image}
                        alt={`${year} ${make} ${model}`}
                    />
                </div>

                <div className="card__body">
                    <h4
                        className="card__title text-black"
                        title={`${year} ${make} ${model}`}
                    >
                        <span className="card__title-year">{year}</span>
                        {`${make} ${model}`}
                    </h4>

                    <p className="card__text">
                        {`${mileage.toLocaleString(
                            "en-US"
                        )}km | ${transmission} | ${fuel}`}
                    </p>

                    <p className="card__price text-black">
                        ${price.toLocaleString("en-US")}
                    </p>
                </div>
            </a>
        </div>
    );
}
