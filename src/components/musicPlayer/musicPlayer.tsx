import React from 'react'
import "./musicPlayer.css"
function MusicPlayer() {
    return (
        <div className='music-player-root'>
            <div>
                <button>k</button>
                <button>||</button>
                <button>o</button>
            </div>
            <input type="range" className='music-player-slider' />
        </div>
    )
}

export default MusicPlayer