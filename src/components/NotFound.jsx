import React from "react";

const NotFound = () => {
    return (
        <div className="not-found-container">
            <div className="not-found-content"> {/* Ajoutez une classe spécifique */}
                <h1>Erreur 404</h1>
                <p>La page que vous recherchez est introuvable.</p>
                <p>
                    <a href="/">Retour à la page d'accueil</a>
                </p>
            </div>
        </div>

    );
};

export default NotFound;
