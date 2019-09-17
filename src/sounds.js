import { Howl } from "howler"

export const soundChannels = {}

export const sounds = {
    channels: {},

    play(key, channel) {
        if (!(key in sounds)) console.error(`Sound not found: ${key}`)
        sounds[key].play();
        if (channel) {
            if (sounds.channels[channel]) sounds.channels[channel].stop() // stop previous sound in same channel
            sounds.channels[channel] = sounds[key]
        }
    },

    stopMusic() {
        if (sounds.channels.music) sounds.channels.music.stop()
    },

    gui_card_on: new Howl({
        src: ['assets/sound/gui_card_on.mp3']
    }),
    gui_card_off: new Howl({
        src: ['assets/sound/gui_card_off.mp3']
    }),

    vox_gardien_01: new Howl({
        src: ['assets/sound/vox_gardien_01.mp3']
    }),
    vox_gardien_02: new Howl({
        src: ['assets/sound/vox_gardien_02.mp3']
    }),
    vox_gardien_03: new Howl({
        src: ['assets/sound/vox_gardien_03.mp3']
    }),
    vox_gardien_04: new Howl({
        src: ['assets/sound/vox_gardien_04.mp3']
    }),
    vox_gardien_05: new Howl({
        src: ['assets/sound/vox_gardien_05.mp3']
    }),

    mus_menu: new Howl({
        src: ['assets/sound/mus_menu_01.mp3'],
        loop: true
    }),
    mus_gardien_01: new Howl({
        src: ['assets/sound/mus_gardien_01.mp3'],
        loop: true
    }),
    mus_gardien_02: new Howl({
        src: ['assets/sound/mus_gardien_02.mp3'],
        loop: true
    }),
    mus_gardien_03: new Howl({
        src: ['assets/sound/mus_gardien_03.mp3'],
        loop: true
    })
}