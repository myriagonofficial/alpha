import { state } from "./state.js";
import { removeInArray } from "./utils.js"

// story = scénario = ensemble de cartes sortant dans l'ordre

export const stories = {
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
        priority: 1
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
    }
}

export function startStory(name) {
    state.deck.stories.push(name)
}

export function endStory(name) {
    removeInArray(state.deck.stories, name);
}
