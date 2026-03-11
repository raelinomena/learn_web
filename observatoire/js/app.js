let articles = [
    {
        id: 1,
        title: "photographier un trou noir",
        author: "",
        category: "astronomie",
        content: "En 2019, l'humanité posait pour la première fois les yeux sur l'ombre d'un trou noir. Derrière cette image floue se cache une aventure scientifique colossale ...",
        date: "2026-02-15"
    },
    {
        id: 2,
        title: "la prochaine grande traversée",
        author: "",
        category: "astronomie",
        content: "Les agences spatiales rivalisent d'ingéniosité pour envoyer les premiers humains sur la planète rouge. Les défis sont immenses ...",
        date: "2026-02-10"
    },
    {
        id: 3,
        title: "les pépinières d'étoiles de la Voie Lactée",
        author: "",
        category: "astronomie",
        content: "Dans ces nuages de gaz et de poussières naissent des étoiles nouvelles. Le télescope James Webb nous en offre des vues à couper le souffle ...",
        date: "2026-02-05"
    }
];

localStorage.setItem("astro", JSON.stringify(articles));

document.addEventListener("DOMContentLoaded", () => {
    const article_vals = localStorage.getItem("astro");
    if (article_vals)
    {
        const article_elt = JSON.parse(article_vals);
    }
});