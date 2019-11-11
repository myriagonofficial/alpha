import { initStories } from "./stories.js";

export const state = {
    scene: "menu",
    mute: false,
    volume: 100,
    loaded: false,
    deck: null,
    era: -1,
    choice: 0,
    card: null,
    stories: [],
    scores: {
        bonheur: 10,
        environnement: 100,
        bonheurMax: 0,
        ageBonheurMax: null
    },
    shouldShowIndicateurBonheur: false,
    shouldShowIndicateurEnvironnement: false,
    passives: [],
    achievements: null,
    achievement: null,
    bestScore: null
};

export function resetStateToNewGame() {
    Object.assign(state, {
        scene: "game",
        deck: null,
        era: -1,
        choice: 0,
        card: null,
        stories: initStories(),
        scores: {
            bonheur: 10,
            environnement: 100,
            bonheurMax: 0,
            ageBonheurMax: 1
        },
        shouldShowIndicateurBonheur: false,
        shouldShowIndicateurEnvironnement: false,
        passives: [],
        achievement: null
    })
}

export function saveSettings() {
    localStorage.setItem("settings", JSON.stringify({
        volume: state.volume,
        mute: state.mute
    }))
}

export function loadSettings() {
    Object.assign(state, JSON.parse(localStorage.getItem("settings")))
}

export function saveProgress() {
    localStorage.setItem("progress", JSON.stringify({
        achievements: state.achievements,
        bestScore: state.bestScore
    }))
}

export function clearProgress() {
    if (confirm(`La sauvegarde de votre avancement sera effacée. Êtes-vous sûr ?`)) {
        localStorage.removeItem("progress")
        state.achievements = null;
        state.bestScore = null;
    }
}

export function loadProgress() {
    Object.assign(state, JSON.parse(localStorage.getItem("progress")))
}

loadSettings()
loadProgress()
window.state = state;