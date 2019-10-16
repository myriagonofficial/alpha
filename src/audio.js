import { Howl } from "howler"

export const soundChannels = {}

export const playSound = (key, channel) => {
    if (!(key in sounds)) return console.error(`Sound not found: ${key}`)
    sounds[key].play();
    if (channel) {
        if (soundChannels[channel]) soundChannels[channel].stop() // stop previous sound in same channel
        soundChannels[channel] = sounds[key]
    }
}

export const playMusic = (key) => {
    if (!(key in musics)) return console.error(`Music not found: ${key}`)
    stopMusic();
    musics[key].play();
    soundChannels.music = musics[key]
}

export const stopSound = channel => {
    if (soundChannels[channel]) soundChannels[channel].stop()
}

export const stopMusic = () => stopSound("music")

export const SOUNDS = {
    gui_card_on: 'assets/sound/gui_card_on.mp3',
    gui_card_off: 'assets/sound/gui_card_off.mp3',
    vox_gardien_01: 'assets/sound/vox_gardien_01.ogg',
    vox_gardien_02: 'assets/sound/vox_gardien_02.ogg',
    vox_gardien_03: 'assets/sound/vox_gardien_03.ogg',
    vox_gardien_04: 'assets/sound/vox_gardien_04.ogg',
    vox_gardien_05: 'assets/sound/vox_gardien_05.ogg',
    vox_gardien_06: 'assets/sound/vox_gardien_06.ogg',
    vox_gardien_07: 'assets/sound/vox_gardien_07.ogg'
}

export const MUSICS = {
    mus_menu: 'assets/sound/mus_menu_01.mp3',
    mus_gardien_01: 'assets/sound/mus_gardien_01.mp3',
    mus_gardien_02: 'assets/sound/mus_gardien_02.mp3',
    mus_gardien_03: 'assets/sound/mus_gardien_03.mp3'
}

export const sounds = Object.fromEntries(Object.entries(SOUNDS).map(([key, path]) => {
    return [key, new Howl({
        src: [path]
    })];
}))

export const musics = Object.fromEntries(Object.entries(MUSICS).map(([key, path]) => {
    return [key, new Howl({
        src: [path],
        loop: true
    })];
}))