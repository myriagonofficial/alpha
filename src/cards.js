import { playSound, playMusic } from "./audio.js"
import { showIndicateurBonheur, showIndicateurEnvironnement, addPassive, changeScore } from "./game.js"
import { state } from "./state.js"
//import { endStory, startStory } from "./stories.js";

export const cards = {
    1: {
        image: "aube1.png",
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
        image: "aube1.png",
        description: "Nous sommes les Gardiens du Temps, édificateurs du Cosmos, martyrs d'une malédiction nous rendant esclaves de la Vie.",
        choices: {
            "Gardiens du Temps ?": {}
        },
        onStart() {
            playSound('vox_gardien_02', 'voice')
        }
    },
    3: {
        image: "aube1.png",
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
        image: "aube2.png",
        description: "Comme chaque témoin avant toi, tu as vécu une partie infinitésimale du champs des possibles, et maintenant la tâche t'incombe d'endosser à ton tour le lourd fardeau des Gardiens.",
        choices: {
            "Que dois-je faire ?": {}
        },
        onStart() {
            playSound('vox_gardien_04', 'voice')
        }
    },
    5: {
        image: "aube2.png",
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
        image: "aube2.png",
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
        image: "aube3.png",
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
        image: "paysage_montagne.png",
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
        image: "carte_algue_saine.png",
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
        }
    },

    102: {
        image: "litoral.png",
        description: `Gardien : Les contrées de cette planète sont très variées et je ne doute pas qu'un jour ton peuple les aura toutes explorées. Où voudrais-tu lui que ton peuple s'installe en premier lieu ?`,
        choices: {
            "Proche des côtes océaniques": {
                effect() {
                    addPassive("ocean");
                }
            },
            "Au pied des volcans": {
                effect() {
                    addPassive("volcan");
                }
            },
            "Dans la végétation luxuriante": {
                effect() {
                    addPassive("jungle")
                },
            }
        }
    },

    103: {
        image: "algues.png",
        description: `Gardien : Ton peuple doit se reproduire pour assurer son avenir. Que crois-tu être la meilleure stratégie reproductive à leur transmettre ?`,
        choices: {
            "Beaucoup de progénitures faibles": {
                effect() {
                    changeScore("bonheur", +10);
                    changeScore("environnement", -10);
                    addPassive("bebes_faibles");
                }
            },
            "Peu de progénitures fortes": {
                effect() {
                    changeScore("bonheur", +5);
                    changeScore("environnement", -5);
                    addPassive("bebes_forts");
                }
            }
        }
    },

    104: {
        image: "algues.png",
        description: `Gardien: Les générations futures tireront le meilleur de leurs ancêtres, par un processus de sélection amoureuse. Quel critère devra être favorisé ?`,
        choices: {
            "La force par des combats": {
                effect() {
                    changeScore("bonheur", -10);
                    addPassive("force");
                }
            },
            "La beauté par l'apparât": {
                effect() {
                    changeScore("bonheur", +5);
                    changeScore("environnement", -5);
                    addPassive("beauté");
                }
            }
        }
    },

    105: {
        image: "algues.png",
        description: `Le coeur de ce monde bat au rythme des saisons. Comment s'adapter aux périodes difficiles de grands froids et de vagues de chaleur ?`,
        choices: {
            "Hiberner": {
                effect() {
                    changeScore("bonheur", -10);
                    addPassive("hiberne");
                }
            },
            "Migrer": {
                effect() {
                    changeScore("bonheur", +5);
                    changeScore("environnement", -10);
                    addPassive("migre");
                }
            }
        }
    },

    106: {
        image: "algues.png",
        description: `Gardien: La communication est la clé du progrès social. Comment les individus de ton espèce communiqueront ensemble ?`,
        choices: {
            "Par le biais de signes": {
                effect() {
                    addPassive("signes");
                }
            },
            "Par des informations olfactives": {
                effect() {
                    addPassive("olfactif");
                }
            },
            "En utilisant des sons": {
                effect() {
                    addPassive("vocal")
                }
            }
        }
    },
    
    200: {
        image: "colonisation_celeste.png",
        description: `Gardien : Je te laisse désormais t'adresser à ta création. Des individus appelés prophètes entendrons ta voix et sauront, je l'espère, lui donner réalité.`,
        choices: {
            "Merci": {
            }
        }
    },


    201: {
        image: "colonisation_celeste.png",
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
            "Nourrissez-vous en.": {
                test() {
                    return state.passives.includes("carnivore")
                },
                effect() {
                    changeScore("bonheur", +15)
                    changeScore("environnement", -15)
                }
            }
        }
    },

    202: {
        image: "colonisation_celeste.png",
        description: `Prophète : Alpha, notre peuple se querelle. Certains voudraient changer de région pour varier nos sources de nourriture, et d’autres s’implanter et exploiter au mieux le territoire proche. Que pensez-vous bon de faire ?`,
        choices: {
            "Vous devriez vous sédentariser.": {
                effect() {
                    changeScore("bonheur", +10)
                    changeScore("environnement", -10)
                }
            },
            "N'ayez pas peur d'explorer.": {
                effect() {
                    changeScore("bonheur", +5)
                    changeScore("environnement", -5)
                }
            }
        }
    },

    203: {
        image: "colonisation_celeste.png",
        description: `Prophète : Alpha, notre peuple se querelle. Certains voudraient changer de région pour varier nos sources de nourriture, et d’autres s’implanter et exploiter au mieux le territoire proche. Que pensez-vous bon de faire ?`,
        choices: {
            "Vous devriez vous sédentariser.": {
                effect() {
                    changeScore("bonheur", +10)
                    changeScore("environnement", -10)
                }
            },
            "N'ayez pas peur d'explorer.": {
                effect() {
                    changeScore("bonheur", +5)
                    changeScore("environnement", -5)
                }
            }
        }
    }

    

}