import React from 'react'
import WideCard from '../wideCard/wideCard'
import "./landingPageContent.css"
function LandingPageContent() {
    return (
        <div className='landing-page-content-root'>
            <h3 className='landing-page-title'>Good morning</h3>
            <div className='landing-page-content-card-container'>
                <WideCard />
                <WideCard />
                <WideCard />
                <WideCard />
            </div>
        </div>
    )
}

export default LandingPageContent