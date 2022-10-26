import LandingPageContent from '../../components/landingPageContent/landingPageContent'
import LandinPageLeftPane from '../../components/landinPageLeftPane/landinPageLeftPane'
import MusicPlayer from '../../components/musicPlayer/musicPlayer'
import "./landinPage.css"
export default function LandingPage() {
    return (
        <div className='landin-page-root'>
            <div className='landin-page-root-header'>
                <LandinPageLeftPane />
                <LandingPageContent />
            </div>
            <MusicPlayer />
        </div>
    )
}
