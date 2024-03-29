import React from 'react';
import HeroCard from "../HeroCard/HeroCard";
import './Avengers.css';

export default function Avengers() {
    const heroes = [
        { name: 'Hulk', hero1_image: '/img-avengers/Hulk1.png', hero2_image: '/img-avengers/Hulk2.png' },
        { name: 'Iron Man', hero1_image: '/img-avengers/IronMan1.png', hero2_image: '/img-avengers/IronMan2.png' },
        { name: 'Captain America', hero1_image: '/img-avengers/CaptainAmerica1.png', hero2_image: '/img-avengers/CaptainAmerica2.png' },
        { name: 'Thor', hero1_image: '/img-avengers/Thor1.png', hero2_image: '/img-avengers/Thor2.png' },
        { name: 'Spider-Man (Peter Parker)', hero1_image: '/img-avengers/SpiderMan1.png', hero2_image: '/img-avengers/SpiderMan2.png' },
        { name: 'Black Widow/Natasha Romanoff (MAA)', hero1_image: '/img-avengers/BlackWidow1.png', hero2_image: '/img-avengers/BlackWidow2.png' },
    ];

    return (
        <div className="c-card-container">
            {heroes.map((hero, index) => (
                <HeroCard key={index} {...hero} />
            ))}
        </div>
    );
}
