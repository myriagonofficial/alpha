export const state = {
    scene: "menu",
    mute: false,
    volume: 100,
    loaded: false,
    deck: null,
    era: -1,
    choice: 0,
    card: null,
    scores: {
        bonheur: 10,
        environnement: 100
    },
    shouldShowIndicateurBonheur: false,
    shouldShowIndicateurEnvironnement: false,
    passives: [],
    achievements: null,
    achievement: null
};

export function resetStateToNewGame() {
    Object.assign(state, {
        scene: "game",
        deck: null,
        era: -1,
        choice: 0,
        card: null,
        scores: {
            bonheur: 10,
            environnement: 100
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
    return JSON.parse(localStorage.getItem("settings"))
}

export function saveProgress() {
    localStorage.setItem("achievements", JSON.stringify({
        achievements: state.achievements
    }))
}

export function loadProgress() {
    return JSON.parse(localStorage.getItem("achievements"))
}

Object.assign(state, loadSettings(), loadProgress())
window.state = state;