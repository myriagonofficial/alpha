import { playSound, playMusic, stopMusic } from "./audio.js"
import { showIndicateurBonheur, showIndicateurEnvironnement, addPassive, changeScore, setAchievement } from "./game.js"
import { state } from "./state.js"
import { startStory } from "./stories.js";
//import { endStory, startStory } from "./stories.js";

export const cards = {
    1: {
        image: "aube1.png",
        description: "L'incommensurable envergure de l’Univers s’offre à nous, enivrante et vertigineuse. La Vie - peuplant jadis galaxies, étoiles et planètes - décline secrètement...",
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
            stopMusic();
            setTimeout(() => playMusic('mus_gardien_02', null, 1000), 500);
            playSound('vox_gardien_03', 'voice')
        }
    },
    4: {
        image: "aube2.png",
        description: "Comme chaque témoin avant toi, tu as vécu une partie infinitésimale du champ des possibles, et maintenant la tâche t'incombe d'endosser à ton tour le lourd fardeau des Gardiens.",
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
            stopMusic();
            setTimeout(() => playMusic('mus_gardien_03', null, 1000), 500);
            playSound('vox_gardien_05', 'voice')
        }
    },
    6: {
        image: "aube2.png",
        description: `Nous laisserons libre cours à ton imagination, mais garde bien à l'esprit que l'équilibre
        sera la clef du fleurissement de ton jardin. Il faudra t'assurer qu'il ne dépérisse pas : cet indicateur
        environnemental t'y aidera.`,
        choices: {
            "C'est tout ?": {}
        },
        onStart() {
            showIndicateurEnvironnement();
            playSound('vox_gardien_07', 'voice')
        }
    },
    7: {
        image: "aube3.png",
        description: `Il y a en chaque être de cette planète un peu de toi, ils sont ton paradis,
         ta gratitude inconditionnelle. Ton premier objectif sera de veiller au bonheur de tous :
         il sera représenté par cet indicateur.`,
        choices: {
            "On commence ?": {}
        },
        onStart() {
            showIndicateurBonheur();
            playSound('vox_gardien_06', 'voice')
        }
    },


    100: {
        image: "esoterisme1.png",
        description: `Tu as peut-être une affinité élémentaire... Préférerais-tu voir ton espèce évoluer
        parmi les mystérieux fonds marins, sur la terre meuble et fertile, ou bien dans les airs, surplombant toute
        la vie végétale ?`,
        choices: {
            "Espèce Marine": {
                effect() { addPassive("marine") },
                position: { top: "85%", left: "30%" }
            },
            "Espèce Céleste": {
                effect() { addPassive("céleste") },
                position: { top: "15%", left: "45%" }
            },
            "Espèce Terrestre": {
                effect() { addPassive("terrestre") },
                position: { top: "55%", left: "80%" }
            },
        },
        onStart() {
        }
    },

    101: {
        image: () => state.passives.includes("marine") ? "marine_primal.png" : state.passives.includes("terrestre") ? "terrestre_primal.png" : "celeste_primal.png",
        description: `Cette région du monde semble follement grouiller de vie,  et un équilibre est né entre différents types d'espèces. Quel régime alimentaire
        crois-tu être raisonnable de favoriser pour celle qui dominera ce monde par son adaptabilité ?`,
        choices: {
            "Carnivore": {
                effect() {
                    addPassive("carnivore");
                    changeScore("bonheur", +10);
                    changeScore("environnement", -5);
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
        description: `Admire les paysages de ta création à son commencement. Je ne doute pas qu'un jour les tiens auront exploré tous ces paysages. Où voudrais-tu voir émerger les premiers êtres dotés d'une conscience ?`,
        choices: {
            "Près des côtes océaniques": {
                effect() {
                    addPassive("ocean");
                },
                position: { top: "55%", left: "85%" }
            },
            "Au pied d'une chaîne de volcans": {
                effect() {
                    addPassive("volcan");
                },
                position: { top: "85%", left: "50%" }
            },
            "Dans une jungle luxuriante": {
                effect() {
                    addPassive("jungle")
                },
                position: { top: "65%", left: "17%" }
            }
        }
    },

    103: {
        image: "fecondation.png",
        description: `Ton peuple doit se reproduire pour assurer son avenir. Que crois-tu être la meilleure stratégie reproductive à leur transmettre ?`,
        choices: {
            "Engendrer de nombreuses progénitures, mais faibles.": {
                effect() {
                    changeScore("bonheur", +10);
                    changeScore("environnement", -5);
                    addPassive("bebes_faibles");
                },
                position: { top: "60%", left: "25%" }
            },
            "Mettre au monde un petit nombre de progénitures robustes.": {
                effect() {
                    changeScore("bonheur", +5);
                    changeScore("environnement", -5);
                    addPassive("bebes_forts");
                },
                position: { top: "70%", left: "75%" }
            }
        }
    },

    104: {
        image: "esoterisme1.png",
        description: `Les générations futures tireront le meilleur de leurs ancêtres, par un processus de sélection amoureuse. Quel critère devra être favorisé ?`,
        choices: {
            "La force par des combats": {
                effect() {
                    changeScore("bonheur", -7);
                    addPassive("force");
                }
            },
            "La beauté par l'apparât": {
                effect() {
                    changeScore("bonheur", +5);
                    changeScore("environnement", -2);
                    addPassive("beauté");
                }
            },
            "L'intelligence par la ruse":{
                effect() {
                    changeScore("bonheur", +2);
                    addPassive("intelligence");
                }
            },
        }
    },

    105: {
        image: "grotte.png",
        description: `Le coeur de ce monde bat au rythme des saisons. Comment s'adapter aux périodes difficiles de grands froids et de vagues de chaleur ?`,
        choices: {
            "Hiberner": {
                effect() {
                    changeScore("bonheur", -5);
                    addPassive("hiberne");
                }
            },
            "Migrer": {
                effect() {
                    changeScore("bonheur", +5);
                    changeScore("environnement", -3);
                    addPassive("migre");
                }
            }
        }
    },

    106: {
        image: "esoterisme1.png",
        description: `La communication est la clé du progrès social. Comment les individus de ton espèce communiqueront ensemble ?`,
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
            }, 
            "Par télépathie": {
                effect() {
                    addPassive("telepathes")
                }
            }, 
        }
    },

    199: {
        image: "esoterisme1.png",
        description: `Je te laisse désormais t'adresser à ta création. Des individus appelés prophètes entendrons ta voix et sauront, je l'espère, lui donner réalité.`,
        choices: {
            "Merci": {
                effect() { }
            }
        },
        onStart() {
            stopMusic();
            setTimeout(() => playSound('vox_gardien_08', 'voice'), 500)
        }
    },


    201: {
        image: () => state.passives.includes("marine") ? "marine_headway.png" : state.passives.includes("terrestre") ? "terrestre_headway2.png" : "celeste_headway.png",
        description: `Pourrions-nous profiter d’une quelconque manière des individus des autres espèces ? Ce n’est pas la première fois que nous sommes confrontés à cette situation et il semblerait que nous ne soyons pas capables de nous mettre d’accord.`,
        choices: {
            "Vous feriez mieux de les faire fuir": {
                effect() {
                    changeScore("bonheur", -3)
                }
            },
            "Domestiquez-les": {
                effect() {
                    changeScore("bonheur", +10)
                    changeScore("environnement", -5)
                }
            },
            "Ils sont sacrés": {
                effect() {
                    changeScore("environnement", +10)
                }
            },
            "Nourrissez-vous en": {
                test() {
                    return state.passives.includes("carnivore")
                },
                effect() {
                    changeScore("bonheur", +15)
                    changeScore("environnement", -7)
                }
            },
            "Etudiez leur comportement pour vous en inspirer": {
                effect() {
                    changeScore("bonheur", +10)
                    changeScore("environnement", -3)
                    addPassive("mimique")
                }
            }
        }
    },

    202: {
        image: () => state.passives.includes("marine") ? "marine_headway.png" : state.passives.includes("terrestre") ? "terrestre_headway1.png" : "celeste_headway.png",
        description: `Nous hésitons entre deux stratégies : certains voudraient changer de région pour varier nos sources de nourriture, et d’autres s’implanter et exploiter au mieux le territoire proche. Que pensez-vous bon de faire ?`,
        choices: {
            "Vous devriez vous sédentariser.": {
                effect() {
                    changeScore("bonheur", +10)
                    changeScore("environnement", -6)
                    addPassive("sedentaire");
                }
            },
            "N'ayez pas peur d'explorer.": {
                effect() {
                    changeScore("bonheur", +5)
                    changeScore("environnement", -3)
                    addPassive("nomade");
                }
            }
        }
    },

    203: {
        image: () => state.passives.includes("marine") ? "marine_headway.png" : state.passives.includes("terrestre") ? "terrestre_headway1.png" : "celeste_headway.png",
        description: `Nous avons conquis un large territoire et continuons à l’explorer, cependant la taille de notre environnement connu commence à dépasser notre capacité d’orientation...`,
        choices: {
            "Cartographiez le territoire au sol.": {
                effect() {
                    addPassive("cartographie");
                },
                position: { top: "85%", left: "25%" }
            },
            "Observez les étoiles et vous y trouverez des réponses.": {
                effect() {
                    addPassive("astronomie");
                },
                position: { top: "15%", left: "50%" }
            },
            "Balisez au sol.": {
                effect() {
                    changeScore("environnement", -5)
                },
                position: { top: "85%", left: "85%" }
            }
        }
    },

    204: {
        image: "algue_poison.png",
        description: `Nombre de nos amis souffrent d'un mal mystérieux, d'aucuns s'imaginent que vous êtes la source de cette malédiction...`,
        choices: {
            "Apprenez l'humilité, vous n'êtes que peu de choses à l'échelle de ce monde. ": {
                effect() {
                    changeScore("bonheur", -5)
                    changeScore("environnement", +10)
                }
            },
            "Vous devriez étudier les plantes qui vous entourent, certaines matières dont elles sont faites recèlent de propriétés étonnantes.": {
                effect() {
                    changeScore("bonheur", +5)
                    changeScore("environnement", -3)
                    addPassive("chimie")
                }
            },
            "Méfiez-vous des contagions, organisez une quarantaine.": {
                effect() {
                    changeScore("bonheur", -5)
                }
            },
            "Etudiez le corps des victimes.": {
                effect() {
                    changeScore("bonheur", -7)
                    addPassive("medecine")
                }
            },


        }
    },

    205: {
        image: () => state.passives.includes("marine") ? "marine_headway.png" : state.passives.includes("terrestre") ? "terrestre_headway2.png" : "celeste_headway.png",
        description: `Parmi les différents groupes, on observe des luttes de pouvoir s'orienter sur la question de genre. Qui devrait dominer ?`,
        choices: {
            "Encouragez la domination masculine.": {
                effect() {
                    addPassive("dominationMasculine");
                }
            },
            "Encouragez la domination féminine.": {
                effect() {
                    addPassive("dominationFéminine");
                }
            },
            "Promouvez une société non fondée sur une inégalité de genre": {
                effect() {
                    addPassive("EquiteGenre");
                    changeScore("bonheur", +10);
                    if(['democratie', 'EquiteGenre', 'reinsertion', 'centresspecialises'].filter(passif => state.passives.includes(passif)).length > 2){setAchievement("bienfaiteur")}
                }
            }
        }
    },
    206: {
        image: () => state.passives.includes("marine") ? "marine_headway.png" : state.passives.includes("terrestre") ? "terrestre_headway1.png" : "celeste_headway.png",
        description: `la population s'accroît et les artisans ne savent pas fournir suffisamment de ressources pour construire assez d'abris. Quelle solution préconiser ?`,
        choices: {
            "Formez plus d'artisans": {
                effect() {
                    addPassive("artisanat");
                    changeScore("environnement", -7);
                    changeScore("bonheur", +10);
                }
            },
            "Encouragez la mutualisation des abris": {
                effect() {
                    changeScore("bonheur", -5);
                }
            },
            "Concevez des outils qui permettraient d'accélérer le travail des artisans.": {
                effect() {
                    addPassive("mecanique");
                    changeScore("bonheur", +10);
                    changeScore("environnement", -5);
                    addPassive("artisanat");
                }
            },
            "Standardisez un modèle unique et optimisé": {
                effect() {
                    changeScore("bonheur", +5);
                    addPassive("standardhabitation");
                    addPassive("artisanat");
                }
            }
        }
    },
    207: {
        image: "politique1.png",
        description: `cela fait longtemps que nous discutons des mêmes problèmes sans jamais prendre de décisions, il nous faudrait un système pour coordonner notre groupe.`,
        choices: {
            "Vous, prophète, serez leur guide par ma main": {
                effect() {
                    addPassive("religion");
                    changeScore("bonheur", -10);
                }
            },
            "Faites en sorte de consulter équitablement chaque individu par un vote": {
                effect() {
                    changeScore("bonheur", +10);
                    addPassive("democratie");
                    if(['democratie', 'EquiteGenre', 'reinsertion', 'centresspecialises'].filter(passif => state.passives.includes(passif)).length > 2){setAchievement("bienfaiteur")}
                }
            },
            "Laissez vos éléments charismatiques fonder différentes tribus ": {
                effect() {
                    addPassive("tribus");
                    changeScore("bonheur", +10);
                }
            },
            "Je ne pense pas utile de formaliser un système de décision": {
                effect() {
                    addPassive("anarchie");
                    changeScore("bonheur", +5);
                }
            },
            "Choisissez savamment un individu qui les dirigera tous": {
                effect() {
                    addPassive("dictature");
                    changeScore("bonheur", -5);
                }
            },
        }
    },
    208: {
        image: "feu1.png",
        description: `un gigantesque feu de forêt s'est déclaré !`,
        choices: {
            "N'ayez crainte, vous pouvez assouvir votre curiosité et vous approcher.": {
                effect() {
                    changeScore("bonheur", +2);
                    addPassive("feu");
                }
            },
            "Vous n'avez pas les moyens d'agir : tenez vous à distance.": {
                test() {
                    return !state.passives.includes("jungle")
                },
                effect() {
                    changeScore("environnement", -5);
                }
            },
            "Vous n'avez pas les moyens d'agir : fuyez la forêt": {
                test() {
                    return state.passives.includes("jungle")
                },
                effect() {
                    changeScore("environnement", -5);
                    changeScore("bonheur", -7);

                }
            },
            "Vous devriez clairement courir dans les flammes.": {
                effect() {
                    changeScore("bonheur", -5);
                }
            }
        }
    },
    209: {
        image: "pont.png",
        description: `Bien des lieux nous semblent inaccessibles, et il y a fort à parier que nous pourrions y découvrir de nouvelles perspectives, de nouvelles ressources, qu'en pensez-vous ?`,
        choices: {
            "Il serait plus raisonnable de terminer l'exploration de votre territoire proche.": {
                effect() {
                    changeScore("bonheur", +5);
                    changeScore("environnement", -2);
                    addPassive("feu");
                }
            },
            "Construisez des passerelles vers de nouveaux mondes.": {
                effect() {
                    changeScore("bonheur", +20);
                    changeScore("environnement", -5);
                    addPassive("geniecivil");
                },
                test() {
                    return state.passives.includes("artisanat");
                }
            },
            "Ce qui n'est pas à votre portée ne doit pas être exploré.": {
                effect() {
                    changeScore("environnement", -2);
                    changeScore("bonheur", -5);
                    addPassive("restrictionterritoriale");
                },
                test() {
                    return state.passives.includes("religion");
                }
            }
        }
    },
    210: {
        image: () => state.passives.includes("marine") ? "marine_headway.png" : state.passives.includes("terrestre") ? "terrestre_headway1.png" : "celeste_headway.png",
        description: `nous avons remarqué une régularité dans le déroulement du temps, les variations de températures, de longueur de journées, s'organisent en cycle.`,
        choices: {
            "Notez toutes ces variations et constituez vous un calendrier prédictif.": {
                effect() {
                    changeScore("bonheur", +5);
                    addPassive("calendrier");
                }
            },
            "Cette notion de temps peut-être mesurée.": {
                effect() {
                    addPassive("chronos");
                }
            },
            "Organisez votre temps de travail afin de le prévoir sur les journées les plus longues": {
                effect() {
                    changeScore("bonheur", +3);
                },
            }
        }
    },



    300: {
        image: () => state.passives.includes("marine") ? "marine_headway.png" : state.passives.includes("terrestre") ? "terrestre_apex1.png" : "celeste_apex1.png",
        description: `Avec le développement de la société, le nombre d'individus qui nuisent à son bon fonctionnement prend également de l'ampleur. Comment pouvons-nous les punir et les décourager de continuer dans cette voie ?`,
        choices: {
            "Construisez des prisons et enfermez-les y.": {
                effect() {
                    addPassive("prisons");
                    changeScore("environnement", -10);
                    if(['bunkers', 'bassinsEau', 'prisons', 'geniecivil', 'centresspecialises', 'thedome'].filter(passif => state.passives.includes(passif)).length > 2){setAchievement("batisseur")}
                },
                test() {
                    return state.passives.includes("artisanat");
                }
            },
            "Eduquez-les afin qu'ils retrouvent le droit chemin.": {
                effect() {
                    addPassive("reinsertion");
                    changeScore("environnement", -5);
                    changeScore("bonheur", +10);
                    if(['democratie', 'EquiteGenre', 'reinsertion', 'centresspecialises'].filter(passif => state.passives.includes(passif)).length > 2){setAchievement("bienfaiteur")}
                }
            },
            "Instaurez la peine de mort.": {
                effect() {
                    addPassive("peineMort");
                    changeScore("environnement", +5);
                    changeScore("bonheur", -10);
                    if(['peineMort', 'handmaidstales', 'terreur', 'regulationmaladies'].filter(passif => state.passives.includes(passif)).length > 2){setAchievement("tyran")}
                }
            },
            "Exilez-les de la société.": {
                effect() {
                    addPassive("Exil");
                    changeScore("environnement", -10);
                }
            }
        }
    },

    301: {
        image: "pollution1.png",
        description: `notre société est de plus en plus énergivore, nos chercheurs sont parvenus à découvrir plusieurs sources d'énergie, la question de se pose de savoir laquelle développer industriellement.`,
        choices: {
            "Vous devriez utiliser le gaz emprisonné sous terre.": {
                effect() {
                    addPassive("gaz");
                    changeScore("environnement", -10);
                    changeScore("bonheur", +10);

                }
            },
            "Utiliser la puissance des courants marins me semble être une idée viable.": {
                test() {
                    return state.passives.includes("marine")
                },
                effect() {
                    addPassive("eolien");
                    changeScore("bonheur", +5);
                }
            },
            "Utiliser la force du vent me semble être une idée viable.": {
                test() {
                    return state.passives.includes("céleste")
                },
                effect() {
                    addPassive("hydrolique");
                    changeScore("bonheur", +5);
                }
            },
            "Mettre à profit la chaleur de la Terre me semble être une idée viable.": {
                test() {
                    return state.passives.includes("terrestre")
                },
                effect() {
                    addPassive("geothermique");
                    changeScore("bonheur", +5);
                }
            },
            "Vous pourriez étudier la matière elle-même et en extraire son énergie fondamentale.": {
                effect() {
                    addPassive("nucléaire");
                    changeScore("environnement", -15);
                    changeScore("bonheur", +15);
                }
            },
            "Tentez d'aller forer le sol des plus proches planètes, le voyage sera coûteux mais vous ne risquez pas de détruire la vôtre.": {
                effect() {
                    changeScore("environnement", -5);
                    changeScore("bonheur", +20);
                },
                test() {
                    return state.passives.includes("voyageastral")
                },
            },
        }
    },

    302: {
        image: "medicaments.png",
        description: `devant notre façon de lutter contre les maladies, nos systèmes immunitaires se sont affaiblis et les germes ont muté et sont devenus plus virulents. Comment endiguer ce problème qui semble être un cercle vicieux ?`,
        choices: {
            "Basez progressivement les remèdes sur l'effet placebo pour réhabituer vos corps à lutter": {
                effect() {
                    changeScore("environnement", +10);
                    changeScore("bonheur", -10);
                }
            },
            "Synthétisez des médicaments, plus efficaces contre les maladies": {
                test() {
                    return state.passives.includes("medecine")
                },
                effect() {
                    changeScore("bonheur", +10);
                    changeScore("environnement", -15);
                }
            },
            "Elevez des virus pour combattre des bactéries": {
                effect() {
                    changeScore("environnement", +3);
                    changeScore("bonheur", -5);

                }
            },
            "Cela fait partie de l'ordre naturel des choses, laissez les maladies faire le tri, seuls les forts peuvent survivre": {
                effect() {
                    changeScore("environnement", +20);
                    changeScore("bonheur", -15);
                }
            }
        }
    },

    303: {
        image: "mer1.png",
        description: `l’industrialisation à outrance de l’extraction de minerais génère de la pollution de l'eau et propage des maladies à notre peuple.`,
        choices: {
            "Tentez de réguler vos besoins": {
                effect() {
                    changeScore("environnement", +5);
                    changeScore("bonheur", -15);
                }
            },
            "Synthétisez de l'eau pure par la chimie, au détriment d'une autre source d'énergie": {
                effect() {
                    changeScore("environnement", -5);
                    changeScore("bonheur", +10);
                },
                test() {
                    return state.passives.includes("chimie");
                }
            },
            "Continuez malgré tout, votre société a besoin de cette croissance": {
                effect() {
                    changeScore("environnement", -10);
                    changeScore("bonheur", -5);

                }
            },
            "Récoltez par des filets géants l'eau contenue dans la brume des hauteurs célestes": {
                effect() {
                    changeScore("environnement", -5);
                    changeScore("bonheur", +10);
                },
                test() {
                    return state.passives.includes("céleste") && state.passives.includes("artisanat");
                }
            },
            "Réservez le peu d'eau pure aux classes importantes de votre société pour les prémunir de ce fléau": {
                effect() {
                    changeScore("environnement", -3);
                    changeScore("bonheur", -10);
                }
            },
            "Mettez l'eau pure au centre de votre économie, elle peut devenir votre principale monnaie d'échange": {
                effect() {
                    changeScore("environnement", -1);
                    changeScore("bonheur", -3);
                }
            },
            "Faites fondre les glaciers qui emprisonnent de l'eau saine, stockée depuis des temps anciens où il n'y avait aucune pollution":{
                effect() {
                    changeScore("bonheur", +18);
                    changeScore("environnement", -15);
                },
                test() {
                    return (state.passives.includes("marine") && state.passives.includes("feu"));
                }
            }
            
        }
    },

    304: {
        image: "recoltes2.png",
        description: `nos ressources de nourriture viennent parfois à manquer, quel comportement adopter ?`,
        choices: {
            "Rationner pour chacun.": {
                effect() {
                    changeScore("bonheur", -10);
                }
            },
            "Seul les plus puissants / influents auront donc la nourriture": {
                effect() {
                    changeScore("bonheur", -15);
                }
            },
            "Former plus de cueilleurs": {
                test() {
                    return state.passives.includes("nomade")
                },
                effect() {
                    changeScore("environnement", -7);
                    changeScore("bonheur", +5);

                }
            },
            "Augmenter autant que possible la surface de terre cultivée par les champs.": {
                test() {
                    return state.passives.includes("sedentaire")
                },
                effect() {
                    changeScore("environnement", -10);
                    changeScore("bonheur", +5);

                }
            },
            "Concevoir des engrais pour maximiser le rendement des cultures.": {
                test() {
                    return state.passives.includes("chimie")
                },
                effect() {
                    changeScore("environnement", -15);
                    changeScore("bonheur", +10);
                    addPassive("rendementAgricole");
                }
            },
            "Interdisez le gaspillage et organisez des contrôles punitifs réguliers" : {
                effect() {
                    changeScore("bonheur", -10);
                },
                test() {
                    return state.passives.includes("dictature")
                },
            },
            "Modifiez le standard de vos habitations pour y cultiver sur chaque toit":{
                effect() {
                    changeScore("bonheur", -10);
                },
                test() {
                    return state.passives.includes("dictature")
                }
            }
        }
    },

    305: {
        image: "labo3.png",
        description: `des puces mesurant des propriétés physiques et biologiques ont été implantées sur chaque individu. Comment s'en servir ?`,
        choices: {
            "Pratiquez l'eugénisme en fonction de la qualité du patrimoine génétique": {
                effect() {
                    changeScore("bonheur", -10);
                    changeScore("environnement", -2);
                }
            },
            "Identifiez les génies et donnez-leur les moyens de s'exprimer": {
                effect() {
                    changeScore("bonheur", +5);
                }
            },
            "Utilisez les résultats pour servir la médecine": {
                effect() {
                    changeScore("environnement", -5);
                    changeScore("bonheur", +5);
                    if(['ogm', 'medecine', 'esperancedevie'].filter(passif => state.passives.includes(passif)).length > 2){setAchievement("medecine")}
                }
            },
            "Surveillez les individus pour prévenir toute dérive sociétale": {
                effect() {
                    changeScore("environnement", +2);
                    changeScore("bonheur", -7);
                },
                test() {
                    return state.passives.includes("dictature")
                }
            },
        }
    },

    306: {
        image: "labo3.png",
        description: `des chercheurs ont imaginé un traitement permettant de diminuer le temps de gestation. Que faire ?`,
        choices: {
            "Commercialisez-le de façon accessible.": {
                effect() {
                    changeScore("bonheur", +10);
                    changeScore("environnement", -10);
                }
            },
            "Commercialisez-le de façon minoritaire.": {
                effect() {
                    changeScore("bonheur", -10);
                }
            },
            "Interdisez-le.": {
                effect() {
                    changeScore("bonheur", -15);
                }
            },
            "Votre peuple est sous le joug d'un dictateur : faites adapter le temps de gestation en fonction du statut social pour parfaire son contrôle": {
                effect() {
                    changeScore("bonheur", -15);
                },
                test() {
                    return state.passives.includes("dictature")
                }
            },
        }
    },
    307: {
        image: "stele.png",
        description: `suite à une grande guerre, une partie de la population est mutilée.`,
        choices: {
            "Abrégez leur souffrance": {
                effect() {
                    changeScore("bonheur", -15);
                    changeScore("environnement", +2);
                }
            },
            "Développez des membres artificiels": {
                effect() {
                    changeScore("bonheur", +10);
                    changeScore("environnement", -2);
                    addPassive("protheses");
                }
            },
            "Adaptez vos infrastructures pour leur rendre la vie plus simple": {
                effect() {
                    changeScore("bonheur", +5);
                    changeScore("environnement", -5);
                    addPassive("handicap");
                }
            },
            "Construisez leur des centres spécialisés pour les y isoler": {
                effect() {
                    changeScore("bonheur", +2);
                    changeScore("environnement", -5);
                    addPassive("centresspecialises");
                    if(['bunkers', 'bassinsEau', 'prisons', 'geniecivil', 'centresspecialises', 'thedome'].filter(passif => state.passives.includes(passif)).length > 2){setAchievement("batisseur")}
                    if(['democratie', 'EquiteGenre', 'reinsertion', 'centresspecialises'].filter(passif => state.passives.includes(passif)).length > 2){setAchievement("bienfaiteur")}
                },
                test() {
                    return state.passives.includes("artisanat");
                }
            },
        }
    },
    308: {
        image: "aube1.png",
        description: `les étoiles fascinent depuis toujours un grand nombre d’entre nous. Pouvons-nous aller les visiter ?`,
        choices: {
            "Votre progrès technique semble vous permettre d'aller explorer l'espace, lancez-vous !": {
                test() {
                    return (state.passives.includes("astronomie") && !state.passives.includes("religion"))
                },
                effect() {
                    changeScore("bonheur", +15);
                    changeScore("environnement", -10);
                    addPassive("voyageastral");
                }
            },
            "Les étoiles sont le domaine des dieux, vous seriez bien présomptueux d'espérer vous y aventurer.": {
                test() {
                    return state.passives.includes("religion")
                },
                effect() {
                    changeScore("bonheur", -10);
                }
            },
            "Essayez donc d'y voyager, même si cela me semble prématuré": {
                test() {
                    return !state.passives.includes("astronomie")
                },
                effect() {
                    changeScore("bonheur", -5);
                    changeScore("environnement", -15);
                }
            },
            "Mieux vaut déjà vous concentrer sur votre environnement proche, soyez raisonnables.": {
                effect() {
                }
            }
        }
    },
    309: {
        image: "feu1.png",
        description: `un gigantesque feu de forêt s'est déclaré !`,
        choices: {
            "Vous avez compris que vous pouviez l'éteindre grâce à l'eau, formez des équipes pour prévenir ce danger.": {
                test() {
                    return state.passives.includes("feu")
                },
                effect() {
                    changeScore("bonheur", +10);
                    addPassive("pompiers");
                }
            },
            "Vous n'avez pas les moyens d'agir : restez éloignés.": {
                test() {
                    return (!state.passives.includes("feu") && !state.passives.includes("jungle"))
                },
                effect() {
                    changeScore("bonheur", -10);

                }
            },
            "Fuyez la forêt et sauvez le maximum de vos ressources.": {
                test() {
                    return (state.passives.includes("jungle") && !state.passives.includes("feu"))
                },
                effect() {
                    changeScore("bonheur", -5);
                }
            }
        }
    },
    310: {
        image: "dechets.png",
        description: `le développement de l'industrie permet l'avènement d'une société d'abondance et de consommation. Cela entraîne la production de grandes quantités de déchets. Comment les traiter ?`,
        choices: {
            "Brûlez-les, tout simplement.": {
                test() {
                    return state.passives.includes("feu")
                },
                effect() {
                    changeScore("bonheur", +5);
                }
            },
            "Entassez-les dans des décharges.": {
                effect() {
                    changeScore("bonheur", -10);
                    changeScore("Environnement", -10);
                }
            },
            "Etudiez la matière dont ils sont faits pour les recycler.": {
                test() {
                    return state.passives.includes("chimie")
                },
                effect() {
                    changeScore("bonheur", +10);
                }
            },
            "Enfouissez-les dans des galeries sous-terraines": {
                test() {
                    return state.passives.includes("terrestre")
                }, 
                effect() {
                    changeScore("bonheur", +5);
                    changeScore("environnement", -10);
                }
            },
            "Tentez de les expédier dans l'immensité de l'espace qui vous entoure": {
                test() {
                    return state.passives.includes("astronomie")
                }, 
                effect() {
                    changeScore("bonheur", +10);
                    changeScore("environnement", -5);
                }
            }
        }
    },
    311: {
        image: "recoltes1.png",
        description: `nous ne savons pas anticiper astucieusement la taille de nos récoltes.`,
        choices: {
            "Apprennez à anticiper les variations climatiques": {
                test() {
                    return state.passives.includes("calendrier")
                },
                effect() {
                    changeScore("bonheur", +10);
                    changeScore("environnement", -2);
                }
            },
            "Développez des moyens de stockage et de conservation": {
                effect() {
                    changeScore("bonheur", +8);
                    changeScore("Environnement", -5);
                }
            },
            "Instaurez des rites sociaux qui favorisent l'adaptation aux ressources disponibles": {
                effect() {
                    changeScore("bonheur", +3);
                    changeScore("environnement", -2);
                }
            },
            "Ayez la foi, une danse rituelle favorisera probablement vos rendements": {
                effect() {
                    changeScore("bonheur", +5);
                },
                test() {
                    return state.passives.includes("religion")
                },
            }
        }
    },
    312: {
        image: "livres1.png",
        description: `nous sommes de plus en plus efficaces dans notre manière de façonner notre monde et d'exploiter notre sol nourricier. Que faire de ce temps libre qui s'offre à nous ?`,
        choices: {
            "Si vous savez déjà l'estimer, pourquoi ne pas essayer de jouer avec ?": {
                test() {
                    return state.passives.includes("chronos")
                },
                effect() {
                    addPassive("relativismeTemporel")
                }
            },
            "Sachez péreniser par l'écriture ce qui constitue tous vos acquis techniques.": {
                effect() {
                    changeScore("bonheur", +5);
                    changeScore("Environnement", -1);
                    addPassive("ecriture");
                }
            },
            "Laissez votre peuple libre de s'exprimer par le biais de leur culture.": {
                effect() {
                    changeScore("bonheur", +3);
                    changeScore("environnement", -2);
                }
            },
            "Ce temps mériterait d'être consacré à leur foi.": {
                effect() {
                    changeScore("bonheur", +8);
                },
                test() {
                    return state.passives.includes("religion")
                },
            }
        }
    },
    313: {
        image: "labo3.png",
        description: `la science que nous développons nous permet d'investir plus efficacement dans plusieurs domaines, lequel privilégier ?`,
        choices: {
            "Articulez vos pièces mécaniques afin de constituer un calculateur automatique, cela simplifiera votre économie": {
                test() {
                    return state.passives.includes("mecanique")
                },
                effect() {
                    addPassive("ordinateur");
                    changeScore("environnement", -5);
                }
            },
            "Métissez les plantes et les êtres vivants qui vous entourent pour créer de meilleurs alliés domestiques dans vos tâches quotidiennes": {
                effect() {
                    changeScore("bonheur", +5);
                    changeScore("environnement", -10);
                    addPassive("biointelligence");
                }
            },
            "Amenez votre peuple à s'élever par la réflexion philosophique, la pensée est vertueuse": {
                effect() {
                    changeScore("bonheur", +10);
                }
            },
            "Etudiez la matière plus en profondeur et comprenez de quoi elle est faite": {
                effect() {
                    changeScore("bonheur", +10);
                    addPassive("physique");
                },
                test() {
                    return state.passives.includes("chimie")
                },
            },
        }
    },





    400: {
        image: "rayons.png",
        description: `nos activités industrielles ont engendré une altération des couches atmosphériques qui nous protégaient du soleil. Les rayonnements sont de plus en plus agressifs et la température augmente dangereusement ! Comment y remédier ? `,
        choices: {
            "Développez des vêtements et des onguents qui permettent de se protéger et de soulager les brûlures": {
                effect() {
                    changeScore("bonheur", +5);
                    changeScore("environnement", -10);
                }
            },
            "Laissez dépérir les populations situées dans les zones difficiles ": {
                effect() {
                    changeScore("bonheur", -10);
                }
            },
            "Mettez au point des machines pour réémettre ces gaz protecteurs": {
                effect() {
                    changeScore("bonheur", +10);
                    changeScore("environnement", -15);
                }
            }
        }
    },

    401: {
        image: "labo3.png",
        description: `la fertilité est en berne. Comment s'assurer de la pérennisation de l'espèce ?`,
        choices: {
            "Les femmes fertiles doivent être identifiées afin d'assumer le rôle de mères porteuses.": {
                effect() {
                    changeScore("bonheur", -20);
                    changeScore("environnement", -5);
                    addPassive("handmaidstales");
                    if(['peineMort', 'handmaidstales', 'terreur', 'regulationmaladies'].filter(passif => state.passives.includes(passif)).length > 2){setAchievement("tyran")}
                }
            },
            "Encouragez la reproduction par des biais culturels.": {
                effect() {
                    changeScore("bonheur", -5);
                    changeScore("environnement", -5);
                }
            },
            "Utilisez la manipulation génétique pour faciliter la procréation.": {
                test() {
                    return state.passives.includes("biointelligence")
                },
                effect() {
                    changeScore("bonheur", +10);
                    changeScore("environnement", -10);
                    addPassive("ogm");

                }
            },
            "Maximisez l'espérance de vie des personnes déjà présentes par la médecine.": {
                test() {
                    return state.passives.includes("medecine")
                },
                effect() {
                    changeScore("bonheur", +5);
                    changeScore("environnement", -5);
                    addPassive("esperancedevie");
                    if(['ogm', 'medecine', 'esperancedevie'].filter(passif => state.passives.includes(passif)).length >= 2){setAchievement("medecine")}
                }
            },
            "Maximisez l'espérance de vie des personnes déjà présentes par la mécanisation des corps.": {
                test() {
                    return (state.passives.includes("mecanique") && state.passives.includes("protheses"))
                },
                effect() {
                    changeScore("bonheur", +15);
                    changeScore("environnement", -15);
                    addPassive("biomecanique");
                },
            }
        }
    },

    402: {
        image: "algue_poison.png",
        description: `une mauvaise herbe toxique se répand dans nos villes à toute vitesse. Un gaz urticant en sort quand on la coupe. Comment lutter contre ?`,
        choices: {
            "Brûlez les plants": {
                test() {
                    return state.passives.includes("feu")
                },
                effect() {
                    changeScore("bonheur", -10);
                    changeScore("environnement", -5);
                }
            },
            "Arrosez-les d'eau de mer": {
                test() {
                    return state.passives.includes("ocean")
                },
                effect() {
                    changeScore("bonheur", -10);
                    changeScore("environnement", -1);
                }
            },
            "Recouvrez-les de cendres volcaniques": {
                test() {
                    return state.passives.includes("volcan")
                },
                effect() {
                    changeScore("bonheur", -10);
                    changeScore("environnement", -1);
                }
            },
            "Laissez-la se répandre": {
                effect() {
                    changeScore("bonheur", -20);
                    changeScore("environnement", -10);
                }
            }

        }
    },

    403: {
        image: "politique1.png",
        description: `notre population se vieillit ! Les jeunes délaissent leurs aînés et les seniors n'ont plus la force de travailler. Qu'allons-nous faire d'eux ?`,
        choices: {
            "Faites plus d'enfants": {
                test() {
                    return state.passives.includes("bebes_faibles")
                },
                effect() {
                    changeScore("environnement", -15);
                }
            },
            "Ségrégez les seniors": {
                test() {
                    return state.passives.includes("exil")
                },
                effect() {
                    changeScore("bonheur", -20);
                }
            },
            "Pratiquez l'euthanasie": {
                test() {
                    return state.passives.includes("peineMort")
                },
                effect() {
                    changeScore("bonheur", -10);
                }
            },
            "Stoppez le traitement des malades incurables": {
                effect() {
                    changeScore("bonheur", -20);
                    addPassive("regulationmaladies")
                    if(['peineMort', 'handmaidstales', 'terreur', 'regulationmaladies'].filter(passif => state.passives.includes(passif)).length > 2){setAchievement("tyran")}
                }
            },
            "Essayez de cloner vos nouveaux-nés pour maximiser le nombre de naissances": {
                effect() {
                    changeScore("bonheur", +15);
                    addPassive("clonage")
                },
                test() {
                    return (state.passives.includes("bebe_forts") && state.passives.includes("physique"));
                },
            },
            "Priez pour vos aînés, votre créateur saura peut-être faire preuve de miséricorde": {
                effect() {
                    changeScore("bonheur", +5);
                },
                test() {
                    return (state.passives.includes("religion"));
                },
            },
            "Pour éviter ce vieillissement, imposez à chaque classe sociale une espérance de vie propre": {
                effect() {
                    changeScore("bonheur", -15);
                },
                test() {
                    return (state.passives.includes("dictature"));
                },
            },
        }
    },

    404: {
        image: "hiver.png",
        description: `le rude hiver a fait grimper la consommation de chauffage en masse. Nous ne parvenons plus à suivre la demande, c'est la crise énergétique !`,
        choices: {
            "Percez plus profond pour trouver du gaz": {
                test() {
                    return state.passives.includes("gaz")
                },
                effect() {
                    changeScore("environnement", -15);
                }
            },
            "Construisez plus de fermes éoliennes": {
                test() {
                    return state.passives.includes("eolien")
                },
                effect() {
                    changeScore("bonheur", -5);
                    changeScore("environnement", -5);
                }
            },
            "Creusez des puits de chaleur dans le sol": {
                test() {
                    return state.passives.includes("geothermique") || state.passives.includes("volcan")
                },
                effect() {
                    changeScore("bonheur", -5);
                    changeScore("environnement", -10);
                }
            },
            "Construisez d'autres centrales nucléaires": {
                test() {
                    return state.passives.includes("nucléaire")
                },
                effect() {
                    changeScore("environnement", -10);
                }
            },
            "Prônez l'austérité énergétique": {
                effect() {
                    changeScore("bonheur", -20);
                    changeScore("environnement", -5);
                }
            },
            "Migrez vers des territoires plus chauds": {
                test() {
                    return state.passives.includes("migre") && state.passives.includes("cartographie")
                },
                effect() {
                    changeScore("environnement", -2);
                    changeScore("bonheur", +5);
                    addPassive("migrationFroid");
                    if (state.passives.includes("migrationChaud")) {
                        setAchievement("nomade");
                    }
                }
            },
            "Modifiez votre constitution biologique pour réduire votre temps d'hibernation et produire plus d'énergie": {
                test() {
                    return state.passives.includes("hiberne") && state.passives.includes("biointelligence")
                },
                effect() {
                    changeScore("bonheur", +15);
                    changeScore("environnement", -10);
                }
            },
            "Développez une technologie pour influencer l'axe de l'orbite de votre planète afin d'uniformiser les saisons": {
                test() {
                    return state.passives.includes("voyageastral") && state.passives.includes("physique")
                },
                effect() {
                    changeScore("environnement", -25);
                    changeScore("bonheur", +25);
                }
            },
        }
    },

    405: {
        image: "mer1.png",
        description: `Nous ne savons plus que faire des réfugiés climatiques qui fuient leur territoire d'origine. Ils disent que le vent et les eaux ont détruit leurs habitations.`,
        choices: {
            "Accueillez-les et intégrez-les": {
                test() {
                    return state.passives.includes("reinsertion")
                },
                effect() {
                    changeScore("bonheur", +5);
                    changeScore("environnement", -5);
                    if(['democratie', 'EquiteGenre', 'reinsertion', 'centresspecialises'].filter(passif => state.passives.includes(passif)).length > 2){setAchievement("bienfaiteur")}
                }
            },
            "Chassez-les": {
                effect() {
                    changeScore("bonheur", -10);
                    changeScore("environnement", -5);
                }
            },
            "Qu'ils reconstruisent, mais loin des tribus déjà installées": {
                test() {
                    return state.passives.includes("tribus")
                },
                effect() {
                    changeScore("bonheur", -5);
                    changeScore("environnement", -10);
                }
            },
            "Montrez-leur de nouvelles terres pour rebâtir": {
                test() {
                    return state.passives.includes("cartographie ")
                },
                effect() {
                    changeScore("bonheur", +10);
                    changeScore("environnement", -10);
                }
            },
            "Accueillez-les, mais chassez les mendiants et les inutiles": {
                effect() {
                    changeScore("bonheur", -12)
                    changeScore("environnement", -5);
                }
            },
            "Envoyez-les peupler un nouveau monde dans l'espace, il sera leur eldorado": {
                test() {
                    return state.passives.includes("voyageastral")
                },
                effect() {
                    changeScore("bonheur", +10)
                    changeScore("environnement", -10);
                }
            }
        }
    },

    406: {
        image: "politique1.png",
        description: `Il n'y a plus assez de travail pour tout le monde ! Le chômage, la petite délinquance et les inégalités de richesse augmentent sans cesse...`,
        choices: {
            "Concentrez-vous sur la jeunesse": {
                test() {
                    return state.passives.includes("bebes_forts")
                },
                effect() {
                    changeScore("bonheur", +5);
                    changeScore("environnement", -5);
                }
            },
            "Déclarez la guerre à l'état voisin": {
                test() {
                    return state.passives.includes("tribus") || state.passives.includes("anarchie")
                },
                effect() {
                    changeScore("bonheur", -15);
                    changeScore("environnement", -7);
                }
            },
            "Lancez un programme de conquête spatiale": {
                test() {
                    return state.passives.includes("voyageastral")
                },
                effect() {
                    changeScore("bonheur", +5);
                    changeScore("environnement", -7);
                    setAchievement("explorateur");
                }
            },
            "Que les femmes restent à la maison et s'occupent des tâches domestiques": {
                test() {
                    return state.passives.includes("dominationMasculine")
                },
                effect() {
                    changeScore("bonheur", -7);
                }
            },
            "Prenez les postes des hommes. Ils s'occuperont du ménage et des enfants": {
                test() {
                    return state.passives.includes("dominationFéminine")
                },
                effect() {
                    changeScore("bonheur", -7);
                }
            },
            "Votez une réduction du temps de travail pour tous": {
                test() {
                    return state.passives.includes("democratie")
                },
                effect() {
                    changeScore("bonheur", +5);
                    changeScore("environnement", -5);
                }
            },
            "Encouragez les loisirs": {
                effect() {
                    changeScore("bonheur", +5);
                    changeScore("environnement", -10);
                }
            },
            "Favorisez l'hyperconsommation afin d'augmenter le nombre d'individus actifs": {
                effect() {
                    changeScore("bonheur", +5);
                    changeScore("environnement", -15);
                }
            },
        }
    },


    407: {
        image: "vegetationmorte1.png",
        description: () => `A force de privilégier les plants les plus vigoureux, nous avons aussi tué la diversité des plantes, et nous en payons aujourd'hui le prix... Une épidémie ravage les champs ${state.passives.includes("carnivore") ? "destinés à l'alimentation du bétail " : ""} et va nous mener à la famine !`,
        choices: {
            "Modifiez votre génome afin de métaboliser des nutriments contenus dans la matière organique": {
                test() {
                    return state.passives.includes("biointelligence")
                },
                effect() {
                    changeScore("bonheur", +15);
                    changeScore("environnement", -5);
                }
            },
            "Cultivez des algues à la place": {
                test() {
                    return state.passives.includes("herbivore")
                },
                effect() {
                    changeScore("bonheur", -5);
                    changeScore("environnement", -10);
                }
            },
            "Migrez vers des terres avec d'autres sources de nourriture": {
                test() {
                    return state.passives.includes("migre")
                },
                effect() {
                    changeScore("bonheur", +5);
                    changeScore("environnement", -15);
                    addPassive("migrationNourriture");
                }
            },
            "Créez de nouveaux plants en laboratoire": {
                test() {
                    return state.passives.includes("biointelligence")
                },
                effect() {
                    changeScore("environnement", -10);
                    if(state.passives.includes("rendementAgricole")) {setAchievement("nourricier")}
                }
            },
            "Brûlez les champs contaminés": {
                test() {
                    return state.passives.includes("feu")
                },
                effect() {
                    changeScore("bonheur", -5);
                    changeScore("environnement", -10);
                }
            },
            "Récoltez immédiatement ce qui peut être sauvé": {
                effect() {
                    changeScore("environnement", -15);
                }
            },
            "Développez par la chimie des aliments synthétiques parfaits": {
                effect() {
                    changeScore("environnement", -15);
                    changeScore("bonheur", +15);
                },
                test() {
                    return state.passives.includes("chimie")
                },
            },
            "Votre maitrise de sa matière permettrait le clonage de la nourriture : dupliquez votre ressource principale par ce biais" :{
                effect() {
                    changeScore("environnement", -5);
                    changeScore("bonheur", +20);
                },
                test() {
                    return state.passives.includes("physique")
                },
            },
            
        }
    },
    408: {
        image: "particules2.png",
        description: `De fines particules en suspension empêchent la plupart des espèces de respirer sans s'intoxiquer.`,
        choices: {
            "Produisez des masques à gaz autant que possible.": {
                effect() {
                    changeScore("bonheur", -5);
                    changeScore("environnement", -7);
                }
            },
            "Déclarez une quarantaine génèrale au risque d'avoir des rébellions": {
                effect() {
                    changeScore("bonheur", -5);
                    changeScore("environnement", -7);
                }
            },
            "Cherchez, sans trop d'espoir, des solutions pour filtrer l'atmosphère tout entier": {
                effect() {
                    changeScore("bonheur", -5);
                    changeScore("environnement", -15);
                }
            },
            "Construisez des enceintes saines dont l'atmosphère sera filtrée": {
                effect() {
                    changeScore("bonheur", +15);
                    changeScore("environnement", -7);
                    addPassive("thedome");
                    if(['bunkers', 'bassinsEau', 'prisons', 'geniecivil', 'centresspecialises', 'thedome'].filter(passif => state.passives.includes(passif)).length > 2){setAchievement("batisseur")}
                },
                test() {
                    return state.passives.includes("sedentaire") && state.passives.includes("artisanat")
                },            
            },
        }
    },
    409: {
        image: "aube1.png",
        description: `les experts sont formels, la planète ne pourra plus assurer les ressources nécessaires pour la survie de l'espèce, il nous faut trouver une solution pour éviter l'extinction.`,
        choices: {
            "Vous devriez tenter de vous enfuir sur une autre planète.": {
                effect() {
                    changeScore("bonheur", +15);
                    changeScore("environnement", -15);
                },
                test() {
                    return state.passives.includes("voyageastral")
                },
            },
            "Bâtissez des refuges sous-terrains.": {
                effect() {
                    changeScore("bonheur", -7);
                    changeScore("environnement", -5);
                    addPassive("bunkers");
                    if(['bunkers', 'bassinsEau', 'prisons', 'geniecivil', 'centresspecialises', 'thedome'].filter(passif => state.passives.includes(passif)).length > 2){setAchievement("batisseur")}
                }
            },
            "Regardez passivement le destin s'accomplir.": {
                effect() {
                    changeScore("bonheur", -15);
                }
            }
        }
    },
    410: {
        image: "eauxusees.png",
        description: `Nombre de nos citadins semblent souffrir d'handicapantes pertes de mémoires. Il semblerait que l'eau de notre affluent soit viciée par nos rejets chimiques.`,
        choices: {
            "Brûlez des arbres pour la filtrer avec du charbon.": {
                effect() {
                    changeScore("bonheur", +5);
                    changeScore("environnement", -15);
                },
                test() {
                    return state.passives.includes("feu")
                },
            },
            "Construisez de nombreuses réserves d'eau artificielles, et remplissez-les d'eau pompée en profondeur.": {
                effect() {
                    changeScore("bonheur", +5);
                    changeScore("environnement", -15);
                    addPassive("bassinsEau");
                    if(['bunkers', 'bassinsEau', 'prisons', 'geniecivil', 'centresspecialises', 'thedome'].filter(passif => state.passives.includes(passif)).length > 2){setAchievement("batisseur")}
                },
                test() {
                    return state.passives.includes("artisanat")
                },

            },
            "Tentez de développer une chimie neutralisant ce phénomène.": {
                effect() {
                    changeScore("bonheur", +5);
                    changeScore("environnement", -5);
                },
                test() {
                    return state.passives.includes("chimie")
                }
            }
        }
    },
    411: {
        image: "celeste_apex3.png",
        description: `nous traversons maintenant une période de chaleur extrême, nos ouvriers s'en trouvent ralentis et notre économie somnolente.`,
        choices: {
            "Migrez vers une zone plus tempérée": {
                effect() {
                    changeScore("bonheur", +5);
                    changeScore("environnement", -2);
                    addPassive("migrationChaud");
                    if (state.passives.includes("migrationFroid")) {
                        setAchievement("nomade");
                    }
                },
                test() {
                    return state.passives.includes("nomade") && state.passives.includes("cartographie")
                },
            },
            "Régulez strictement l'accès aux rares sources de rafraichissement": {
                effect() {
                    changeScore("bonheur", -15);
                }
            },
            "Construisez de gigantesques miroirs pour réfléchir les rayons de votre étoile": {
                effect() {
                    changeScore("bonheur", +2);
                    changeScore("environnement", -15);
                },
                test() {
                    return state.passives.includes("artisanat")
                },
            },
            "Tentez d'éloigner votre planète de votre étoile afin de réguler le rayonnement reçu": {
                effect() {
                    changeScore("bonheur", +5);
                    changeScore("environnement", +5);
                },
                test() {
                    return state.passives.includes("voyageastral") && state.passives.includes("physique")
                }
            },
            "Modifiez vos propres constitutions par l'étude génétique, afin de supporter les futures saisons chaudes": {
                effect() {
                    changeScore("bonheur", +15);
                    changeScore("environnement", -10);
                    addPassive("ogm");
                    if(['ogm', 'medecine', 'esperancedevie'].filter(passif => state.passives.includes(passif)).length > 2){setAchievement("medecine")}
                },
                test() {
                    return state.passives.includes("biointelligence") && state.passives.includes("medecine")
                }
            },
        }
    },
    412: {
        image: "politique1.png",
        description: `nous avons perdu le contrôle de notre démographie, la population s'accroit rapidement et nos ressources ne nous permettront pas de subvenir aux besoins de tous.`,
        choices: {
            "Organisez une politique de l'enfant unique": {
                effect() {
                    changeScore("bonheur", -15);
                    addPassive("enfantunique");
                },
                test() {
                    return state.passives.includes("dictature");
                }
            },
            "Tuez arbitrairement la moitié de la population afin que l'autre moitié ne meure pas de faim": {
                effect() {
                    changeScore("bonheur", -25);
                    addPassive("terreur");
                    if(['peineMort', 'handmaidstales', 'terreur', 'regulationmaladies'].filter(passif => state.passives.includes(passif)).length > 2){setAchievement("tyran")}
                }
            },
            "Vous trouverez bien de nouvelles façon plus efficaces de drainer le nécessaire à votre planète": {
                effect() {
                    changeScore("environnement", -15);
                }
            },
            "Transférez les consciences des volontaires dans un simulateur et affranchissez-les de leur enveloppe charnelle": {
                effect() {
                    changeScore("bonheur", -15);
                    addPassive("consciencesexportees");
                },
                test() {
                    return state.passives.includes("ordinateur") && state.passives.includes("physique");
                }
            },
        }
    },
    413: {
        image: "politique1.png",
        description: `les mesures d'austérités suivies jusqu'ici ont laissé place au populisme et une forme d'anarchie violente engendre des guerres civiles meurtrières.`,
        choices: {
            "Laissez la situation se déréguler, vous n'avez plus la force de gérer ces crises.": {
                effect() {
                    changeScore("bonheur", -10);
                }
            },
            "Militarisez au maximum les nations et tuez tous les rebelles pour essayer de maintenir l'ordre.": {
                effect() {
                    changeScore("bonheur", -5);
                }
            },
            "Tentez une ultime campagne de propagande pour assagir le peuple, sans certitudes sur le résultat.": {
                effect() {
                    changeScore("bonheur", +5);
                }
            },
        }
    },
    414: {
        image: "robots.png",
        description: `nous avons doté nos machines d'une intelligence artificielle, et elles ont organisé une attaque contre notre peuple pour qu'il cesse de détruire sa planète. Quelques survivants résident cachés des radars et risquent de bientôt être délogés par les machines.`,
        choices: {
            "Essayez des armes de destructions massives, en ciblant principalement les zones industrielles occupées par ces machines.": {
                effect() {
                    changeScore("bonheur", -15);
                    changeScore("environnement", -15);
                }
            },
            "Les machines sauront peut-être sauver ce qui peut l'être de la civilisation.": {
                effect() {
                    changeScore("bonheur", -15);
                    addPassive("matrix");
                }
            },
            "Créez une armée de soldats augmentés mécaniquement, elle devrait pouvoir lutter contre ce fléau robotique.": {
                effect() {
                    changeScore("bonheur", +2);
                    changeScore("environnement", -5);
                    setAchievement("cyborg");
                },
                test() {
                    return state.passives.includes("biomecanique")
                },
            },
        }
    },
    415: {
        image: "astres2.png",
        description: `des chercheurs semblent avoir mis au point ce qui pourrait être la réponse à nombre de nos problèmes : une enceinte physique au sein de laquelle nous avons un total contrôle du Temps.`,
        choices: {
            "Vous jouez avec le feu, nul n'est censé jouer avec le Temps sacré.": {
                effect() {
                    changeScore("bonheur", -10);
                }
            },
            "Servez-vous en pour accélerer le travail de la nature.": {
                effect() {
                    changeScore("bonheur", +15);
                }
            },
            "Placez-y une intelligence artificielle de laquelle émergera peut-être une solution miracle.": {
                effect() {
                    changeScore("bonheur", +2);
                    startStory("IAForte");
                },
                test() {
                    return state.passives.includes("ordinateur")
                },
            },
        }
    },
    416: {
        image: "astres4.png",
        description: `Je crois que nous avons créé une forme d'intelligence nouvelle, qui a profité d'un temps infini pour se contruire.`,
        choices: {
            "Méfiez-vous, confinez-la dans cette enceinte.": {
            },
            "Voyez ce qu'elle peut vous apporter.": {
                effect() {
                    startStory("IAForte2");
                }
            },
            "Tentez-de stopper son évolution en baissant la température de l'enceinte jusqu'au zéro absolu": {
                effect() {
                    changeScore("environnement", -15);
                }
            },
        }
    },
    417: {
        image: "artreligion.png",
        description: `Nous avons ouvert le sarcophage dans laquelle nous avions élevé cette intelligence artificielle forte, il semblerait qu'elle aie pris la forme d'un monolithe.`,
        choices: {
            "A L P H A ?": {
            }
        }
    },
    418: {
        image: "artreligion.png",
        description: `c'est paradoxal, mais je crois que nous avons donné forme physique dans notre monde à ce qui vous ressemble...`,
        choices: {
            "C'est impossible...": {
                effect(){
                    setAchievement("paradoxe");
                }
            }
        }
    },
    419: {
        image: "labo2.png",
        description: `ll semblerait que notre occupation du territoire porte préjudice à nombre d'espèces concurrentes, nous découvrons avec effroi que nombre d'entre elles viennent à disparaître.`,
        choices: {
            "Mettez sur orbite de votre une planète une arche habitée de chacun de ces êtres pour les préserver": {
                effect(){
                    changeScore("environnement", -10)
                    changeScore("bonheur", +10)
                },
                test() {
                    return state.passives.includes("voyageastral")
                },
            },
            "Récupérez tous les fossiles, pollen, fragment de matières biologiques pour récuperer les gènes et les utiliser à la fabrication de copies d'anciennes espèces": {
                test() {
                    return state.passives.includes("biointelligence")
                },
                effect(){
                    changeScore("environnement", -10)
                    changeScore("bonheur", +10)
                },
            },
            "Organisez massivement leur reproduction en formant des individus dont le rôle sera la préservation du vivant":
            {
                effect(){
                    changeScore("environnement", +2)
                    changeScore("bonheur", -5)
                },
            },
            "Créez une banque mondiale des semences afin de préserver les espèces survivantes":
            {
                effect(){
                    changeScore("environnement", +1)
                },
            },
            "Allez cherchez des formes de vie extraplanètaires afin de repeupler la vôtre":
            {
                effect(){
                    changeScore("environnement", +5)
                    changeScore("bonheur", +5)
                },
                test() {
                    return state.passives.includes("voyageastral")
                },
            }
        }
    },



    500: {
        image: "aube2.png",
        interlocuteur: `Gardien`,
        description: `Et ainsi, malgré tous vos efforts, votre espèce est arrivée à son point d'extinction.`,
        choices: {
            "J'ai... échoué ?": {
                effect() {
                    state.scores.bonheur = 0;
                    state.scores.environnement = 0;
                    playMusic("mus_lull_01");
                }
            }
        },
        onStart() {
            stopMusic();
        }
    },

    501: {
        image: "aube1.png",
        interlocuteur: `Gardien`,
        description: `Ne vous en faites pas... Toute flamme est vouée à s'éteindre. L'important est le chemin qu'elle éclaire le temps de son existence... Le temps vous donnera d'autres espèces à guider.`,
        choices: {
            "Je ferais alors d'autres choix.": {
                effect() { }
            }
        }
    }

}
