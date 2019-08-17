import { state } from "./state.js"
import { decks } from "./decks";
import { stories } from "./stories";
import { cards } from "./cards";
import { pickRandomIn } from "./utils"
import { endStory } from "./effects.js";

export const initGame = () => {
  Object.assign(state, {
    era: 0,
    choice: 0
  })
  nextDeck()
};

export const onChoice = choice => {
  let card = cards[state.card]
  state.choice = 0;
  if (choice) {
    card.yesEffects.forEach(effect => effect.apply());
  } else {
    card.noEffects.forEach(effect => effect.apply());
  }
  if (card.outEffects) {
    card.outEffects.forEach(effect => effect.apply());
  }

  state.card = null;
  state.story = null;
  setTimeout(() => nextCard(), 0)
}

export const cleanupFinishedStories = () => {
  state.deck.stories
    .filter(story => stories[story].cards.length === 0)
    .forEach(story => endStory(story).apply())
}

export const nextCard = () => {
  cleanupFinishedStories()
  if (state.deck.stories.length === 0 || state.deck.finishedStories >= state.deck.nbStoriesToComplete) return nextDeck()

  let highestPriority = state.deck.stories.reduce((highest, story) => Math.max(highest, stories[story].priority || 0), 0)
  let priorityStories = state.deck.stories.filter(story => !highestPriority || stories[story].priority === highestPriority)
  state.story = pickRandomIn(priorityStories)
  state.card = stories[state.story].cards.shift()
  let card = cards[state.card]

  if (!card.name) card.name = stories[state.story].name

  if (card.inEffects) card.inEffects.forEach(effect => effect.apply());
}

export const nextDeck = () => {
  state.deck = decks[state.era]
  state.deck.finishedStories = 0;
  state.era++;
  nextCard()
}