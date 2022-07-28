import React from "react";

export default function Subscribe() {
    return (
        <div className="subscribe">
            <div className="container d-flex flex-column flex-lg-row justify-content-between">
                <div className="subscribe__text">
                    <h4 className="subscribe__text-header">
                        Haven't found a suitable vehicle?
                    </h4>

                    <p className="subscribe__text-content">
                        Sign up for our newsletter and be the first to know when
                        we publish new vehicle offers.
                    </p>
                </div>

                <div className="subscribe__form d-flex flex-column flex-md-row flex-grow-1 align-items-center">
                <input type="email" className="subscribe__input form-control mb-4 mb-md-0 m mx-md-3" placeholder="Enter your email" />
                <button
                    href="#browseCars"
                    className="button button-tertiary"
                >
                    Subscribe now
                </button>
                </div>
            </div>
        </div>
    );
}
