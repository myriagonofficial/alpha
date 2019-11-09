import { playSound, playMusic, stopMusic } from "./audio.js"
import { showIndicateurBonheur, showIndicateurEnvironnement, addPassive, changeScore, setAchievement } from "./game.js"
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
        description: `Tu as peut-être une affinité élémentaire ... Préférerais-tu voir ton espèce évoluer
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
        description: `Bien des espèces désireraient t'avoir comme guide. Quel régime alimentaire
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
        description: `Les contrées de cette planète sont très variées et je ne doute pas qu'un jour ton peuple les aura toutes explorées. Où voudrais-tu lui que ton peuple s'installe en premier lieu ?`,
        choices: {
            "Proche des côtes océaniques": {
                effect() {
                    addPassive("ocean");
                },
                position: { top: "55%", left: "85%" }
            },
            "Au pied des volcans": {
                effect() {
                    addPassive("volcan");
                },
                position: { top: "85%", left: "50%" }
            },
            "Dans la végétation luxuriante": {
                effect() {
                    addPassive("jungle")
                },
                position: { top: "65%", left: "17%" }
            }
        }
    },

    103: {
        image: "esoterisme1.png",
        description: `Ton peuple doit se reproduire pour assurer son avenir. Que crois-tu être la meilleure stratégie reproductive à leur transmettre ?`,
        choices: {
            "Engendrer de nombreuses progénitures, mais faibles.": {
                effect() {
                    changeScore("bonheur", +10);
                    changeScore("environnement", -10);
                    addPassive("bebes_faibles");
                }
            },
            "Mettre au monde un petit nombre de progénitures robustes.": {
                effect() {
                    changeScore("bonheur", +5);
                    changeScore("environnement", -5);
                    addPassive("bebes_forts");
                }
            }
        }
    },

    104: {
        image: "esoterisme1.png",
        description: `Les générations futures tireront le meilleur de leurs ancêtres, par un processus de sélection amoureuse. Quel critère devra être favorisé ?`,
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
        image: "esoterisme1.png",
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
            }
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
        image: "colonisation_celeste.png",
        description: `Pourrions-nous profiter d’une quelconque manière des individus des autres espèces ? Ce n’est pas la première fois que nous sommes confrontés à cette situation et il semblerait que nous ne soyons pas capables de nous mettre d’accord.`,
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
        description: `Alpha, notre peuple se querelle. Certains voudraient changer de région pour varier nos sources de nourriture, et d’autres s’implanter et exploiter au mieux le territoire proche. Que pensez-vous bon de faire ?`,
        choices: {
            "Vous devriez vous sédentariser.": {
                effect() {
                    changeScore("bonheur", +10)
                    changeScore("environnement", -10)
                    addPassive("sedentaire");
                    setAchievement("batisseur"); //TEMP

                }
            },
            "N'ayez pas peur d'explorer.": {
                effect() {
                    changeScore("bonheur", +5)
                    changeScore("environnement", -5)
                    addPassive("nomade");

                }
            }
        }
    },

    203: {
        image: "aube3.png",
        description: `Nous avons conquis un large territoire et continuons à l’explorer, cependant la taille de notre environnement connu commence à dépasser notre capacité d’orientation ...`,
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
                    addPassive("herboristerie");
                    changeScore("environnement", -5)
                },
                position: { top: "85%", left: "85%" }
            }
        }
    },

    204: {
        image: "algue_poison.png",
        description: `Nombre de nos amis souffrent d'un mal mystérieux, d'aucuns s'imaginent que vous êtes la source de cette malédiction ...`,
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
                    addPassive("herboristerie")
                }
            },
            "Méfiez-vous des contagions, organisez une quarantaine.": {
                effect() {
                    changeScore("bonheur", -5)
                }
            },
            "Etudiez le corps des victimes.": {
                effect() {
                    changeScore("bonheur", -10)
                    addPassive("medecine")
                }
            },


        }
    },

    205: {
        image: "colonisation_celeste.png",
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
                }
            }
        }
    },
    206: {
        image: "colonisation_celeste.png",
        description: `la population s'accroît et les artisans ne savent pas fournir suffisamment de ressources pour construire assez d'abris. Quelle solution préconiser ?`,
        choices: {
            "Former plus d'artisans.": {
                effect() {
                    addPassive("artisanat");
                    changeScore("environnement", -10);
                    changeScore("bonheur", +10);
                }
            },
            "Encourager la mutualisation des abris.": {
                effect() {
                    changeScore("bonheur", -10);
                }
            },
            "Concevoir des machines qui permettent d'accélérer le travail des artisans.": {
                effect() {
                    addPassive("mecanique");
                    changeScore("bonheur", +10);
                }
            }
        }
    },
    207: {
        image: "politique1.png",
        description: `cela fait longtemps que nous discutons des mêmes problèmes sans jamais prendre de décisions, il nous faudrait un système pour coordonner notre groupe.`,
        choices: {
            "Vous, prophète, serez leur guide par ma main.": {
                effect() {
                    addPassive("religion");
                    changeScore("bonheur", -10);
                }
            },
            "Faites en sorte de consulter équitablement chaque individu par un vote.": {
                effect() {
                    changeScore("bonheur", +10);
                    addPassive("democratie");
                }
            },
            "Laissez vos éléments charismatiques fonder différentes tribus. ": {
                effect() {
                    addPassive("tribus");
                    changeScore("bonheur", +10);
                }
            },
            "Je ne pense pas utile de formaliser un système de décision.": {
                effect() {
                    addPassive("anarchie");
                    changeScore("bonheur", +5);
                }
            }
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
                    changeScore("bonheur", -10);

                }
            },
            "Vous devriez clairement courir dans les flammes.": {
                effect() {
                    changeScore("bonheur", -10);
                }
            }
        }
    },







    300: {
        image: "colonisation_celeste.png",
        description: `Avec le développement de la société, le nombre d'individus qui nuisent à son bon fonctionnement prend également de l'ampleur. Comment pouvons-nous les punir et les décourager de continuer dans cette voie ?`,
        choices: {
            "Construisez des prisons et enfermez-les y.": {
                effect() {
                    addPassive("prisons");
                    changeScore("environnement", -10);
                }
            },
            "Eduquez-les afin qu'ils retrouvent le droit chemin.": {
                effect() {
                    addPassive("reinsertion");
                    changeScore("environnement", -5);
                    changeScore("bonheur", +10);
                }
            },
            "Instaurez la peine de mort.": {
                effect() {
                    addPassive("peineMort");
                    changeScore("environnement", +5);
                    changeScore("bonheur", -10);
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
        image: "volcan_terre.png",
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
            }
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
            "Synthétisez des médicaments, plus efficaces contre les maladies.": {
                test() {
                    return state.passives.includes("herboristerie")
                },
                effect() {
                    changeScore("bonheur", +10);
                    changeScore("environnement", -15);
                }
            },
            "Favorisez les synergies entre les pathologies": {
                effect() {
                    changeScore("environnement", +10);
                    changeScore("bonheur", -10);

                }
            },
            "Cela fait partie de l'ordre naturel des choses, laissez les maladies faire le tri, seuls les forts peuvent survivre.": {
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
            "Tentez de réguler vos besoins.": {
                effect() {
                    changeScore("environnement", +5);
                    changeScore("bonheur", -10);
                }
            },
            "Lancer des recherches pour trouver une alternative.": {
                effect() {
                    changeScore("environnement", +5);
                }
            },
            "Continuez malgré tout, votre société a besoin de cette croissance.": {
                effect() {
                    changeScore("environnement", -15);
                    changeScore("bonheur", -5);

                }
            },
            "Développez de quoi assainir l'eau polluée.": {
                effect() {
                    changeScore("environnement", +5);
                }
            }
        }
    },

    304: {
        image: "champ2.png",
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
                    changeScore("environnement", -10);
                    changeScore("bonheur", +5);

                }
            },
            "Augmenter autant que possible la surface de terre cultivée par les champs.": {
                test() {
                    return state.passives.includes("sedentaire")
                },
                effect() {
                    changeScore("environnement", -15);
                    changeScore("bonheur", +5);

                }
            },
            "Concevoir des engrais pour maximiser le rendement des cultures.": {
                test() {
                    return state.passives.includes("chimie")
                },
                effect() {
                    changeScore("environnement", -20);
                    changeScore("bonheur", +10);
                }
            }
        }
    },

    305: {
        image: "labo3.png",
        description: `des puces mesurant des propriétés physiques et biologiques ont été implantées sur chaque individu. Comment s'en servir ?`,
        choices: {
            "Pratiquez l'eugénisme en fonction de la qualité du patrimoine génétique.": {
                effect() {
                    changeScore("bonheur", -10);
                    changeScore("environnement", +3);
                }
            },
            "Identifiez les génies et donnez-leur les moyens de s'exprimer.": {
                effect() {
                    changeScore("bonheur", +5);
                }
            },
            "Utilisez les résultats pour servir la médecine.": {
                effect() {
                    changeScore("environnement", -5);
                    changeScore("bonheur", +5);
                }
            }
        }
    },

    306: {
        image: "labo3.png",
        description: `des chercheurs ont imaginé un traitement permettant d'accélérer le temps de gestation. Que faire ?`,
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
            }
        }
    },
    307: {
        image: "labo3.png",
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
            "Adaptez vos infrastructures pour leur rendre la vie plus simple.": {
                effect() {
                    changeScore("bonheur", +5);
                    changeScore("environnement", -5);
                }
            }
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
            }
        }
    },




    400: {
        image: "TODO.png",
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
            "Les femmes fertiles sont identifiées et assument le rôle de mères porteuses.": {
                effect() {
                    changeScore("bonheur", -20);
                    changeScore("environnement", -5);
                }
            },
            "Encourager la reproduction par des biais culturels.": {
                effect() {
                    changeScore("bonheur", -5);
                    changeScore("environnement", -5);
                }
            },
            "Utiliser la manipulation génétique pour faciliter la procréation.": {
                test() {
                    return state.passives.includes("bioingenieurie")
                },
                effect() {
                    changeScore("bonheur", +10);
                    changeScore("environnement", -10);
                }
            },
            "Maximiser l'espérance de vie des personnes déjà présentes par la médecine.": {
                test() {
                    return state.passives.includes("medecine")
                },
                effect() {
                    changeScore("bonheur", +5);
                    changeScore("environnement", -5);
                }
            },
            "Maximiser l'espérance de vie des personnes déjà présentes par la mécanisation des corps.": {
                test() {
                    return (state.passives.includes("mecanique") && state.passives.includes("protheses"))
                },
                effect() {
                    changeScore("bonheur", +15);
                    changeScore("environnement", -15);
                }
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
            "Légalisez l'euthanasie": {
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
                }
            }
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
            }
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
                }
            },
            "Chassez-les": {
                effect() {
                    changeScore("bonheur", -10);
                    changeScore("environnement", -5);
                }
            },
            "Qu'ils reconstruisent, mais loin de la tribu": {
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
                    changeScore("bonheur", -20);
                    changeScore("environnement", -5);
                }
            }
        }
    },

    406: {
        image: "politique2.png",
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
                    changeScore("environnement", -10);
                }
            },
            "Lancez un programme de conquête spatiale": {
                test() {
                    return state.passives.includes("voyageastral")
                },
                effect() {
                    changeScore("bonheur", +5);
                    changeScore("environnement", -10);
                }
            },
            "Que les femmes restent à la maison et s'occupent des tâches domestiques": {
                test() {
                    return state.passives.includes("dominationMasculine")
                },
                effect() {
                    changeScore("bonheur", -10);
                }
            },
            "Prenez les postes des hommes. Ils s'occuperont du ménage et des enfants": {
                test() {
                    return state.passives.includes("dominationFéminine")
                },
                effect() {
                    changeScore("bonheur", -10);
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
            }
        }
    },


    407: {
        image: "champs3.png",
        description: () => `A force de privilégier les plants les plus vigoureux, nous avons aussi tué la diversité des plantes, et nous en payons aujourd'hui le prix... Une épidémie ravage les champs ${state.passives.includes("carnivore") ? "destinés à l'alimentation du bétail " : ""} et va nous mener à la famine !`,
        choices: {
            "Variez votre alimentation. Vous avez essayé les insectes ?": {
                test() {
                    return state.passives.includes("omnivore")
                },
                effect() {
                    changeScore("bonheur", -5);
                    changeScore("environnement", -10);
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
                    changeScore("environnement", -20);
                }
            },
            "Créez de nouveaux plants en laboratoire": {
                test() {
                    return state.passives.includes("bioingenieurie")
                },
                effect() {
                    changeScore("environnement", -10);
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
            }
        }
    },
    408: {
        image: "terrestrenuit2.png",
        description: `De fines particules en suspension empêchent la plupart des espèces de respirer sans s'intoxiquer.`,
        choices: {
            "Produisez des masques à gaz autant que possible.": {
                effect() {
                    changeScore("bonheur", -5);
                    changeScore("environnement", -10);
                }
            },
            "Déclarez une quarantaine génèrale au risque d'avoir des rébellions (bonheur--)": {
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
                    changeScore("environnement", -20);
                }
            },
            "Créez de nouveaux plants en laboratoire": {
                test() {
                    return state.passives.includes("bioingenieurie")
                },
                effect() {
                    changeScore("environnement", -10);
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
            }
        }
    }
}
