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
        image: "aube2.png",
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
        image: "algue_saine.png",
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
        image: "aube3.png",
        description: `Prophète : Nous avons conquis un large territoire et continuons à l’explorer, cependant la taille de notre environnement connu commence à dépasser notre capacité d’orientation ...`,
        choices: {
            "Cartographiez le territoire au sol.": {
                effect() {
                    addPassive("cartographie");
                }
            },
            "Observez les étoiles et vous y trouverez des réponses.": {
                effect() {
                    addPassive("astronomie");
                }
            },
            "Balisez au sol.": {
                effect() {
                    addPassive("herboristerie");
                    changeScore("environnement", -5)
                }
            }
        }
    },

    204: {
        image: "algue_poison.png",
        description: `Prophète : Nombre de nos amis souffrent d'un mal mystérieux, d'aucuns s'imaginent que vous êtes la source de cette malédiction ...`,
        choices: {
            "Apprenez l'humilité, vous n'êtes que peu de choses à l'échelle de ce monde. ": {
                effect() {
                    changeScore("bonheur", -10)
                    changeScore("environnement", +10)
                }
            },
            "Vous devriez étudier les plantes qui vous entourent, elles recèlent de propriétés étonnantes.": {
                effect() {
                    changeScore("bonheur", +5)
                    changeScore("environnement", -5)
                    addPassive("herboristerie");
                }
            },
            "Méfiez-vous des contagions, organisez une quarantaine.": {
                effect() {
                    changeScore("bonheur", -5)
                }
            }
        }
    },

    205: {
        image: "colonisation_celeste.png",
        description: `Prophète : Parmi les différents groupes, on observe des luttes de pouvoir s'orienter sur la question de genre. Qui devrait dominer ?`,
        choices: {
            "Encouragez la domination masculine.": {
                effect(){
                    addPassive("dominationMasculine");
                }
            },
            "Encouragez la domination féminine.": {
                effect() {
                    addPassive("dominationFéminine");
                }
            },
            "Promouvez une société non fondée sur une inégalté de genre": {
                effect() {
                    addPassive("EquiteGenre");
                    changeScore("bonheur",+10);
                }
            }
        }
    },

    300: {
        image: "colonisation_celeste.png",
        description: `Prophète : Avec le développement de la société, le nombre d'individus qui nuisent à son bon fonctionnement prend également de l'ampleur. Comment pouvons-nous les punir et les décourager de continuer dans cette voie ?`,
        choices: {
            "Construisez des prisons et enfermez-les y.": {
                effect(){
                    addPassive("prisons");
                    changeScore("environnement",-10);
                }
            },
            "Eduquez-les afin qu'ils retrouvent le droit chemin.": {
                effect() {
                    addPassive("reinsertion");
                    changeScore("environnement",-5);
                    changeScore("bonheur",+10);
                }
            },
            "Instaurez la peine de mort.": {
                effect() {
                    addPassive("peineMort");
                    changeScore("environnement",+5);
                    changeScore("bonheur",-10);
                }
            },
            "Exilez-les de la société.": {
                effect() {
                    addPassive("Exil");
                    changeScore("environnement",-10);
                }
            }
        }
    },

    301: {
        image: "volcan_terre.png",
        description: `Prophète : notre société est de plus en plus énergivore, nos chercheurs sont parvenus à découvrir plusieurs sources d'énergie, la question de se pose de savoir laquelle développer industriellement.`,
        choices: {
            "Vous devriez utiliser le gaz emprisonné sous terre.": {
                effect(){
                    addPassive("gaz");
                    changeScore("environnement",-10);
                    changeScore("bonheur",+10);

                }
            },
            "Utiliser la puissance des courants marins me semble être une idée viable.": {
                test() {
                    return state.passives.includes("marine")
                },
                effect() {
                    addPassive("eolien");
                    changeScore("bonheur",+5);
                }
            },
            "Utiliser la force du vent me semble être une idée viable.": {
                test() {
                    return state.passives.includes("céleste")
                },
                effect() {
                    addPassive("hydrolique");
                    changeScore("bonheur",+5);
                }
            },
            "Mettre à profit la chaleur de la Terre me semble être une idée viable.": {
                test() {
                    return state.passives.includes("terrestre")
                },
                effect() {
                    addPassive("geothermique");
                    changeScore("bonheur",+5);
                }
            },

            "Vous pourriez étudier la matière elle-même et en extraire son énergie fondamentale.": {
                effect() {
                    addPassive("nucléaire");
                    changeScore("environnement",-15);
                    changeScore("bonheur",+15);
                }
            }
        }
    }




}
