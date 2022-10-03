import React from 'react'
import { NavLink } from 'react-router-dom'
import "./landinPageLeftPane.css"
function LandinPageLeftPane() {
    return (
        <div className='landing-page-left-pane-root'>
            <div className='landing-page-left-pane-header'>
                <NavLink className="landing-page-left-pane-nav" to={"/collection/playlists"}>
                    Your Library
                </NavLink>
                <NavLink className="landing-page-left-pane-nav" to={"/collection/playlists"}>
                    Create Playlist
                </NavLink>
                <NavLink className="landing-page-left-pane-nav" to={"/collection/playlists"}>
                    Liked Songs
                </NavLink>
            </div>
            <div className="landing-page-left-pane-body">
                {
                    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14].map((playlist: number) => (
                        <NavLink className="landing-page-left-pane-nav" to={`/collection/playlists/${playlist}`}>
                            My Playlist {playlist}
                        </NavLink>
                    ))
                }
            </div>
            <div className="landing-page-left-pane-footer">
                <NavLink className="landing-page-left-pane-nav" to={"/collection/playlists"}>
                    Install App
                </NavLink>
            </div>
        </div>
    )
}

export default LandinPageLeftPane