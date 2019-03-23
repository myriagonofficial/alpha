import { state } from "./state.js"
import { decks } from "./decks";
import { stories } from "./stories";
import { cards } from "./cards";
import { pickRandomIn } from "./utils"

export const initGame = () => {
  state.deck = decks[0]
  nextCard()
};

export const onChoice = choice => {
  let card = cards[state.card]
  state.choice = 0;
  if (choice) {
    card.yesEffects.forEach(effect => effect.apply());
  } else {
    card.noEffects.forEach(effect => effect.apply());
  }

  state.card = null;
  cleanupFinishedStories()
  state.story = null

  setTimeout(() => nextCard(), 0)
}

export const cleanupFinishedStories = () => {
  state.deck.stories = state.deck.stories.filter(story => stories[story].cards.length > 0)
}

export const nextCard = () => {
  if (state.deck.stories.length === 0) return alert("Y'a plus de cartes dispo")
  cleanupFinishedStories()

  state.story = pickRandomIn(state.deck.stories)
  state.card = stories[state.story].cards.shift()
  let card = cards[state.card]

  if (!card.name) card.name = stories[state.story].name
  if (!card.frame) card.frame = state.deck.frame
}