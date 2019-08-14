import { changeJauge, endStory, startStory, gameOver, playSound } from "./effects.js";
import { incidence } from "./const.js";

export const cards = {
    1: {
        image: "carte_pluie_meteorites.png",
        description: "L'incommensurable envergure de l’Univers s’offre à nous, enivrante et vertigineuse. La Vie - peuplant jadis galaxies, étoiles et planètes - décline secrètement ...",
        yesLabel: "...",
        noLabel: "...",
        yesEffects: [],
        noEffects: [],
        inEffects: [playSound('vox_gardien_01', 'voice'), playSound('mus_gardien_01', 'music')]
    },
    2: {
        image: "carte_pluie_meteorites.png",
        description: "Nous sommes les Gardiens du Temps, édificateurs du Cosmos, martyrs d'une malédiction nous rendant esclaves de la Vie.",
        yesLabel: "...",
        noLabel: "...",
        yesEffects: [],
        noEffects: [],
        inEffects: [playSound('vox_gardien_02', 'voice'), playSound('mus_gardien_01', 'music')]
    },
    3: {
        image: "carte_pluie_meteorites.png",
        description: "Sans Vie, plus de témoins du Temps. Le Temps n'existe qu'au travers de ses observateurs, les êtres vivants.",
        yesLabel: "...",
        noLabel: "...",
        yesEffects: [],
        noEffects: [],
        inEffects: [playSound('vox_gardien_03', 'voice'), playSound('mus_gardien_02', 'music')]
    },
    4: {
        image: "carte_pluie_meteorites.png",
        description: "Comme chaque témoin avant toi, tu as vécu une partie infinitésimale du champs des possibles, et maintenant la tâche t'incombe d'endosser à ton tour le lourd fardeau des Gardiens.",
        yesLabel: "...",
        noLabel: "...",
        yesEffects: [],
        noEffects: [],
        inEffects: [playSound('vox_gardien_04', 'voice')]
    },
    5: {
        image: "carte_pluie_meteorites.png",
        description: "Nous te confions ce berceau, au printemps de son Histoire. Il sera ta mémoire, l'empreinte que tu laisseras en ce monde.",
        yesLabel: "...",
        noLabel: "...",
        yesEffects: [],
        noEffects: [],
        inEffects: [playSound('vox_gardien_05', 'voice'), playSound('mus_gardien_03', 'music')]
    },
    6: {
        image: "carte_pluie_meteorites.png",
        description: "Quelques poussières qui dérivaient dans l'espace se sont laissées attirer par l'orbite de notre planète.",
        yesLabel: "Ah !",
        noLabel: "Ah !",
        yesEffects: [],
        noEffects: [],
        inEffects: []
    },
    7: {
        image: "carte_pluie_meteorites.png",
        description: "Les poussières qui gravitent autour de notre planète semblent s'aglutiner petit à petit et forment quelques roches. On s'en débarrasse ?",
        yesLabel: "Oui",
        noLabel: "Non, c'est joli.",
        yesEffects: [endStory('lune')],
        noEffects: [],
        inEffects: []
    },
    8: {
        image: "carte_pluie_meteorites.png",
        description: "Le temps passant, les quelques roches qui nous entourent ont grandi et une ceinture se dessine petit à petit autour de notre astre. Le ciel s'obscurci légèrement.",
        yesLabel: "Très bien.",
        noLabel: "Soufflons tout ça.",
        yesEffects: [changeJauge('Terrestre',+incidence.s),changeJauge('Céleste',-incidence.s)],
        noEffects: [endStory('lune')],
        inEffects: []
    },
    9: {
        image: "carte_pluie_meteorites.png",
        description: "Un météore imposant s'approche calmement de notre orbite et représente un risque en cas de collision. On l'explose ?",
        yesLabel: "Oui",
        noLabel: "Non",
        yesEffects: [startStory('astre_explose')],
        noEffects: [startStory('astre_safe')],
        inEffects: []
    },
    10: {
        image: "carte_volcan_terre.png",
        description: "Le magma sous la croûte terrestre agite beaucoup les plaques tectoniques. On calme un peu le jeu ?",
        yesLabel: "Oui",
        noLabel: "Non",
        yesEffects: [changeJauge('Terrestre', +incidence.m)],
        noEffects: [startStory('end_tectonique')],
        inEffects: []
    },
    11: {
        image: "carte_volcan_terre.png",
        description: "Quelques volcans ont réchauffé les mers et l'atmosphère terrestre, et rendu la terre fertile pour les végétaux.",
        yesLabel: "D'accord",
        noLabel: "D'accord",
        yesEffects: [changeJauge('Marine', +incidence.s),changeJauge('Céleste',+incidence.m)],
        noEffects: [changeJauge('Marine', +incidence.s),changeJauge('Céleste',+incidence.m)],
        inEffects: []
    },
    12: {
        image: "carte_volcan_terre.png",
        description: "Les terres asséchées sont devenues arides et finissent par se craqueler. Mouillons-les d'une pluie rafraichissante !",
        yesLabel: "Oui",
        noLabel: "Non",
        yesEffects: [changeJauge('Terrestre', +incidence.m)],
        noEffects: [changeJauge('Céleste', -incidence.l)],
        inEffects: []
    },
    13: {
        image: "carte_pluie_meteorites.png",
        description: "Les océans semblent si chauds qu'il s'en dégage une brume épaisse. Y plonger quelques icerbergs ?",
        yesLabel: "Oui",
        noLabel: "Non",
        yesEffects: [changeJauge('Marine', -incidence.m)],
        noEffects: [],
        inEffects: []
    },
    14: {
        image: "carte_pluie_meteorites.png",
        description: "La surface terrestre émergée s'apparente à un vaste marécage. On tente de réchauffer ça à coup de soleil ?",
        yesLabel: "Oui",
        noLabel: "Non",
        yesEffects: [changeJauge('Céleste', -incidence.s), changeJauge('Terrestre',-incidence.m)],
        noEffects: [changeJauge('Terrestre', +incidence.m)],
        inEffects: []
    },
    15: {
        image: "carte_pluie_meteorites.png",
        description: "Notre planète semble bouillonner de lave en fusion. Est-ce qu'on la soulage en laissant émerger quelques volcans ?",
        yesLabel: "Oui",
        noLabel: "Non",
        yesEffects: [changeJauge('Terrestre', -incidence.l)],
        noEffects: [changeJauge('Marine', +incidence.m),changeJauge('Céleste',+incidence.m)],
        inEffects: []
    },
    16: {
        image: "carte_pluie_meteorites.png",
        description: "Une pluie de météorites est sur le point de s'abattre sur le monde.",
        yesLabel: "Les faire tomber dans l'océan.",
        noLabel: "Les faire tomber sur un continent.",
        yesEffects: [startStory('end_meteorite_marine')],
        noEffects: [startStory('end_meteorite_terrestre')],
        inEffects: []
    },
    17: {
        image: "carte_pluie_meteorites.png",
        description: "Une couche de glace s'est formée à la surface des océans et la plonge dans l'obscurité.",
        yesLabel: "Soleil ...?",
        noLabel: "Tant mieux.",
        yesEffects: [changeJauge('Marine', +incidence.m),changeJauge('Terrestre', -incidence.m)],
        noEffects: [changeJauge('Marine', -incidence.l)],
        inEffects: []
    },
    18: {
        image: "carte_pluie_meteorites.png",
        description: "L'atmosphère est rendue si épaisse qu'elle s'est opacifiée. La réchauffer pourrait bien précipiter les nuages.",
        yesLabel: "C'est parti !",
        noLabel: "Surtout pas !",
        yesEffects: [changeJauge('Céleste', +incidence.m)],
        noEffects: [changeJauge('Terrestre', +incidence.s)],
        inEffects: []
    },
    19: {
        image: "carte_pluie_meteorites.png",
        description: "Par endroits, les rayons du soleil sont intenses et deviennent nocifs. Peut-être qu'un peu d'atmosphère ferait bouclier ?",
        yesLabel: "Oui",
        noLabel: "Non",
        yesEffects: [changeJauge('Céleste', +incidence.s),changeJauge('Terrestre', +incidence.l)],
        noEffects: [changeJauge('Terrestre', -incidence.l), changeJauge('Céleste', -incidence.s)],
        inEffects: []
    },
    20: {
        image: "carte_pluie_meteorites.png",
        description: "De la glace persiste à la surface de nos océans. On pourrait peut-être utiliser des roches salées pour la faire fondre ?",
        yesLabel: "Oui",
        noLabel: "Non",
        yesEffects: [changeJauge('Marine',+incidence.m),],
        noEffects: [changeJauge('Marine', -incidence.m)],
        inEffects: []
    },
    21: {
        image: "carte_pluie_meteorites.png",
        description: "Une épaisse couche de neige éternelle recouvre certains de nos paysages, pas un perce-neige à l’horizon. Faut-il y souffler un vent chaud ?",
        yesLabel: "Oui",
        noLabel: "Non",
        yesEffects: [changeJauge('Terrestre', -incidence.l), changeJauge('Céleste', +incidence.m),changeJauge('Marine', +incidence.s)],
        noEffects: [changeJauge('Terrestre', +incidence.m)],
        inEffects: []
    },
    22: {
        image: "carte_pluie_meteorites.png",
        description: "De nombreuses algues ont envahi nos fonds marins et rendent l’eau trouble et obscure.",
        yesLabel: "Soleil !",
        noLabel: "Chouette.",
        yesEffects: [changeJauge('Marine', +incidence.s), changeJauge('Céleste', +incidence.m),changeJauge('Terrestre',-incidence.m)],
        noEffects: [],
        inEffects: []
    },
    23: {
        image: "carte_pluie_meteorites.png",
        description: "Un astre sorti de nulle part semble s’être pris d’affection pour notre planète et s’y est satellisé.",
        yesLabel: "On le détruit !",
        noLabel: "Pourquoi pas ...",
        yesEffects: [],
        noEffects: [changeJauge('Céleste', -incidence.l)],
        inEffects: []
    },
    24: {
        image: "carte_pluie_meteorites.png",
        description: "L'astre qui a élu domicile autour de notre planète s'est stabilisé sur une orbite régulière.",
        yesLabel: "Chouette !",
        noLabel: "Chouette !",
        yesEffects: [],
        noEffects: [],
        inEffects: []
    },
    25: {
        image: "carte_pluie_meteorites.png",
        description: "Il y a en chaque être de cette planète un peu de toi, ils sont ton paradis, ta gratitude inconditionnelle.",
        yesLabel: "...",
        noLabel: "...",
        yesEffects: [],
        noEffects: [],
        inEffects: []
    },
    26: {
        image: "carte_pluie_meteorites.png",
        description: "Nous laisserons libre cours à ton imagination, mais garde bien à l'esprit que l'équilibre sera la clef du fleurissement de ton jardin.",
        yesLabel: "...",
        noLabel: "...",
        yesEffects: [],
        noEffects: [],
        inEffects: []
    },
    27: {
        image: "carte_pluie_meteorites.png",
        description: "Ce vaisseau minéral abritait des formes de vie à qui profite ce nouvel environnement. ",
        yesLabel: "Surprenant !",
        noLabel: "Surprenant !",
        yesEffects: [changeJauge('Marine', +incidence.s)],
        noEffects: [changeJauge('Marine', +incidence.s)],
        inEffects: []
    },
    28: {
        image: "carte_pluie_meteorites.png",
        description: "Ce vaisseau minéral abritait des formes de vie à qui profite ce nouvel environnement. ",
        yesLabel: "Surprenant !",
        noLabel: "Surprenant !",
        yesEffects: [changeJauge('Terrestre', +incidence.m)],
        noEffects: [changeJauge('Terrestre', +incidence.m)],
        inEffects: []
    },
    29: {
        image: "carte_pluie_meteorites.png",
        description: "Le météore explose à une bonne distance de notre planète mais une grande quantité de débris se précipite vers elle. ",
        yesLabel: "Soufflons dessus.",
        noLabel: "Mince ...",
        yesEffects: [startStory('astre_explose_souffle')],
        noEffects: [startStory('pluie_eclats')],
        inEffects: []
    },
    30: {
        image: "carte_pluie_meteorites.png",
        description: "Quelques éclats du météore explosé sont venus peupler la masse grandissante de rochers autour de notre planète, et un gros rocher semble attirer ses voisins vers lui.",
        yesLabel: "Chassons-le",
        noLabel: "Ok !",
        yesEffects: [startStory('astre_explose_souffle_ceinture')],
        noEffects: [startStory('astre_explose_souffle_lune')],
        inEffects: []
    },
    31: {
        image: "carte_pluie_meteorites.png",
        description: "Le météore file droit vers notre planète et le percute violemment, la disloquant en quelques secondes ... Ce qu'il en reste ne risque plus d'abriter la vie.",
        yesLabel: "Mince ...",
        noLabel: "Mince ...",
        yesEffects: [gameOver()],
        noEffects: [gameOver()],
        inEffects: []
    },
    32: {
        image: "carte_pluie_meteorites.png",
        description: "Un joli disque de poussières et de rochers a fini par se stabiliser autour de notre planète et filtre un peu la lumière de l'étoile. ",
        yesLabel: "Soufflons dessus.",
        noLabel: "Superbe !",
        yesEffects: [changeJauge('Terrestre',-incidence.s),changeJauge('Céleste',+incidence.s)],
        noEffects: [changeJauge('Terrestre',+incidence.l),changeJauge('Céleste',-incidence.s)],
        inEffects: []
    },
    33: {
        image: "carte_pluie_meteorites.png",
        description: "Le rocher de notre ceinture de poussières s'est transformé en une lune toute rondelette, est-ce risqué de la laisser grossir ?",
        yesLabel: "Oui",
        noLabel: "Non",
        yesEffects: [startStory('end_lune_gardee')],
        noEffects: [startStory('end_lune_enorme')],
        inEffects: []
    },
    34: {
        image: "carte_pluie_meteorites.png",
        description: "La Lune massive continuant à s'alimenter de notre ceinture de débris a fini par faire dévier notre planète de son orbite. Ce qui est devenu un diptyque gravitationnel se dirige maintenant droit vers notre étoile ...",
        yesLabel: "Mince ...",
        noLabel: "Mince ...",
        yesEffects: [gameOver()],
        noEffects: [gameOver()],
        inEffects: []
    },
    35: {
        image: "carte_pluie_meteorites.png",
        description: "Les débris restants chassés, seule notre nouvelle amie sattelisée demeure autour de notre planète et ne risque plus de faire autre chose que de l'ombre.",
        yesLabel: "Chouette !",
        noLabel: "Chouette !",
        yesEffects: [changeJauge('Terrestre',+incidence.l),changeJauge('Céleste',-incidence.m)],
        noEffects: [changeJauge('Terrestre',+incidence.l),changeJauge('Céleste',-incidence.m)],
        inEffects: []
    },
    36: {
        image: "carte_pluie_meteorites.png",
        description: "Les éclats du météore s'effondrent sur notre planète en creusant de nombreux cratères à la surface du sol, formant au passage des cuvettes océaniques.",
        yesLabel: "Aïe !",
        noLabel: "Aïe !",
        yesEffects: [changeJauge('Marine',+incidence.s),changeJauge('Céleste',-incidence.l),changeJauge('Terrestre',-incidence.l)],
        noEffects: [changeJauge('Marine',+incidence.s),changeJauge('Céleste',-incidence.l),changeJauge('Terrestre',-incidence.l)],
        inEffects: []
    },
    37: {
        image: "carte_pluie_meteorites.png",
        description: "Héhé t'es mort Céleste +",
        yesLabel: "Zut !",
        noLabel: "Zut !",
        yesEffects: [gameOver()],
        noEffects: [gameOver()],
        inEffects: []
    },
    38: {
        image: "carte_pluie_meteorites.png",
        description: "Héhé t'es mort Marine +",
        yesLabel: "Zut !",
        noLabel: "Zut !",
        yesEffects: [gameOver()],
        noEffects: [gameOver()],
        inEffects: []
    },
    39: {
        image: "carte_pluie_meteorites.png",
        description: "Héhé t'es mort Terreste +",
        yesLabel: "Zut !",
        noLabel: "Zut !",
        yesEffects: [gameOver()],
        noEffects: [gameOver()],
        inEffects: []
    },
    40: {
        image: "carte_pluie_meteorites.png",
        description: "Héhé t'es mort Céleste -",
        yesLabel: "Zut !",
        noLabel: "Zut !",
        yesEffects: [gameOver()],
        noEffects: [gameOver()],
        inEffects: []
    },
    41: {
        image: "carte_pluie_meteorites.png",
        description: "Héhé t'es mort Marine -",
        yesLabel: "Zut !",
        noLabel: "Zut !",
        yesEffects: [gameOver()],
        noEffects: [gameOver()],
        inEffects: []
    },
    42: {
        image: "carte_pluie_meteorites.png",
        description: "Héhé t'es mort Terreste -",
        yesLabel: "Zut !",
        noLabel: "Zut !",
        yesEffects: [gameOver()],
        noEffects: [gameOver()],
        inEffects: []
    },
    43: {
        image: "carte_plantes_ciel.png",
        description: "L'abondance de végétaux à la surface des sols laisse présager une compétition inter-espèces pour les ressources en minéraux de la terre. Il est facile d'avorter ce phénomène par la foudre.",
        yesLabel: "Oui",
        noLabel: "Non",
        yesEffects: [startStory('vegetaux_brules'), changeJauge('Celeste',-incidence.m)],
        noEffects: [startStory('vegetaux_compet'), changeJauge('Celeste',+incidence.s)],
        inEffects: []
    },
    52: {
        image: "carte_algues.png",
        description: "Des profondeurs marines ont émergé une forme de vie qui se distingue par quelques signes d'intelligence primaire. Concentrons-nous maintenant sur cette civilisation à l'aube de sa grandeur.",
        yesLabel: "Oui",
        noLabel: "Oui",
        yesEffects: [],
        noEffects: [],
        inEffects: []
    },
    53: {
        image: "carte_algue_saine.png",
        description: "Le groupe grandit et les ressources s'amenuisent, le groupe doit se déplacer.",
        yesLabel: "Au sud",
        noLabel: "Au nord",
        yesEffects: [startStory('arc_marine_deplacement_sud_narration')],
        noEffects: [startStory('arc_marine_deplacement_nord_narration')],
        inEffects: []
    },
    54: {
        image: "carte_algue_poison.png",
        description: "Ce long voyage vers le sud fût éreintant. La population est fatiguée.",
        yesLabel: "Fichtre !",
        noLabel: "Fichtre !",
        yesEffects: [changeJauge('Démographie', -incidence.m),startStory('arc_marine_deplacement_sud')],
        noEffects: [changeJauge('Démographie', -incidence.m),startStory('arc_marine_deplacement_sud')],
        inEffects: []
    },
    55: {
        image: "carte_algues.png",
        description: "Ce long voyage vers le nord fût éreintant. La population est fatiguée.",
        yesLabel: "Diantre !",
        noLabel: "Diantre !",
        yesEffects: [changeJauge('Démographie', -incidence.m),startStory('arc_marine_deplacement_nord')],
        noEffects: [changeJauge('Démographie', -incidence.m),startStory('arc_marine_deplacement_nord')],
        inEffects: []
    },
    56: {
        image: "carte_algue_saine.png",
        description: "Les ressources abondent ici ! Cependant vous rencontrez une autre espèce pacifique qui en profite...",
        yesLabel: "Les anéantir !",
        noLabel: "Les asservir !",
        yesEffects: [changeJauge('Bonheur', -incidence.l),changeJauge('Environnement', +incidence.l),startStory('arc_marine_deplacement_attaque')],
        noEffects: [changeJauge('Bonheur', +incidence.s),changeJauge('Environnement', +incidence.s),startStory('arc_marine_deplacement_asservir')],
        inEffects: []
    },
    57: {
        image: "carte_algue_poison.png",
        description: "Les ressources sont peu abondantes, cependant aucun rival en vue. Serait-il plus intéressant de chercher d'autres endroits plus riches ?",
        yesLabel: "S'installer",
        noLabel: "Aller au sud",
        yesEffects: [changeJauge('Environnement', +incidence.s),startStory('arc_marine_deplacement_sedentarisation')],
        noEffects: [startStory('arc_marine_deplacement_sud_narration')],
        inEffects: []
    },
    58: {
        image: "carte_algues.png",
        description: "L'espèce concurrente est décimé. Cela fait quelques temps que vous utilisez les ressources locales. Vous pouvez rester pour développer vos activités sédentaires ou partir pour reprendre une vie nomade.",
        yesLabel: "Sédentarisation",
        noLabel: "Aller ailleurs",
        yesEffects: [changeJauge('Environnement', -incidence.s),startStory('arc_marine_deplacement_sedentarisation')],
        noEffects: [changeJauge('Environnement', +incidence.m),changeJauge('Bonheur',+incidence.m),startStory('arc_marine_deplacement_intellectuel')],
        inEffects: []
    },
    59: {
        image: "carte_algue_saine.png",
        description: "Le groupe de poulpe utilise les ressources locales en cohabitation avec l'espèce déjà présente. Repartir à l'aventure en quête de nouvelles richesses ?",
        yesLabel: "Sédentarisation",
        noLabel: "Aller ailleurs",
        yesEffects: [changeJauge('Environnement', -incidence.s),startStory('arc_marine_deplacement_sedentarisation')],
        noEffects: [changeJauge('Environnement', +incidence.m),changeJauge('Bonheur', +incidence.m),startStory('arc_marine_deplacement_intellectuel')],
        inEffects: []
    },
    60: {
        image: "carte_algue_poison.png",
        description: "Le mode de vie sédentaire permet juste la survie du groupe de poulpe localement.",
        yesLabel: "Hmmm...",
        noLabel: "Hmmm...",
        yesEffects: [],
        noEffects: [],
        inEffects: []
    },
    61: {
        image: "carte_algues.png",
        description: "Tous ces déplacements apporte énormément de ressources à l'espèce ! On peut désormais prendre le temps de former des individus. Quelle spécialité choisir ?",
        yesLabel: "Intellectuel",
        noLabel: "Guerrier",
        yesEffects: [changeJauge('Environnement', +incidence.m),changeJauge('Démographie', +incidence.m),changeJauge('Bonheur', +incidence.m),startStory('arc_marine_deplacement_expert_nomade')],
        noEffects: [changeJauge('Environnement', +incidence.s),changeJauge('Démographie', +incidence.s),changeJauge('Bonheur', +incidence.s),startStory('arc_marine_deplacement_guerrier')],
        inEffects: []
    },
    62: {
        image: "carte_algue_saine.png",
        description: "Vous avez élaboré une cartographie avancée, bravo ! Vous avez le stade de nomade expert ! 3 expertises sont nécessaires pour atteindre l'ère.",
        yesLabel: "Super !",
        noLabel: "Super !",
        yesEffects: [],
        noEffects: [],
        inEffects: []
    },
    63: {
        image: "carte_algue_poison.png",
        description: "Vos guerriers représetent une menace pour les groupes d'espèces voisines qui se liguent contre vous et vous lance un ultimatum.",
        yesLabel: "Combattre",
        noLabel: "Fuir ailleurs",
        yesEffects: [changeJauge('Bonheur', -incidence.m),changeJauge('Environnement', +incidence.s),startStory('arc_marine_deplacement_attaque')],
        noEffects: [changeJauge('Démographie', -incidence.s),startStory('arc_marine_deplacement_nord')],
        inEffects: []
    },
    79: {
        image: "carte_algues.png",
        description: "Cherchant des réponses au sens de leur vie, des individus commencent à vouer un culte à ce qui s'apparente à vous, Gardien du temps.",
        yesLabel: "Leur envoyer un signe",
        noLabel: "Ne rien faire",
        yesEffects: [changeJauge('Bonheur', +incidence.m),startStory('arc_religion_obscurantisme')],
        noEffects: [startStory('arc_religion_base_narratif')],
        inEffects: []
    },
    80: {
        image: "carte_algue_saine.png",
        description: "La vie suit son cours, aucune idée religieuse ne s'immisce dans les esprits.",
        yesLabel: "Bien",
        noLabel: "Bien",
        yesEffects: [startStory('arc_religion_polythéisme')],
        noEffects: [startStory('arc_religion_polythéisme')],
        inEffects: []
    },
    81: {
        image: "carte_algue_poison.png",
        description: "En quête d'explication du monde qui les entoure, de nombreux membres de la société imaginent des Dieux associés à la mer, les coraux, les algues ...",
        yesLabel: "Punir ces polythéistes",
        noLabel: "Les laisser faire",
        yesEffects: [changeJauge('Bonheur', -incidence.m),startStory('arc_religion_conversion')],
        noEffects: [changeJauge('Progrès', +incidence.m)],
        inEffects: []
    },
    82: {
        image: "carte_algues.png",
        description: "Une espèce étrangère qui a fondé des croyances divergentes tente de les imposer à notre peuple. Un conflit risque d'éclater.",
        yesLabel: "Envoyer un signe",
        noLabel: "Ne rien faire",
        yesEffects: [changeJauge('Bonheur', +incidence.m),startStory('arc_religion_guerre_avortee')],
        noEffects: [changeJauge('Progrès', +incidence.m),changeJauge('Bonheur', +incidence.m),startStory('arc_religion_envahisseurs_guerre')],
        inEffects: []
    },
    83: {
        image: "carte_algue_saine.png",
        description: "Une guerre éclate. Notre espèce ressort victorieuse, les différents cultes sont pratiqués en harmonie.",
        yesLabel: "Bien",
        noLabel: "Bien",
        yesEffects: [startStory('arc_religion_laïcité')],
        noEffects: [startStory('arc_religion_laïcité')],
        inEffects: []
    },
    84: {
        image: "carte_algue_poison.png",
        description: "Une partie de la population restée non-croyante cherche toujours des réponses à ses questions existentielles.",
        yesLabel: "Leur envoyer un signe",
        noLabel: "Ne rien faire",
        yesEffects: [changeJauge('Bonheur', +incidence.m),startStory('arc_religion_obscurantisme')],
        noEffects: [startStory('arc_religion_liberté_de_culte')],
        inEffects: []
    },
    85: {
        image: "carte_algues.png",
        description: "Les polythéistes se sont convertis à la religion dominante, mais tentent désormais d'évangéliser les non-croyants sous la crainte d'une punition divine.",
        yesLabel: "Les empêcher",
        noLabel: "Ne rien faire",
        yesEffects: [startStory('arc_religion_intégration')],
        noEffects: [startStory('arc_religion_obscurantisme')],
        inEffects: []
    },
    86: {
        image: "carte_algue_saine.png",
        description: "Un groupe d'invidus pacifistes mène une croyance parallèle.",
        yesLabel: "Les convertir",
        noLabel: "Les accueillir",
        yesEffects: [startStory('arc_religion_obscurantisme')],
        noEffects: [startStory('arc_religion_envahisseurs')],
        inEffects: []
    },
    87: {
        image: "carte_algue_poison.png",
        description: "L'apparition du signe a focalisé les croyants et mis fin à la guerre.",
        yesLabel: "Bien",
        noLabel: "Bien",
        yesEffects: [startStory('arc_religion_intégration')],
        noEffects: [startStory('arc_religion_intégration')],
        inEffects: []
    },
    88: {
        image: "carte_algues.png",
        description: "Une religion unique s'est imposée à toute la société, un individu prétend avoir la parole de Dieu et se propose de l'incarner.",
        yesLabel: "Accepter le messie",
        noLabel: "Le rejeter.",
        yesEffects: [changeJauge('Bonheur', +incidence.m),startStory('arc_religion_obscurantisme_pouvoir')],
        noEffects: [changeJauge('Bonheur', -incidence.m),startStory('arc_religion_polythéisme')],
        inEffects: []
    },
    89: {
        image: "carte_algue_saine.png",
        description: "Le messie s'impose de plus en plus comme une force de décision politique. ",
        yesLabel: "Soulever le peuple",
        noLabel: "Ne rien faire",
        yesEffects: [changeJauge('Bonheur', -incidence.s),changeJauge('Progrès', -incidence.s),startStory('arc_religion_polythéisme')],
        noEffects: [startStory('arc_religion_fin_obscurantisme')],
        inEffects: []
    },
    90: {
        image: "carte_algue_poison.png",
        description: "La pratique d'une religion unique dévie en extrémisme, des massacres ont lieu régulièrement au nom de la religion. ",
        yesLabel: "Ah ...",
        noLabel: "Ah ...",
        yesEffects: [changeJauge('Bonheur', -incidence.l),changeJauge('Progrès', -incidence.l)],
        noEffects: [changeJauge('Bonheur', -incidence.l),changeJauge('Progrès', -incidence.l)],
        inEffects: []
    },
    91: {
        image: "carte_algue_poison.png",
        description: "Le peuple est désormais laïque et chaque individu souhaitant librement pratiquer un culte peut s'y adonner sans problème !\nVous êtes désormais un expert en religions marine !",
        yesLabel: " Super !",
        noLabel: "Super !",
        yesEffects: [changeJauge('Bonheur', +incidence.l),changeJauge('Démographie', +incidence.s)],
        noEffects: [changeJauge('Bonheur', +incidence.l),changeJauge('Démographie', +incidence.s)],
        inEffects: []
    },
    92: {
        image: "carte_algues.png",
        description: "Une mouvance religieuse considère l'exploration comme la fuite de la terre Sainte, berceau de notre civilisation. ",
        yesLabel: "L'accepter",
        noLabel: "Refuser ce précepte",
        yesEffects: [startStory('religion_nomadisme_accepte')],
        noEffects: [],
        inEffects: []
    },
    93: {
        image: "carte_algue_saine.png",
        description: "Certains individus craignent désormais de partir en exploration.",
        yesLabel: "Ah.",
        noLabel: "Ah.",
        yesEffects: [changeJauge('Environnement', +incidence.s),changeJauge('Progrès', -incidence.s)],
        noEffects: [changeJauge('Environnement', +incidence.s),changeJauge('Progrès', -incidence.s)],
        inEffects: []
    },
    94: {
        image: "carte_algue_poison.png",
        description: "La croyance s'estompe, les choses reprennent leurs cours normale",
        yesLabel: "Parfait",
        noLabel: "Parfait",
        yesEffects: [],
        noEffects: [],
        inEffects: []
    },
    98: {
        image: "carte_algues.png",
        description: "Un précepte religieux émanant préconise désormais des relations monogames entre les individus. ",
        yesLabel: "L'accepter",
        noLabel: "Refuser ce précepte",
        yesEffects: [startStory('religion_reproduction_accepte')],
        noEffects: [],
        inEffects: []
    },
    99: {
        image: "carte_algue_saine.png",
        description: "La démographie progresse moins rapidement mais l'environnement s'en trouve préservé.",
        yesLabel: "Chouette",
        noLabel: "Chouette",
        yesEffects: [changeJauge('Environnement', +incidence.s),changeJauge('Progrès', -incidence.s)],
        noEffects: [changeJauge('Environnement', +incidence.s),changeJauge('Progrès', -incidence.s)],
        inEffects: []
    },
    103: {
        image: "carte_algue_poison.png",
        description: "La religion préconise à sa communauté la consommation de coraux, qui font partie des ressources principales de notre espèce.",
        yesLabel: "Suivre",
        noLabel: "S'opposer",
        yesEffects: [changeJauge('Environnement', -incidence.s),changeJauge('Bonheur', +incidence.s)],
        noEffects: [],
        inEffects: []
    },
    104: {
        image: "",
        description: "",
        yesLabel: "",
        noLabel: "",
        yesEffects: [],
        noEffects: [],
        inEffects: []
    },
    105: {
        image: "",
        description: "",
        yesLabel: "",
        noLabel: "",
        yesEffects: [],
        noEffects: [],
        inEffects: []
    },
    106: {
        image: "",
        description: "",
        yesLabel: "",
        noLabel: "",
        yesEffects: [],
        noEffects: [],
        inEffects: []
    },
    107: {
        image: "carte_algues.png",
        description: "Une maladie touchant principalement les plus jeunes se déclare et menace la population.\nComment assurer leur survie ?",
        yesLabel: "Donner plus d’attention",
        noLabel: "Faire plus d’enfants",
        yesEffects: [startStory('arc_repro_attention'),changeJauge('Bonheur', +incidence.m),changeJauge('Progrès', +incidence.s)],
        noEffects: [startStory('arc_repro_plus'),changeJauge('Démographie', +incidence.m),changeJauge('Environnement', -incidence.s)],
        inEffects: []
    },
    108: {
        image: "carte_algue_saine.png",
        description: "La partie de la population dédiée au soin et à l’éducation des jeunes tend à grandir, et la démographie se stabilise.",
        yesLabel: "Cela me satisfait.",
        noLabel: "Donner encore plus d’attention",
        yesEffects: [startStory('arc_repro_bagarre'),changeJauge('Bonheur', -incidence.m)],
        noEffects: [startStory('arc_repro_declin'),changeJauge('Démographie', -incidence.m),changeJauge('Bonheur', -incidence.s)],
        inEffects: []
    },
    109: {
        image: "carte_algue_saine.png",
        description: "La mortalité augmente moins vite que la natalité, la démographie accroît.",
        yesLabel: "Stabiliser la taille des familles",
        noLabel: "Continuer sur cette voie",
        yesEffects: [startStory('arc_repro_bagarre'),changeJauge('Bonheur', -incidence.s)],
        noEffects: [startStory('arc_repro_extension'),changeJauge('Démographie', +incidence.m),changeJauge('Environnement', -incidence.m)],
        inEffects: []
    },
    110: {
        image: "carte_algue_saine.png",
        description: "Au sein de chaque famille, les membres sont plus proches. Les familles s’organisent en castes rivales et cela génère des tensions.",
        yesLabel: "Les plus forts survivront",
        noLabel: "Encourager le métissage",
        yesEffects: [startStory('arc_repro_bagarre_2'),changeJauge('Démographie', -incidence.l),changeJauge('Bonheur', -incidence.m)],
        noEffects: [startStory('arc_repro_stabilisation'),changeJauge('Démographie', +incidence.s),changeJauge('Bonheur', +incidence.s)],
        inEffects: []
    },
    111: {
        image: "carte_algue_saine.png",
        description: "Ce surcroît d’efforts alloués au soin des plus jeunes se réalise au détriment des activités de collecte de nourriture et de défense.",
        yesLabel: "Persévérer",
        noLabel: "Rééquilibrer l’organisation",
        yesEffects: [startStory('arc_repro_bagarre'),changeJauge('Bonheur', -incidence.m)],
        noEffects: [startStory('arc_repro_stabilisation'),changeJauge('Progrès', +incidence.m)],
        inEffects: []
    },
    112: {
        image: "carte_algue_saine.png",
        description: "Les guerres entre castes font rage. Cela rend la population vulnérable aux attaques d’autres espèces belliqueuses.",
        yesLabel: "Ha zut",
        noLabel: "Ha zut",
        yesEffects: [startStory('arc_repro_game_over')],
        noEffects: [startStory('arc_repro_game_over')],
        inEffects: []
    },
    113: {
        image: "carte_algue_saine.png",
        description: "La population est stabilisée. Les savoirs liés au soin ont été documentés. A qui les confier ?",
        yesLabel: "Les religieux",
        noLabel: "Les scientifiques ",
        yesEffects: [startStory('arc_repro_religieux'),changeJauge('Progrès', -incidence.m),changeJauge('Environnement', +incidence.m)],
        noEffects: [startStory('arc_repro_medecine'),changeJauge('Progrès', +incidence.m)],
        inEffects: []
    },
    114: {
        image: "carte_algue_poison.png",
        description: "Une autre espèce déclare la guerre, et la remporte.",
        yesLabel: "C'est perdu",
        noLabel: "C'est perdu",
        yesEffects: [gameOver()],
        noEffects: [gameOver()],
        inEffects: []
    },
    115: {
        image: "carte_algue_poison.png",
        description: "La population se développe à un rythme bien trop soutenu pour les ressources. Les disettes sont un terreau favorables au communautarisme.",
        yesLabel: "Ouh là là",
        noLabel: "Ouh là là",
        yesEffects: [startStory('arc_repro_bagarre')],
        noEffects: [startStory('arc_repro_bagarre')],
        inEffects: []
    },
    116: {
        image: "carte_algue_saine.png",
        description: "Les guides spirituels proposent de bannir les malades",
        yesLabel: "Bannir",
        noLabel: "Consulter les scientifiques",
        yesEffects: [startStory('arc_repro_bagarre'),changeJauge('Bonheur', -incidence.m),changeJauge('Démographie', -incidence.m)],
        noEffects: [startStory('arc_repro_medecine'),changeJauge('Bonheur', -incidence.m),changeJauge('Démographie', -incidence.m)],
        inEffects: []
    },
    117: {
        image: "carte_algue_saine.png",
        description: "Le développement de la médecine a permis de trouver un remède. La croissance démographique reprend fortement.",
        yesLabel: "Continuer sur cette voie",
        noLabel: "Développer la contraception",
        yesEffects: [startStory('arc_repro_game_over_2'),changeJauge('Environnement', -incidence.m),changeJauge('Démographie', +incidence.m)],
        noEffects: [startStory('arc_repro_prospere'),changeJauge('Environnement', +incidence.s),changeJauge('Progrès', +incidence.m)],
        inEffects: []
    },
    118: {
        image: "carte_algue_saine.png",
        description: "La population se développe à rythme idéal et peut prospérer.",
        yesLabel: "Excellent",
        noLabel: "Excellent",
        yesEffects: [],
        noEffects: [],
        inEffects: []
    },
    119: {
        image: "carte_algue_saine.png",
        description: "Cette forte croissance de la population lui permet d’occuper plus de territoire et la rend moins vulnérable aux attaques des autres espèces. Cependant, la maladie sévit toujours.",
        yesLabel: "Développer la médecine ",
        noLabel: "Continuer sur cette voie",
        yesEffects: [startStory('arc_repro_medecine'),changeJauge('Progrès', +incidence.m),changeJauge('Démographie', +incidence.l)],
        noEffects: [startStory('arc_repro_maladie'),changeJauge('Progrès', -incidence.m),changeJauge('Démographie', +incidence.l),changeJauge('Environnement', -incidence.l)],
        inEffects: []
    },
    120: {
        image: "carte_algue_poison.png",
        description: "Sans attention portée à son traitement, la maladie se développe et frappe toutes les tranches d’âge. Cela rend la population vulnérable aux attaques d’autres espèces belliqueuses.",
        yesLabel: "Noooon",
        noLabel: "Noooon",
        yesEffects: [startStory('arc_repro_game_over')],
        noEffects: [startStory('arc_repro_game_over')],
        inEffects: []
    }
}