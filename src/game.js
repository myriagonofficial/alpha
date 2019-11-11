import { state, resetStateToNewGame } from "./state"
import { decks } from "./decks";
import { endStory } from "./stories";
import { cards } from "./cards";
import { pickRandomIn } from "./utils"
import { stopSound, stopMusic } from "./audio"
import { achievements } from "./achievements";

export const initGame = () => {
  resetStateToNewGame();
  nextDeck()
};

export const nextCard = () => {
  cleanupFinishedStories()
  if (state.deck.stories.length === 0) return nextDeck()

  let highestPriority = state.deck.stories.reduce((highest, story) => Math.max(highest, state.stories[story].priority || 0), 0)
  let priorityStories = state.deck.stories.filter(story => !highestPriority || state.stories[story].priority === highestPriority)
  state.story = pickRandomIn(priorityStories)
  state.card = state.stories[state.story].cards.shift()
  let card = cards[state.card]

  if (!card.name) card.name = state.stories[state.story].name

  if (card.onStart) card.onStart();
}

export const nextDeck = () => {
  stopSound("voice");
  stopMusic();

  state.era++;
  if (state.era >= decks.length) return gameOver()

  state.deck = Object.assign({}, decks[state.era])
  state.deck.stories = [...state.deck.stories]; // clone to reuse on next game
  state.deck.stories.forEach(s => s in state.stories || console.error(`Story not found: ${s}`))
}

export const skipIntro = () => {
  showIndicateurEnvironnement();
  stopSound("voice")
  nextDeck();
}

export const cleanupFinishedStories = () => {
  state.deck.stories
    .filter(story => state.stories[story].cards.length === 0)
    .forEach(story => endStory(story))
}

export const changeScore = (scoreToUpdate, value) => {
  if (scoreToUpdate === "environnement") {
    // pourcentage
    state.scores[scoreToUpdate] = Math.max(0, Math.round(state.scores[scoreToUpdate] * (100 + value) / 100));
  } else {
    state.scores[scoreToUpdate] = Math.max(0, state.scores[scoreToUpdate] + value);
    if (state.scores.bonheur > state.scores.bonheurMax) {
      state.scores.bonheurMax = state.scores.bonheur;
      state.scores.ageBonheurMax = decks[state.era].name;
    }
    if (state.scores.bonheur > state.bestScore) {
      state.bestScore = state.scores.bonheur;
    }
  }
}

export const showIndicateurBonheur = () => {
  state.shouldShowIndicateurBonheur = true
}

export const showIndicateurEnvironnement = () => {
  state.shouldShowIndicateurEnvironnement = true
}

export const addPassive = passiveName => {
  state.passives.push(passiveName)
}

export const setAchievement = achievementName => {
  state.achievement = achievements[achievementName];
  state.achievements = (state.achievements || []).concat(achievementName);
}

export const gameOver = () => {
  stopMusic();
  state.scene = "gameover";
}