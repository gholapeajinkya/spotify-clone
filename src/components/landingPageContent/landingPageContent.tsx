import React from 'react'
import VerticalCard from '../verticalCard/verticalCard'
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
            <div className='landing-page-vertical-content'>
                <h3 className='landing-page-title'>Your top mixes</h3>
                <div className='landing-page-content-vertical-card-container'>
                    <VerticalCard />
                    <VerticalCard />
                    <VerticalCard />
                    <VerticalCard />
                    <VerticalCard />
                </div>
            </div>
        </div>
    )
}

export default LandingPageContent