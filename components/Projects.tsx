import { FaGithub } from 'react-icons/fa6'
import Image from 'next/image'
import Regal from '@/public/images/mindchain.png'
import Bytes from '@/public/images/conneqt.png'
import Page from '@/public/images/boldnarratives.png'
import Link from 'next/link'

const projectsData = [
  {
    id: 1,
    title: 'Conneqt',
    description:
      'Conneqt is a decentralized platform designed to enhance collaborative learning using StudyDAO and KnowledgeVault systems. It brings together students, educators, and contributors to share knowledge transparently and reward efforts fairly using blockchain. With DAO-based governance and IPFS for distributed storage, it ensures integrity, traceability, and community ownership.',
    image: Bytes,
    alt: 'Conneqt Platform',
    demoLink: 'https://conneqt-two.vercel.app/',
    githubLink: 'https://github.com/Lakshya0000/Conneqt',
    technologies: [
      'Base',
      'Next.JS',
      'Wagmi',
      'OnChainKit',
      'IPFS',
      'Context',
      'Tailwind CSS',
    ],
  },
  {
    id: 2,
    title: 'MindChain',
    description:
      'MindChain is a mental wellness platform where users earn blockchain-based SoulTokens by completing self-care activities like journaling and meditation. These tokens can be redeemed for discounts on paid workshops using PYUSD. Built with ERC20 smart contracts, the platform promotes consistent mental health practices by blending psychology with token-based incentives.',
    image: Regal,
    alt: 'MindChain Mental Wellness',
    demoLink: 'https://mind-chain.vercel.app/',
    githubLink: 'https://github.com/Lakshya0000/MindChain',
    technologies: [
      'Solidity',
      'React',
      'JavaScript',
      'MetaMask',
      'Ethers.js',
      'Tailwind CSS',
    ],
  },
  {
    id: 3,
    title: 'BoldNarratives',
    description:
      'BoldNarratives is a full-stack blog management platform that enables users to write, read, and interact with blogs. It includes features like genre-based filtering, upvoting, search, trending sorting, and comment systems with permissions. Built with a modern serverless backend and a dynamic UI, the platform promotes expressive and user-centric blogging.',
    image: Page,
    alt: 'BoldNarratives Blog Platform',
    demoLink: 'https://bold-narratives.vercel.app/',
    githubLink: 'https://github.com/Lakshya0000/BoldNarratives',
    technologies: [
      'React',
      'TypeScript',
      'Hono',
      'PostgreSQL',
      'Prisma ORM',
      'Tailwind CSS',
      'Vite',
    ],
  },
]

const Projects = () => {
  return (
    <div className='max-w-6xl mx-auto mt-12 xl:mt-20 mb-12 px-6 sm:px-16'>
      <div className='font-extrabold text-3xl xl:text-4xl font-recoleta text-center'>
        Projects
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mt-4'>
        {projectsData.map((project) => (
          <div
            key={project.id}
            className='bg-foreground border-neutral-600 border-2 rounded-xl p-4'>
            <div className='overflow-hidden rounded-lg'>
              <Link
                href={project.demoLink}
                target='_blank'>
                <Image
                  src={project.image}
                  alt={project.alt}
                  className='rounded-lg hover:scale-105 transition-transform duration-500'
                />
              </Link>
            </div>
            <div className='flex justify-between items-center gap-2 pt-4 pb-2 px-3'>
              <div className='text-2xl font-bold font-inter'>
                {project.title}
              </div>
              <Link
                href={project.githubLink}
                target='_blank'>
                <FaGithub className='hover:scale-110 size-6' />
              </Link>
            </div>
            <div className='px-3 text-neutral-400 italic'>
              {' '}
              {project.description}
            </div>
            <div className='flex flex-wrap gap-2 px-3 pt-4 text-xs lg:text-sm font-medium mb-2 items-center justify-start'>
              {project.technologies.map((tech, index) => (
                <div
                  key={index}
                  className='bg-[#2e2e2e] px-3 py-0.5 w-fit rounded-full'>
                  {tech}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Projects
