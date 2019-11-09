import { Howl, Howler } from "howler"
import { state, saveSettings } from "@/state.js";
import { pickRandomIn } from "@/utils.js";

export const soundChannels = {}

export const playSound = (key, channel) => {
    if (state.mute) return;
    if (!(key in SOUNDS)) return console.error(`Sound not found: ${key}`)
    const sound = new Howl({
        src: [SOUNDS[key]],
        volume: 1
    });

    if (channel) {
        if (soundChannels[channel]) soundChannels[channel].stop() // stop previous sound in same channel
        soundChannels[channel] = sound
    }

    sound.play();
}

export const playMusic = (key, variations) => {
    if (!(key in MUSICS)) return console.error(`Music not found: ${key}`)
    stopMusic();

    const music = new Howl({
        src: [MUSICS[key]],
        volume: 1,
        mute: state.mute
    });

    music.play();
    soundChannels.music = music;

    if (variations) {
        const next = pickRandomIn(variations)
        console.log(`Next music variation: ${next}`)

        if (next !== key) {
            const musicVariation = new Howl({
                src: [MUSICS[next]],
                volume: 0,
                mute: state.mute
            });

            musicVariation.play();
            soundChannels.musicVariation = musicVariation;

            music.fade(1, 0, music.duration() * 1000)
            musicVariation.fade(0, 1, music.duration() * 1000)
        }

        music.once("end", () => playMusic(next, variations))
    } else {
        music.loop(true);
    }
}

export const playMusicRandomSequence = (variations) => {
    playMusic(pickRandomIn(variations), variations);
}

export const stopSound = channel => {
    if (soundChannels[channel]) soundChannels[channel].stop()
}

export const stopMusic = () => {
    [soundChannels.music, soundChannels.musicVariation].forEach((musicToStop) => {
        if (musicToStop) {
            musicToStop.fade(musicToStop.volume(), 0, 1000);
            musicToStop.once('fade', () => musicToStop.stop())
        }
    })
}

export const updateVolume = () => {
    if (state.mute === true) {
        state.mute = false;
        updateMute()
    }
    Howler.volume(state.volume / 100)
    saveSettings();
}

export const updateMute = () => {
    soundChannels.voice && soundChannels.voice.mute(state.mute)
    soundChannels.music && soundChannels.music.mute(state.mute)
    soundChannels.musicVariation && soundChannels.musicVariation.mute(state.mute)
    saveSettings();
}

export const SOUNDS = {
    /*gui_card_on: 'assets/sound/gui_card_on.mp3',
    gui_card_off: 'assets/sound/gui_card_off.mp3',*/
    gui_click_button: 'assets/sound/gui_menuCliqueSurBoutonJouer_01.ogg',
    gui_click_choice: 'assets/sound/gui_cliqueSurChoix_01.ogg',
    gui_hover_button: 'assets/sound/gui_menuSurvolBoutonJouer_01.ogg',
    gui_hover_choice: 'assets/sound/gui_survolUnChoix_01.ogg',
    gui_transition_eres: 'assets/sound/gui_transitionEntreEres_01.ogg',
    vox_gardien_01: 'assets/sound/vox_gardienDuTemps_01.ogg',
    vox_gardien_02: 'assets/sound/vox_gardienDuTemps_02.ogg',
    vox_gardien_03: 'assets/sound/vox_gardienDuTemps_03.ogg',
    vox_gardien_04: 'assets/sound/vox_gardienDuTemps_04.ogg',
    vox_gardien_05: 'assets/sound/vox_gardienDuTemps_05.ogg',
    vox_gardien_06: 'assets/sound/vox_gardienDuTemps_06.ogg',
    vox_gardien_07: 'assets/sound/vox_gardienDuTemps_07.ogg',
    vox_gardien_08: 'assets/sound/vox_gardienDuTemps_08.ogg',
    vox_prophete_01: 'assets/sound/vox_prophete_01.ogg',
    vox_prophete_02: 'assets/sound/vox_prophete_02.ogg',
    vox_prophete_03: 'assets/sound/vox_prophete_03.ogg',
    vox_prophete_04: 'assets/sound/vox_prophete_04.ogg'
}

export const MUSICS = {
    mus_menu: 'assets/sound/mus_menu_01.ogg',
    mus_gardien_01: 'assets/sound/mus_gardienDuTemps_01.ogg',
    mus_gardien_02: 'assets/sound/mus_gardienDuTemps_02.ogg',
    mus_gardien_03: 'assets/sound/mus_gardienDuTemps_03.ogg',
    mus_agony_01: 'assets/sound/mus_agonyLoop_01.ogg',
    mus_agony_02: 'assets/sound/mus_agonyLoop_02.ogg',
    mus_agony_03: 'assets/sound/mus_agonyLoop_03.ogg',
    mus_apex_01: 'assets/sound/mus_apexLoop_01.ogg',
    mus_apex_02: 'assets/sound/mus_apexLoop_02.ogg',
    mus_apex_03: 'assets/sound/mus_apexLoop_03.ogg',
    mus_headway_01: 'assets/sound/mus_headwayLoop_01.ogg',
    mus_headway_02: 'assets/sound/mus_headwayLoop_02.ogg',
    mus_headway_03: 'assets/sound/mus_headwayLoop_03.ogg',
    mus_lull_01: 'assets/sound/mus_lullLoop_01.ogg',
    mus_primal_01: 'assets/sound/mus_primalLoop_01.ogg',
    mus_primal_02: 'assets/sound/mus_primalLoop_02.ogg',
    mus_primal_03: 'assets/sound/mus_primalLoop_03.ogg',
}