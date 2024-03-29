import React, {useEffect, useState} from 'react';
import {useSearchParams} from "react-router-dom";

export default function Hero() {
    const [searchParams] = useSearchParams();
    const name = searchParams.get('name');

    const [character, setCharacter] = useState({
        name: '',
        description: '',
        photo: ''
    });
    const [isError, setIsError] = useState(false);

    useEffect(() => {
        const fetchCharacter = async () => {
            setIsError(false);
            try {
                const response = await fetch(`http://localhost:3000/personnage?name=${encodeURIComponent(name)}`);
                if (!response.ok) {
                    setCharacter({
                        name: 'Erreur',
                        description: 'Ce personnage n\'existe pas',
                        photo: '' // Image d'erreur
                    })
                    setIsError(1);
                    return;
                }

                const data = await response.json();
                if (data.erreur) {
                    setCharacter({
                        name: 'Erreur',
                        description: 'Ce personnage n\'existe pas',
                        photo: '' // Image d'erreur
                    })
                    setIsError(true);
                    return;
                }

                setCharacter({
                    name: data.name,
                    description: data.description,
                    photo: data.photo
                });
            } catch (error) {
                setCharacter({
                    name: 'Erreur',
                    description: 'Ce personnage n\'existe pas',
                    photo: '' // Image d'erreur
                })
                setIsError(1);
                console.error('Erreur, pas d\'information API');
            }
        };

        // Call the fetchCharacter function
        fetchCharacter();
    }, [name]);

    return (
        <div className={'hero'}>
            <div className={'hero-body'}>
                <div className={'columns'}>
                    <div className={'column is-half'}>
                        <div className={'section is-large'}>
                            <h1 className={'title is-1'}>{character.name}</h1>
                            <p className={'subtitle'}>{character.description}</p>
                        </div>
                    </div>
                    <div className={'column is-half'}>
                        <div className={'section'}>
                            {isError
                                ? <iframe src="https://shattereddisk.github.io/rickroll/rickroll.mp4" height={200} allow="autoplay"></iframe>
                                : <img className={'image is-3by4'} src={character.photo} alt={character.name} />
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
