import { state } from "./state.js";
import { removeInArray } from "./utils.js"

// story = scénario = ensemble de cartes sortant dans l'ordre

export const stories = {
    introduction: {
        name: "Gardiens du Temps",
        cards: [1, 2, 3, 4, 5, 6, 7],
        priority: 5
    },
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
    interaction_espece: {
        name: "Interaction avec les autres espèces",
        cards: [200],
        priority: 1
    }

}

export function startStory(name) {
    state.deck.stories.push(name)
}

export function endStory(name) {
    removeInArray(state.deck.stories, name);
}