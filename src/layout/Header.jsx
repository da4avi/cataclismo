import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

export default function Header() {
    return (
        <nav className="navbar navbar-expand-lg p-4">
            <a className="navbar-brand" href="#">Cataclismo</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item active">
                        <a className="nav-link" href="#">Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Peças</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Sobre</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}
