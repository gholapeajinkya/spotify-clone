import React from 'react'
import "./wideCard.css"

function WideCard() {
    return (
        <div className='wide-card-root'>
            <img className='song-image' src="https://images.genius.com/eb8bd8809a0ce015a534da27827c6554.999x999x1.png" />
            <p className='song-name'  >Liked Songs</p>
        </div>
    )
}

export default WideCard