import React, {useState} from 'react';
import './Contact.css';

export default function Contact() {
    const [email, setEmail] = useState("");
    const [objet, setObjet] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = {
            email: email,
            objet: objet,
            message: message
        };
        console.log(data);
        fetch('http://localhost:3000/contact', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(response => {
                if (response.ok) {
                    return response.json();
                }
                throw new Error('Erreur lors de l\'envoi des données');
            })
            .then(data => {
                console.log(data);
            })
            .catch(error => {
                console.error(error);
            });
    }

    return <form className="Formulaire" onSubmit={handleSubmit}>
        <div className="field">
            <label className="label">Email</label>
            <div className="control">
                <input className="input" type="text" placeholder="Email"
                       value={email}
                       onChange={(e) => setEmail(e.target.value)}
                />
            </div>
        </div>

        <div className="field">
            <label className="label">Objet</label>
            <div className="control">
                <input className="input" type="text" placeholder="Objet"
                       value={objet}
                       onChange={(e) => setObjet(e.target.value)}
                />
            </div>

            <div className="field">
                <label className="label">Message</label>
                <div className="control">
                    <textarea className="textarea" placeholder="Message"
                              value={message}
                              onChange={(e) => setMessage(e.target.value)}
                    ></textarea>
                </div>
            </div>

            <div className="field is-grouped">
                <div className="control">
                    <button className="button is-link">Envoyer</button>
                </div>
                <div className="control">
                    <button className="button is-link is-light">
                        <a href={'/'}>Annuler</a>
                    </button>
                </div>
            </div>
        </div>
    </form>
}
