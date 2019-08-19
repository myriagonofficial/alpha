// story = scénario = ensemble de cartes sortant dans l'ordre

export const stories = {
    init_lune: {
        name: "Lune",
        cards: [6, 7, 8, 9],
        priority: 1
    },
    astre_explose: {
        name: "Lune",
        cards: [29],
        priority: 2
    },
    astre_explose_souffle: {
        name: "Lune",
        cards: [30],
        priority: 1
    },
    astre_explose_souffle_ceinture: {
        name: "Lune",
        cards: [32],
        priority: 1
    },
    astre_explose_souffle_lune: {
        name: "Lune",
        cards: [33],
        priority: 1
    },
    astre_safe: {
        name: "Lune",
        cards: [31],
        priority: 2
    },
    pluie_eclats: {
        name: "Lune",
        cards: [36],
        priority: 1
    },
    end_lune_gardee: {
        name: "Lune",
        cards: [35],
        priority: 1
    },
    end_lune_enorme: {
        name: "Lune",
        cards: [34],
        priority: 2
    },
    init_terres_arides: {
        name: "Terres Arides",
        cards: [12],
        priority: 1
    },
    init_oceans_chauds: {
        name: "Océans Chauds",
        cards: [13],
        priority: 1
    },
    init_marecages: {
        name: "Marécages",
        cards: [14],
        priority: 1
    },
    init_volcans: {
        name: "Volcans",
        cards: [15],
        priority: 1
    },
    init_meteorites: {
        name: "Météorites",
        cards: [16],
        priority: 1
    },
    init_oceans_geles: {
        name: "Océans gelés",
        cards: [17],
        priority: 1
    },
    init_atmosphere_sombre: {
        name: "Atmosphère sombre",
        cards: [18],
        priority: 1
    },
    init_rayonnements_dangereux: {
        name: "Rayonnements dangereux",
        cards: [19],
        priority: 1
    },
    init_sel_de_mer: {
        name: "Sel de mer",
        cards: [20],
        priority: 1
    },
    init_sol_glace: {
        name: "Sol glacé",
        cards: [21],
        priority: 1
    },
    init_algues: {
        name: "Algues",
        cards: [22],
        priority: 1
    },
    introduction: {
        name: "Gardiens du Temps",
        cards: [1,2,3,4,5,25,26],
        priority: 5
    },
    init_tectonique: {
        name: "Tectonique",
        cards: [10],
        priority: 1
    },
    end_tectonique: {
        name: "Tectonique",
        cards: [11],
        priority: 2
    },
    end_meteorite_marine: {
        name: "Météorites",
        cards: [27],
        priority: 2
    },
    end_meteorite_terrestre: {
        name: "Météorites",
        cards: [28],
        priority: 2
    },
    gameOverUp_Céleste: {
        name: "Game Over",
        cards: [37],
        priority: 6
    },
    gameOverUp_Marine: {
        name: "Game Over",
        cards: [38],
        priority: 6
    },
    gameOverUp_Terrestre: {
        name: "Game Over",
        cards: [39],
        priority: 6
    },
    gameOverDown_Céleste: {
        name: "Game Over",
        cards: [40],
        priority: 6
    },
    gameOverDown_Marine: {
        name: "Game Over",
        cards: [41],
        priority: 6
    },
    gameOverDown_Terrestre: {
        name: "Game Over",
        cards: [42],
        priority: 6
    },
    init_marine_progrès_debut: {
        name: "Introduction Progrès Marin",
        cards: [52],
        priority: 5
    },
    init_arc_marine_deplacement: {
        name: "Déplacement",
        cards: [53],
        priority: 1
    },
    arc_marine_deplacement_sud_narration: {
        name: "Déplacement",
        cards: [54],
        priority: 2
    },
    arc_marine_deplacement_nord_narration: {
        name: "Déplacement",
        cards: [55],
        priority: 2
    },
    arc_marine_deplacement_sud: {
        name: "Déplacement",
        cards: [56],
        priority: 1
    },
    arc_marine_deplacement_nord: {
        name: "Déplacement",
        cards: [57],
        priority: 1
    },
    arc_marine_deplacement_attaque: {
        name: "Déplacement",
        cards: [58],
        priority: 1
    },
    arc_marine_deplacement_asservir: {
        name: "Déplacement",
        cards: [59],
        priority: 1
    },
    arc_marine_deplacement_sedentarisation: {
        name: "Déplacement",
        cards: [60],
        priority: 1
    },
    arc_marine_deplacement_intellectuel: {
        name: "Déplacement",
        cards: [61],
        priority: 1
    },
    arc_marine_deplacement_expert_nomade: {
        name: "Déplacement",
        cards: [62],
        priority: 1
    },
    arc_marine_deplacement_guerrier: {
        name: "Déplacement",
        cards: [63],
        priority: 1
    },
    init_arc_religion_base: {
        name: "Religion",
        cards: [79],
        priority: 1
    },
    arc_religion_base_narratif: {
        name: "Religion",
        cards: [80],
        priority: 2
    },
    arc_religion_polythéisme: {
        name: "Religion",
        cards: [81],
        priority: 1
    },
    arc_religion_envahisseurs: {
        name: "Religion",
        cards: [82],
        priority: 1
    },
    arc_religion_envahisseurs_guerre: {
        name: "Religion",
        cards: [83],
        priority: 2
    },
    arc_religion_laïcité: {
        name: "Religion",
        cards: [84],
        priority: 1
    },
    arc_religion_conversion: {
        name: "Religion",
        cards: [85],
        priority: 1
    },
    arc_religion_intégration: {
        name: "Religion",
        cards: [86],
        priority: 1
    },
    arc_religion_guerre_avortee: {
        name: "Religion",
        cards: [87],
        priority: 2
    },
    arc_religion_obscurantisme: {
        name: "Religion",
        cards: [88],
        priority: 1
    },
    arc_religion_obscurantisme_pouvoir: {
        name: "Religion",
        cards: [89],
        priority: 1
    },
    arc_religion_fin_obscurantisme: {
        name: "Religion",
        cards: [90],
        priority: 2
    },
    arc_religion_liberté_de_culte: {
        name: "Religion",
        cards: [91],
        priority: 2
    },
    init_religion_nomadisme: {
        name: "Religion",
        cards: [92],
        priority: 1
    },
    religion_nomadisme_accepte: {
        name: "Religion",
        cards: [93],
        priority: 2
    },
    religion_nomadisme_refus: {
        name: "Religion",
        cards: [94],
        priority: 2
    },
    init_religion_reproduction: {
        name: "Religion",
        cards: [98],
        priority: 1
    },
    religion_reproduction_accepte: {
        name: "Religion",
        cards: [99],
        priority: 2
    },
    religion_alimentation: {
        name: "Religion",
        cards: [103],
        priority: 1
    },
    init_arc_repro_base: {
        name: "Reproduction",
        cards: [107],
        priority: 1
    },
    arc_repro_attention: {
        name: "Reproduction",
        cards: [108],
        priority: 1
    },
    arc_repro_plus: {
        name: "Reproduction",
        cards: [109],
        priority: 1
    },
    arc_repro_bagarre: {
        name: "Reproduction",
        cards: [110],
        priority: 1
    },
    arc_repro_declin: {
        name: "Reproduction",
        cards: [111],
        priority: 1
    },
    arc_repro_extension: {
        name: "Reproduction",
        cards: [119],
        priority: 1
    },
    arc_repro_bagarre_2: {
        name: "Reproduction",
        cards: [112],
        priority: 1
    },
    arc_repro_stabilisation: {
        name: "Reproduction",
        cards: [113],
        priority: 1
    },
    arc_repro_medecine: {
        name: "Reproduction",
        cards: [117],
        priority: 1
    },
    arc_repro_maladie: {
        name: "Reproduction",
        cards: [120],
        priority: 1
    },
    arc_repro_game_over: {
        name: "Reproduction",
        cards: [114],
        priority: 6
    },
    arc_repro_religieux: {
        name: "Reproduction",
        cards: [116],
        priority: 1
    },
    arc_repro_game_over_2: {
        name: "Reproduction",
        cards: [115],
        priority: 1
    },
    arc_repro_prospere: {
        name: "Reproduction",
        cards: [118],
        priority: 1
    },
    init_arc_poli_base: {
        name: "Politique & économie",
        cards: [124],
        priority: 1
    },
    arc_poli_leader: {
        name: "Politique & économie",
        cards: [125],
        priority: 1
    },
    arc_poli_peuple: {
        name: "Politique & économie",
        cards: [129],
        priority: 2
    },
    arc_poli_duel: {
        name: "Politique & économie",
        cards: [126],
        priority: 1
    },
    arc_poli_trucages: {
        name: "Politique & économie",
        cards: [127],
        priority: 2
    },
    arc_poli_loyal: {
        name: "Politique & économie",
        cards: [128],
        priority: 2
    },
    arc_poli_vote: {
        name: "Politique & économie",
        cards: [130],
        priority: 1
    },
    arc_poli_inegalites: {
        name: "Politique & économie",
        cards: [132],
        priority: 1
    },
    arc_poli_marche: {
        name: "Politique & économie",
        cards: [133],
        priority: 1
    },
    arc_poli_emeute: {
        name: "Politique & économie",
        cards: [134],
        priority: 1
    },
    arc_poli_cartel: {
        name: "Politique & économie",
        cards: [137],
        priority: 1
    },
    arc_poli_emeute_equilibre: {
        name: "Politique & économie",
        cards: [135],
        priority: 2
    },
    arc_poli_emeute_guerre: {
        name: "Politique & économie",
        cards: [136],
        priority: 1
    },
    arc_poli_parlement: {
        name: "Politique & économie",
        cards: [131],
        priority: 1
    }
}