import React from 'react'
import Header from '../header/Header'
import AboutBlock from './blocks/about_block/About_block'
import TeamBlock from './blocks/team_block/Team_block'

function Home() {
    return (
        <>
            <Header />
            <AboutBlock />
            <TeamBlock />
        </>
    )
}

export default Home
