import { playSound, playMusic } from "./audio.js"
import { changeScore } from "./game.js"
import { endStory, startStory } from "./stories.js";
import { incidence } from "./const.js";

export const cards = {
    1: {
        image: "carte_pluie_meteorites.png",
        description: "L'incommensurable envergure de l’Univers s’offre à nous, enivrante et vertigineuse. La Vie - peuplant jadis galaxies, étoiles et planètes - décline secrètement ...",
        choices: {
            "Qui êtes-vous ?": () => { }
        },
        onEnter() {
            playMusic('mus_gardien_01')
            playSound('vox_gardien_01', 'voice')
        }
    },
    2: {
        image: "carte_pluie_meteorites.png",
        description: "Nous sommes les Gardiens du Temps, édificateurs du Cosmos, martyrs d'une malédiction nous rendant esclaves de la Vie.",
        choices: {
            "Gardiens du Temps ?": () => { }
        },
        onEnter() {
            playSound('vox_gardien_02', 'voice')
        }
    },
    3: {
        image: "carte_pluie_meteorites.png",
        description: "Sans Vie, plus de témoins du Temps. Le Temps n'existe qu'au travers de ses observateurs, les êtres vivants.",
        choices: {
            "Pourquoi suis-je ici ?": () => { }
        },
        onEnter() {
            playMusic('mus_gardien_02')
            playSound('vox_gardien_03', 'voice')
        }
    },
    4: {
        image: "carte_pluie_meteorites.png",
        description: "Comme chaque témoin avant toi, tu as vécu une partie infinitésimale du champs des possibles, et maintenant la tâche t'incombe d'endosser à ton tour le lourd fardeau des Gardiens.",
        choices: {
            "Que dois-je faire ?": () => { }
        },
        onEnter() {
            playSound('vox_gardien_04', 'voice')
        }
    },
    5: {
        image: "carte_pluie_meteorites.png",
        description: "Nous te confions ce berceau, au printemps de son Histoire. Il sera ta mémoire, l'empreinte que tu laisseras en ce monde.",
        choices: {
            "J'accepte": () => { }
        },
        onEnter() {
            playMusic('mus_gardien_03')
            playSound('vox_gardien_05', 'voice')
        }
    },
    6: {
        image: "carte_pluie_meteorites.png",
        description: "Quelques poussières qui dérivaient dans l'espace se sont laissées attirer par l'orbite de notre planète.",
        choices: {
            "Super": () => { }
        }
    },
    7: {
        image: "carte_pluie_meteorites.png",
        description: "Les poussières qui gravitent autour de notre planète semblent s'aglutiner petit à petit et forment quelques roches.",
        choices: {
            "S'en débarasser": () => { },
            "Laisser les choses se faire": () => {
                endStory('lune')
            }
        }
    },
    8: {
        image: "carte_pluie_meteorites.png",
        description: "Le temps passant, les quelques roches qui nous entourent ont grandi et une ceinture se dessine petit à petit autour de notre astre. Le ciel s'obscurcit légèrement.",
        choices: {
            "Laisser les choses se faire": () => {
                changeScore('Terrestre', +incidence.s);
                changeScore('Céleste', -incidence.s);
            },
            "Soufflons tout ça": () => {
                endStory('lune')
            }
        }
    },
    9: {
        image: "carte_pluie_meteorites.png",
        description: "Un météore imposant s'approche calmement de notre orbite et représente un risque en cas de collision.",
        choices: {
            "Le détruire": () => {
                startStory('astre_explose')
            },
            "Le préserver": () => {
                startStory('astre_safe')
            }
        }
    },
    10: {
        image: "carte_volcan_terre.png",
        description: "Le magma sous la croûte terrestre agite beaucoup les plaques tectoniques.",
        choices: {
            "Calmer le jeu": () => {
                changeScore('Terrestre', +incidence.m)
            },
            "Laisser les plaques tectoniques s'agiter": () => {
                startStory('end_tectonique')
            }
        }
    },
    11: {
        image: "carte_volcan_terre.png",
        description: "Quelques volcans ont réchauffé les mers et l'atmosphère terrestre, et rendu la terre fertile pour les végétaux.",
        choices: {
            "Protéger les plants": () => {
                changeScore('Marine', +incidence.s)
                changeScore('Céleste', +incidence.m)
            },
            "Détruire les plants": () => {
                changeScore('Marine', -incidence.s)
                changeScore('Céleste', -incidence.m)
            }
        }
    },
    12: {
        image: "carte_volcan_terre.png",
        description: "Les terres asséchées sont devenues arides et finissent par se craqueler.",
        choices: {
            "Faire tomber la pluie": () => {
                changeScore('Terrestre', +incidence.m)
            },
            "Ne pas intervenir": () => {
                changeScore('Céleste', -incidence.l)
            }
        }
    }
}