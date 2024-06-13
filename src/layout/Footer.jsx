import React, { useState, useEffect } from "react";
import classNames from 'classnames';

export default function Footer({ isModoNoturno }) {
    const [conselho, setConselho] = useState(null);

    useEffect(() => {
        const fetchConselho = async () => {
            try {
                const response = await fetch('https://api.adviceslip.com/advice');
                const data = await response.json();
                setConselho(data.slip.advice);
            } catch (error) {
                console.error('Erro ao buscar conselho:', error);
            }
        };

        fetchConselho();
    }, []);

    return (
        <footer className={classNames("footer p-4", { 'bg-dark': isModoNoturno })} style={{ color: isModoNoturno ? 'white' : 'black' }}>
            <p>
                &copy; 2024 - All Rights Reserved
            </p>
            <p>
                Advice do dia: {conselho}
            </p>
        </footer>
    );
}
