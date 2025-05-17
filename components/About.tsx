import React from 'react'
import { WobbleCard } from './ui/wobble-card'

const About: React.FC = () => {
  return (
    <div className='max-w-6xl mx-auto my-12 px-6 sm:px-16'>
      <WobbleCard>
        <h2 className='text-3xl font-extrabold mb-4 text-left font-recoleta'>
          About Me
        </h2>
        <p className='mt-4 text-neutral-200 mx-auto text-base xl:text-lg font-medium'>
          {' '}
          I am a <b>Lucknow-based full-stack developer</b> with a strong focus
          on{' '}
          <b>frontend development, blockchain integration, and system design</b>
          , currently pursuing a B.Tech in{' '}
          <b>Computer Science and Artificial Intelligence</b> at{' '}
          <b>IIIT Lucknow</b>. Skilled in{' '}
          <b>React, Next.js, TypeScript, Node.js, and Solidity</b>, I build
          scalable, modern web applications with clean UI and robust
          functionality.
          <br />
          My project portfolio includes <b>MindChain</b> (a blockchain-powered
          mental wellness platform), <b>Conneqt</b> (a decentralized research
          collaboration tool), and <b>BoldNarratives</b> {`(a feature-rich blog
          management system). I've also worked on AI-integrated tools like`}{' '}
          <b>Yeti AI Bot</b> for social media performance analysis.
          {' '}
        </p>
      </WobbleCard>
    </div>
  )
}

export default About
