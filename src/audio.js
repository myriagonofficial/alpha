import { Howl } from "howler"

export const soundChannels = {}

export const playSound = (key, channel) => {
    if (!(key in sounds)) return console.error(`Sound not found: ${key}`)
    const sound = new Howl({ src: [sounds[key]] })
    sound.play();
    if (channel) {
        if (soundChannels[channel]) soundChannels[channel].stop() // stop previous sound in same channel
        soundChannels[channel] = sound
    }
}

export const playMusic = (key) => {
    if (!(key in musics)) return console.error(`Music not found: ${key}`)
    stopMusic();
    const music = new Howl({ src: [musics[key]], loop: true })
    music.play();
}

export const stopMusic = () => {
    if (soundChannels.music) soundChannels.music.stop()
}

export const sounds = {
    gui_card_on: 'assets/sound/gui_card_on.mp3',
    gui_card_off: 'assets/sound/gui_card_off.mp3',
    vox_gardien_01: 'assets/sound/vox_gardien_01.mp3',
    vox_gardien_02: 'assets/sound/vox_gardien_02.mp3',
    vox_gardien_03: 'assets/sound/vox_gardien_03.mp3',
    vox_gardien_04: 'assets/sound/vox_gardien_04.mp3',
    vox_gardien_05: 'assets/sound/vox_gardien_05.mp3'
}

export const musics = {
    mus_menu: 'assets/sound/mus_menu_01.mp3',
    mus_gardien_01: 'assets/sound/mus_gardien_01.mp3',
    mus_gardien_02: 'assets/sound/mus_gardien_02.mp3',
    mus_gardien_03: 'assets/sound/mus_gardien_03.mp3'
}