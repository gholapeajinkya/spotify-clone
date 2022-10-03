import LandingPageContent from '../../components/landingPageContent/landingPageContent'
import LandinPageLeftPane from '../../components/landinPageLeftPane/landinPageLeftPane'
import "./landinPage.css"
export default function LandingPage() {
    return (
        <div className='landin-page-root'>
            <LandinPageLeftPane />
            <LandingPageContent />
        </div>
    )
}
