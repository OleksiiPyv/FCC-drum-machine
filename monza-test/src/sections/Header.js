import React from "react";
import logo from "../assets/img/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { brands } from "@fortawesome/fontawesome-svg-core/import.macro";

export default function Header() {
    return (
        <div className="main-banner">
            <header>
                <nav className="navbar navbar-dark navbar-expand-lg container-fluid">
                    <div className="container">
                        <a className="navbar-brand" href="#">
                            <img alt="Monza Motorsports" src={logo} width='139' height='35'></img>
                        </a>

                        <button
                            className="navbar-toggler"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#navbarToggler"
                            aria-controls="navbarToggler"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div
                            className="collapse text-center navbar-collapse justify-content-end"
                            id="navbarToggler"
                        >
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <a
                                        className="nav-link"
                                        aria-current="page"
                                        href="#"
                                    >
                                        Inventory
                                    </a>
                                </li>

                                <li className="nav-item">
                                    <a className="nav-link" href="#">
                                        Financing
                                    </a>
                                </li>

                                <li className="nav-item">
                                    <a className="nav-link" href="#">
                                        Contacts
                                    </a>
                                </li>

                                <li className="nav-item">
                                    <a className="nav-link px-4" href="#">
                                        <FontAwesomeIcon
                                            icon={brands("facebook-f")}
                                            className="nav-link-facebook"
                                        />
                                    </a>
                                </li>

                                <li className="nav-item">
                                    <a className="nav-link px-1" href="#">
                                        <FontAwesomeIcon
                                            icon={brands("instagram")}
                                            className="nav-link-instagram"
                                        />
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>

            <div className="container">
                <h1 className="main-banner__header">
                    The right way to get a car
                </h1>

                <div className="d-flex flex-wrap main-banner__text">
                    <p className="main-banner__text-item">
                        Monza Motorsports is a boutique-style dealership
                        specializing in premium imports. We offer an advanced
                        online vehicle purchasing experience with integrated
                        financing and contactless home delivery.
                    </p>
                    <p className="main-banner__text-item">
                        All of our cars come with a 5 day/500 kilometres
                        no-hassle exchange option. Since 2012 Monza Motorsports
                        has been the benchmark for innovation in the automotive
                        industry.
                    </p>
                </div>

                <a
                    href="#browseCars"
                    className="button button-primary button_thick button_fixed main-banner__button"
                >
                    Browse cars
                </a>
            </div>
        </div>
    );
}
