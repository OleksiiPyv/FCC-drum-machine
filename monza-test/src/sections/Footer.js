import React from "react";
import logo from "../assets/img/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { brands } from "@fortawesome/fontawesome-svg-core/import.macro";

export default function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                <div className="d-flex flex-column flex-md-row justify-content-between align-items-center">
                    <div className="footer__logo">
                        <img
                            className="footer__logo-img"
                            src={logo}
                            alt="Monza Motorsports"
                        />
                    </div>

                    <nav className="navbar navbar-dark navbar-expand-md me-md-5">
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
                        </ul>
                    </nav>

                    <nav className="navbar navbar-dark navbar-expand-md ms-md-5">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link px-4" href="#">
                                    <FontAwesomeIcon
                                        icon={brands("facebook-f")}
                                        className="nav-link-facebook"
                                    />
                                </a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link px-4 px-md-0" href="#">
                                    <FontAwesomeIcon
                                        icon={brands("instagram")}
                                        className="nav-link-instagram"
                                    />
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </footer>
    );
}
