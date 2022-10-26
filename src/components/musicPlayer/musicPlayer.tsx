import React from 'react'
import "./musicPlayer.css"
function MusicPlayer() {
    return (
        <div className='music-player-root'>
            <input type="range" className='music-player-slider' />
        </div>
    )
}

export default MusicPlayer