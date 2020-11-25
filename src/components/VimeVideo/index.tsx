import React, { FC, memo } from 'react';
import { VimePlayer, VimeHls, VimeDefaultUi } from '@vime/react';

/**
 * https://vimejs.com/
 * 🎥  Multi-provider support (HTML5, HLS, YouTube, Vimeo etc.).
 * 👑  One API to rule them all! Don't re-learn anything the next time you need a player.
 * ♾️  Avoid cross-browser differences on media related APIs, such as fullscreen and picture-in-picture.
 * 👐  Accessible to all via ARIA roles/states/properties and keyboard support.
 * 🌎  I18N support.
 * 🖥  Designed witn both mobile and desktop in mind.
 * 👌  Touch input friendly.
 * 🎨  Style anything you want with CSS variables. Default light and dark themes are included.
 * 🏎️  Performant with preconnections + lazy loading of components and media out of the box.
 * 🧩  Easily build your own components and extend Vime.
 * 🗑️  Lightweight - ~25kB (gzip) standalone, and ~47kB with the default Vime UI.
 * ️🧰  Awesome default custom UI's for audio/video/live media.
 * 🛠  Comprehensive player API with a heap of properties, methods and events.
 * 💪  Built with TypeScript so you can enjoy completely typed components.
 * 🏠  Feel right at home with HTML/CSS/JS thanks to web components.
 * 🏗️  Framework specific bindings for React, Vue, Svelte and Angular.
 */

export interface IVimVideo {

}

const VimVideo: FC = memo<IVimVideo>(() => {

    const style = {
        '--vm-player-theme': '#e86c8b'
    }

    const crossOrigin = true;

    return (
        <VimePlayer
            theme="dark"
            {...style}
        >
            <VimeHls
                {...crossOrigin}
                poster="https://media.vimejs.com/poster.png"
            >
                <source
                    data-src="https://media.vimejs.com/hls/index.m3u8"
                    type="application/x-mpegURL"
                />
            </VimeHls>
            <VimeDefaultUi />
        </VimePlayer>
    )
});

export default VimVideo;