import React from "react";
import classNames from 'classnames';

export default function Header({ isModoNoturno, mudarTema }) {
    return (
        <nav className={classNames("navbar navbar-expand-lg p-4", { 'bg-dark': isModoNoturno })} style={{ color: isModoNoturno ? 'white' : 'black' }}>
            <a className="navbar-brand" href="#" style={{ color: isModoNoturno ? 'white' : 'black' }}>Cataclismo</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item active">
                        <a className="nav-link" href="#" style={{ color: isModoNoturno ? 'white' : 'black' }}>Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#" style={{ color: isModoNoturno ? 'white' : 'black' }}>Peças</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#" style={{ color: isModoNoturno ? 'white' : 'black' }}>Sobre</a>
                    </li>
                    <li className="nav-item">
                        <button onClick={mudarTema} className="btn btn-link nav-link" style={{ color: isModoNoturno ? 'white' : 'black' }}>
                            Tema
                        </button>
                    </li>
                </ul>
            </div>
        </nav>
    );
}
