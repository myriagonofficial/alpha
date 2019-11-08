import { SOUNDS, MUSICS } from "@/audio";
import { cards } from "@/cards";
import { deduplicate } from "@/utils";

const audioFiles = [...Object.values(SOUNDS), ...Object.values(MUSICS)]

const imageFiles = [
    ...deduplicate(
        Object.values(cards)
            .filter(card => typeof card.image !== "function")
            .map(card => `assets/cards/${card.image}`)
    ),
    `assets/cards/marine_primal.png`,
    `assets/cards/terrestre_primal.png`,
    `assets/cards/celeste_primal.png`,
    `assets/ALPHA_TITRE.png`,
    `assets/MYRIAGON_LOGO.png`,
    require(`./assets/ECRAN_INTRO.png`),
    require(`./assets/ui/interface_fond_total.png`),
    require(`./assets/ui/interface_barre_bas_fond.png`),
    require(`./assets/ui/interface_barre_haut_fond.png`)
]

export const preloadGame = (onProgress) => {
    return new Promise((resolve) => {
        loadAssets(imageFiles, audioFiles, resolve, onProgress);
    })
}

export const loadAssets = function (imageFiles, audioFiles, callback, onProgress) {

    // load multiple images and callback when ALL images have loaded
    let images = {},
        sounds = {},
        assets = imageFiles.concat(audioFiles),
        loaded = 0,
        loadedAssets = {},
        started = 0,
        MAX_CONCURRENT_DL = 10;

    function onload(src) {
        if (src in loadedAssets) return;
        loadedAssets[src] = true;
        loaded++;
        onProgress(loaded / assets.length * 100);
        /*if (this._loadingTimeout) {
            clearTimeout(this._loadingTimeout);
        }*/
        if (loaded >= assets.length && callback) {
            callback({ images, sounds });
            callback = null;
        } else if (started < assets.length) {
            loadNext();
        }
    }

    function loadNext() {
        const src = assets[started];
        const type = started < imageFiles.length ? "image" : "sound";
        started++;

        switch (type) {
            case "image":
                images[src] = document.createElement('img');
                images[src].addEventListener('load', () => onload(src));
                images[src].addEventListener('error', () => onload(src));
                images[src].src = src;
                break;
            case "sound":
                sounds[src] = document.createElement('audio');
                sounds[src].addEventListener('canplaythrough', () => onload(src), false);
                sounds[src].addEventListener('load', () => onload(src), false);
                sounds[src].addEventListener('error', () => onload(src), false);
                //sounds[src]._loadingTimeout = setTimeout(onload, 5000); // too long to load, skip
                sounds[src].src = src;
                document.body.appendChild(sounds[src]);
                sounds[src].load();
                break;
        }
    }

    while (MAX_CONCURRENT_DL--) loadNext();
}