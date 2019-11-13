import { state } from "./state.js";
import { removeInArray } from "./utils.js"

// story = scénario = ensemble de cartes sortant dans l'ordre

const stories = {
    introduction: {
        name: "Gardiens du Temps",
        cards: [1, 2, 3, 4, 5, 6, 7],
        priority: 5
    },


    // PRIMAL
    choix_espece: {
        name: "Choix de l'espèce",
        cards: [100, 101],
        priority: 5
    },
    region: {
        name: "Région",
        cards: [102],
        priority: 2
    },
    reproduction: {
        name: "Reproduction",
        cards: [103, 104],
        priority: 1
    },
    saisons: {
        name: "Saisons",
        cards: [105],
        priority: 1
    },
    communication: {
        name: "Mode de communication",
        cards: [106],
        priority: 1
    },
    prophetes: {
        name: "Prophètes",
        cards: [199],
        priority: 0
    },

    // HEADWAY
    interaction_espece: {
        name: "Interaction avec les autres espèces",
        cards: [201],
        priority: 1
    },
    sedentarisation: {
        name: "Sédentarisation",
        cards: [202],
        priority: 1
    },
    exploration: {
        name: "Exploration",
        cards: [203],
        priority: 1
    },
    epidemie: {
        name: "Epidémie mystérieuse",
        cards: [204],
        priority: 1
    },
    dominationGenre: {
        name: "Domination de genre",
        cards: [205],
        priority: 1
    },
    abris:
    {
        name: "Abris",
        cards: [206],
        priority: 1
    },
    politique:
    {
        name: "Jeu de pouvoirs",
        cards: [207],
        priority: 2
    },
    feu1:
    {
        name: "Forêt en flammes",
        cards: [208],
        priority: 1
    },
    exploration2:
    {
        name: "Vers l'inconnu",
        cards: [209],
        priority: 1
    },
    saisons2:
    {
        name: "saisons",
        cards: [210],
        priority: 1
    },


    // APEX
    criminalite: {
        name: "Criminalité",
        cards: [300],
        priority: 1
    },
    energie: {
        name: "Besoins en énergie",
        cards: [301],
        priority: 1
    },
    pharmacologie: {
        name: "Pharmacologie",
        cards: [302],
        priority: 1
    },
    eaupolluee: {
        name: "Eau polluée",
        cards: [303],
        priority: 1
    },
    alimentation: {
        name: "Récoltes faibles",
        cards: [304],
        priority: 1
    },
    puceselectroniques: {
        name: "Puces électroniques",
        cards: [305],
        priority: 1
    },
    gestation: {
        name: "Temps de gestation",
        cards: [306],
        priority: 1
    },
    mutiles: {
        name: "Mutilés de guerre",
        cards: [307],
        priority: 1
    },
    etoiles: {
        name: "Etoiles",
        cards: [308],
        priority: 1
    },
    feu2: {
        name: "Encore une forêt en flammes",
        cards: [309],
        priority: 1
    },
    dechets: {
        name: "Déchets",
        cards: [310],
        priority: 1
    },
    recoltes: {
        name: "Récoltes",
        cards: [311],
        priority: 1
    },
    temps1: {
        name: "Temps",
        cards: [312],
        priority: 1
    },
    science: {
        name: "Sciences",
        cards: [313],
        priority: 1
    },


    // AGONY
    UV: {
        name: "Rayonnements solaires",
        cards: [400],
        priority: 1
    },
    fertilite: {
        name: "Fertilité",
        cards: [401],
        priority: 1
    },
    plante_poison: {
        name: "Plantes mortelles",
        cards: [402],
        priority: 1
    },
    vieux: {
        name: "Population vieillissante",
        cards: [403],
        priority: 1
    },
    hiver: {
        name: "Hiver rude",
        cards: [404],
        priority: 1
    },
    refugies: {
        name: "Réfugiés climatique",
        cards: [405],
        priority: 1
    },
    chomage: {
        name: "Chômage",
        cards: [406],
        priority: 1
    },
    champsravages: {
        name: "Champs ravagés",
        cards: [407],
        priority: 1
    },
    particules: {
        name: "Pollution",
        cards: [408],
        priority: 1
    },
    ressources: {
        name: "Ressources rares",
        cards: [409],
        priority: 1
    },
    eauviciee: {
        name: "Empoisonnement de l'eau",
        cards: [410],
        priority: 1
    },
    chaleur: {
        name: "Chaleurs",
        cards: [411],
        priority: 1
    },
    demo: {
        name: "Emballement démographique",
        cards: [412],
        priority: 1
    },
    guerrecivile: {
        name: "Guerres civiles",
        cards: [413],
        priority: 1
    },
    robots: {
        name: "Robots",
        cards: [414],
        priority: 1
    },
    temps2: {
        name: "Enceinte temporelle",
        cards: [415],
        priority: 1
    },
    IAForte: {
        name: "Intelligence Artificielle Forte",
        cards: [416],
        priority: 1
    },
    IAForte2: {
        name: "Intelligence Artificielle Forte ?",
        cards: [417,418],
        priority: 1
    },
    especesmenacees: {
        name: "Espèces en voie d'extinction",
        cards: [419],
        priority: 1
    },
    

    extinction: {
        name: "Extinction",
        cards: [500, 501],
        priority: 0
    }

}

export function initStories() {
    return JSON.parse(JSON.stringify(stories)); // deep clone
}

export function startStory(name) {
    state.deck.stories.push(name)
}

export function endStory(name) {
    removeInArray(state.deck.stories, name);
}
