import React from "react";

export default function Card({ image, title, text }) {
    return (
        <div className="card" style={{ width: '300px', height: 'auto', boxShadow: '0px 0px 10px white' }}>
            <img img src={image} alt="" className='card-img-top' />
            <div className="card-body">
                <h5 className='card-title'>{title}</h5>
                <p className='card-text'>{text}</p>
                <a href="#" className='btn btn-primary bg-dark'> Ver mais </a>
            </div>
        </div>
    )
}