//express
import express from 'express';
// Cacher les clés
import { config } from 'dotenv';
config({ path: ['.env.local', '.env'] }); //https://github.com/motdotla/dotenv#path
import bodyParser from 'body-parser';
import cors from "cors";
//Pour utiliser l'import/export ES6 dans le fichier serveur.js, il faut mettre "type" : "module" dans le package.json
const app = express()
app.use(bodyParser.json());
app.use(cors())
const port = 3000
//Resend envoie e-mail
import { Resend } from 'resend';
const resend = new Resend(process.env.RESEND_API_KEY);

const cherchePersonnages = (name) => {
    return fetch(`https://gateway.marvel.com:443/v1/public/characters?nameStartsWith=${name}&apikey=${process.env.MARVEL_PUBLIC_KEY}`, {
        headers: {
            referer: 'http://localhost:3000'
        }
    })
        .then(response => response.json())
        .then(data => {
            return data['data']['results']; // les personnages
        });
};

const getPersonnage = (name) => {
    return fetch(`https://gateway.marvel.com:443/v1/public/characters?name=${name}&apikey=${process.env.MARVEL_PUBLIC_KEY}`, {
        headers: {
            referer: 'http://localhost:3000'
        }
    })
        .then(response => response.json())
        .then(data => {
            return data['data']['results'][0] // le personnage que le 1er résultat de la recherche
        });
};

app.get('/recherche', (req, res) => {  //créer une route pour la recherche
    cherchePersonnages(req.query.name).then(personnages => {  // req.query.name est le nom du personnage recherché dans les paramètres de l'URL (ex : /recherche?name=spider)
        res.json(personnages.map(personnage => { // map() permet de parcourir le tableau de personnages et de le transformer en un autre tableau avec les informations que l'on souhaite afficher
            return { // retourne un objet pour chaque personnage (car on utilise map())
                "name": personnage['name'],
                "description" : personnage['description'],
                "comics" : personnage['comics']['items'],
                "photo" : personnage['thumbnail']['path'] + '.' + personnage['thumbnail']['extension'], // on concatène le path et l'extension pour obtenir l'URL de l'image
            };
        }))
    }).catch(() => res.json({ 'erreur' : "N'existe pas :(" })) // si la recherche ne retourne aucun résultat, on renvoie une erreur
})

app.get('/personnage', (req, res) => { //créer une route pour un seul personnage
    getPersonnage(req.query.name).then(personnage => { // getPersonnage() retourne un seul personnage
        res.json({
            "name": personnage['name'],
            "description" : personnage['description'],
            "comics" : personnage['comics']['items'],
            "photo" : personnage['thumbnail']['path'] + '.' + personnage['thumbnail']['extension'],
        });
    }).catch(() => res.json({ 'erreur' : "N'existe pas :(" }))
})

app.post("/contact", async (req, res) => { //recuperer les données du formulaire de contact, puis les envoyer par e-mail
    const { data, error } = await resend.emails.send({ // attendre que l'e-mail soit envoyé
        from: req.body.email, // l'adresse e-mail de l'expéditeur
        to: ["delivered@resend.dev"], // l'adresse e-mail du destinataire
        subject: req.body.objet,
        text: req.body.message,
    });

    if (error) {
        return res.status(400).json({ error }); // si une erreur s'est produite, renvoyer une erreur 400 bad request
    }

    res.status(200).json({ data }); // si tout s'est bien passé, renvoyer une réponse 200 OK
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`) // affiche un message dans la console pour indiquer que le serveur est en cours d'écoute
})
