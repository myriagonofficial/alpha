import { state } from "./state.js"
import { decks } from "./decks";
import { stories, endStory } from "./stories";
import { cards } from "./cards";
import { pickRandomIn } from "./utils"

export const initGame = () => {
  Object.assign(state, {
    era: 0,
    choice: 0
  })
  nextDeck()
};

export const nextCard = () => {
  cleanupFinishedStories()
  if (state.deck.stories.length === 0) return nextDeck()

  let highestPriority = state.deck.stories.reduce((highest, story) => Math.max(highest, stories[story].priority || 0), 0)
  let priorityStories = state.deck.stories.filter(story => !highestPriority || stories[story].priority === highestPriority)
  state.story = pickRandomIn(priorityStories)
  state.card = stories[state.story].cards.shift()
  let card = cards[state.card]

  if (!card.name) card.name = stories[state.story].name

  if (card.onStart) card.onStart();
}

export const nextDeck = () => {
  if (state.era >= decks.length) return alert("fin du game") //TODO

  state.deck = Object.assign({}, decks[state.era])
  state.deck.stories.forEach(s => s in stories || console.error(`Story not found: ${s}`))

  state.era++;
  nextCard()
}

export const cleanupFinishedStories = () => {
  state.deck.stories
    .filter(story => stories[story].cards.length === 0)
    .forEach(story => endStory(story))
}

export const changeScore = (scoreToUpdate, value) => {
  state.scores[scoreToUpdate] = Math.round(state.scores[scoreToUpdate] * (100 + value) / 100);
}

export const showIndicateurBonheur = () => {
  state.shouldShowIndicateurBonheur = true
}

export const showIndicateurEnvironnement = () => {
  state.shouldShowIndicateurEnvironnement = true
}

export const addPassive = passiveName => state.passives.push(passiveName)