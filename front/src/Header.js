import React, {useState} from 'react';
import {Link, NavLink} from "react-router-dom";

export default function Header() {
    const [heroSearch, setHeroSearch] = useState("");

    return (
        <div className={'navbar'}>
            <div className={'container'}>
                <div className={'navbar-brand'}>
                    <a className="navbar-item" href="./">
                        <img src="/img-avengers/Avengers_Logo.svg" alt="" width="100px" />
                    </a>
                </div>
                <div id="navbarMenu" className="navbar-menu">
                    <div className="navbar-end">
                        <div className="tabs is-right" id="menu">
                            <ul>
                                <NavLink to="/">Accueil</NavLink>
                                <NavLink to="/avengers">Avengers</NavLink>
                                <NavLink to="/contact">Contact</NavLink>
                                <input
                                    className="input is-normal tabs-search"
                                    type="search"
                                    placeholder="Recherchez votre Hero !"
                                    value={heroSearch}
                                    onChange={(e) => setHeroSearch(e.target.value)}
                                />
                                <Link to={`/hero?name=${heroSearch}`} className={'is-button'}>
                                    <input
                                        className="button is-normal"
                                        type="submit"
                                        value="Recherche"
                                    />
                                </Link>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
