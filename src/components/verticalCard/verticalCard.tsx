import React from 'react'
import "./verticalCard.css"
function VerticalCard() {
    return (
        <div className='vertical-card'>
            <img className='vertical-card-song-image' src="https://images.genius.com/eb8bd8809a0ce015a534da27827c6554.999x999x1.png" />
            <p className='vertical-card-song-name'  >Liked Songs</p>
            <p className='vertical-card-song-artists'  >Liked Songs</p>
        </div>
    )
}

export default VerticalCard