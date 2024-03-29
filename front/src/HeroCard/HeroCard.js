import React from 'react';
import './hero-card.css';
import { Link } from 'react-router-dom';

export default function HeroCard(props) {
    return (
        <Link to={`/hero?name=${props.name}`}>
            <div className="c-card">
                <div className="c-background">
                    <div className="c-wrapper">
                        <img src={props.hero2_image} className="cover-image" alt=""/>
                    </div>
                </div>
                <img src="/img-avengers/logo_png.png" className="title" alt={props.name}/>
                <img src={props.hero1_image} className="character" alt={props.name}/>
            </div>
        </Link>
    );
}
