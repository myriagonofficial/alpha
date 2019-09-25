import { playSound, playMusic } from "./audio.js"
import { showIndicateurBonheur, showIndicateurEnvironnement, addPassive, changeScore } from "./game.js"
import { state } from "./state.js"
//import { endStory, startStory } from "./stories.js";

export const cards = {
    1: {
        image: "carte_pluie_meteorites.png",
        description: "L'incommensurable envergure de l’Univers s’offre à nous, enivrante et vertigineuse. La Vie - peuplant jadis galaxies, étoiles et planètes - décline secrètement ...",
        choices: {
            "Qui êtes-vous ?": {}
        },
        onStart() {
            playMusic('mus_gardien_01')
            playSound('vox_gardien_01', 'voice')
        }
    },
    2: {
        image: "carte_pluie_meteorites.png",
        description: "Nous sommes les Gardiens du Temps, édificateurs du Cosmos, martyrs d'une malédiction nous rendant esclaves de la Vie.",
        choices: {
            "Gardiens du Temps ?": {}
        },
        onStart() {
            playSound('vox_gardien_02', 'voice')
        }
    },
    3: {
        image: "carte_pluie_meteorites.png",
        description: "Sans Vie, plus de témoins du Temps. Le Temps n'existe qu'au travers de ses observateurs, les êtres vivants.",
        choices: {
            "Pourquoi suis-je ici ?": {}
        },
        onStart() {
            playMusic('mus_gardien_02')
            playSound('vox_gardien_03', 'voice')
        }
    },
    4: {
        image: "carte_pluie_meteorites.png",
        description: "Comme chaque témoin avant toi, tu as vécu une partie infinitésimale du champs des possibles, et maintenant la tâche t'incombe d'endosser à ton tour le lourd fardeau des Gardiens.",
        choices: {
            "Que dois-je faire ?": {}
        },
        onStart() {
            playSound('vox_gardien_04', 'voice')
        }
    },
    5: {
        image: "carte_pluie_meteorites.png",
        description: "Nous te confions ce berceau, au printemps de son Histoire. Il sera ta mémoire, l'empreinte que tu laisseras en ce monde.",
        choices: {
            "J'accepte": {}
        },
        onStart() {
            playMusic('mus_gardien_03')
            playSound('vox_gardien_05', 'voice')
        }
    },
    6: {
        image: "carte_pluie_meteorites.png",
        description: `Il y a en chaque être de cette planète un peu de toi, ils sont ton paradis,
         ta gratitude inconditionnelle. Ton premier objectif sera de veiller au bonheur de tous : 
         il sera représenté par cet indicateur.`,
        choices: {
            "C'est tout ?": {}
        },
        onStart() {
            showIndicateurBonheur();
        }
    },
    7: {
        image: "carte_pluie_meteorites.png",
        description: `Nous laisserons libre cours à ton imagination, mais garde bien à l'esprit que l'équilibre 
        sera la clef du fleurissement de ton jardin. Il faudra t'assurer qu'il ne dépérisse pas : cet indicateur 
        environnemental t'y aidera.`,
        choices: {
            "On commence ?": {}
        },
        onStart() {
            showIndicateurEnvironnement();
        }
    },


    100: {
        image: "carte_algues.png",
        description: `Gardien : Tu as peut-être une affinité élémentaire ... Préférerais-tu voir ton espèce évoluer 
        parmi les mystérieux fonds marins, sur la terre meuble et fertile, ou bien dans les airs, surplombant toute 
        la vie végétale ?`,
        choices: {
            "Espèce Marine": {
                effect() { addPassive("marine") }
            },
            "Espèce Céleste": {
                effect() { addPassive("céleste") }
            },
            "Espèce Terrestre": {
                effect() { addPassive("terrestre") }
            },
        },
        onStart() {
        }
    },

    101: {
        image: "carte_algues.png",
        description: `Gardien : Bien des espèces désireraient t'avoir comme guide. Quel régime alimentaire 
        crois-tu être raisonnable de favoriser pour celle qui dominera ce monde ?`,
        choices: {
            "Carnivore": {
                effect() {
                    addPassive("carnivore");
                    changeScore("bonheur", +10);
                    changeScore("environnement", -10);
                }
            },
            "Herbivore": {
                effect() {
                    addPassive("herbivore");
                    changeScore("bonheur", -10);
                    changeScore("environnement", +10);
                }
            },
            "Omnivore": {
                effect() {
                    addPassive("omnivore")
                },
            }
        },
        onStart() {
        }
    },

    200: {
        image: "carte_algues.png",
        description: `Prophète : Pourrions-nous profiter d’une quelconque manière des individus des autres espèces ? Ce n’est pas la première fois que nous sommes confrontés à cette situation et il semblerait que nous ne soyons pas capables de nous mettre d’accord.`,
        choices: {
            "Vous feriez mieux de les faire fuir": {
                effect() {
                    changeScore("bonheur", -10)
                }
            },
            "Domestiquez-les.": {
                effect() {
                    changeScore("bonheur", +10)
                    changeScore("environnement", -10)
                }
            },
            "Ils sont sacrés.": {
                effect() {
                    changeScore("environnement", +10)
                }
            },
            "Bouffez-les !": {
                test() {
                    return state.passives.includes("carnivore")
                },
                effect() {
                    changeScore("bonheur", +15)
                    changeScore("environnement", -15)
                }
            }
        }
    }
}