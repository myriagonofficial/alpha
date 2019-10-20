export const state = {
    scene: "menu",
    mute: false,
    volume: 100,
    loaded: false,
    hasInteractedWithPage: false,
    deck: null,
    era: 0,
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
};

export function resetStateToNewGame() {
    Object.assign(state, {
        scene: "game",
        deck: null,
        era: 0,
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

Object.assign(state, loadSettings())
window.state = state;