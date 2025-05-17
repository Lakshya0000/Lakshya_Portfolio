import { IconCloudDemo } from './ui/IconCloud'
import TechStackButton from './ui/techstack-button'

const Skills = () => {
  return (
    <div className='mx-8 overflow-hidden'>
      <div className='max-w-5xl mx-auto my-2 px-0 sm:px-6 py-6 border-neutral-600 border-2 rounded-lg flex gap-0 sm:gap-4 items-center bg-foreground sm:flex-row flex-col'>
        <div className='p-4 w-11/12'>
          <div className='lg:text-4xl text-3xl font-extrabold mb-8 font-recoleta'>
            Skills
          </div>
          <div className='flex gap-2 flex-wrap'>
            <TechStackButton
              name='React.js'
              icon='bg-cyan-400'
            />{' '}
            {/* React uses cyan */}
            <TechStackButton
              name='Next.js'
              icon='bg-black'
            />{' '}
            {/* Next.js uses black */}
            <TechStackButton
              name='TypeScript'
              icon='bg-blue-400'
            />{' '}
            {/* TypeScript is blue */}
            <TechStackButton
              name='JavaScript'
              icon='bg-yellow-300'
            />{' '}
            {/* JavaScript is yellow */}
            <TechStackButton
              name='Vite'
              icon='bg-purple-500'
            />{' '}
            {/* Vite uses purple */}
            <TechStackButton
              name='Tailwind CSS'
              icon='bg-teal-400'
            />{' '}
            {/* Tailwind CSS uses teal */}
            <TechStackButton
              name='Node.js'
              icon='bg-green-400'
            />{' '}
            {/* Node.js uses green */}
            <TechStackButton
              name='Express.js'
              icon='bg-gray-800'
            />{' '}
            {/* Express.js uses black/gray */}
            <TechStackButton
              name='Hono'
              icon='bg-blue-300'
            />{' '}
            {/* Hono uses light blue */}
            <TechStackButton
              name='Prisma ORM'
              icon='bg-indigo-500'
            />{' '}
            {/* Prisma uses indigo */}
            <TechStackButton
              name='Prisma Accelerate'
              icon='bg-indigo-700'
            />{' '}
            {/* Prisma Accelerate darker indigo */}
            <TechStackButton
              name='PostgreSQL'
              icon='bg-blue-600'
            />{' '}
            {/* PostgreSQL is blue */}
            <TechStackButton
              name='MongoDB'
              icon='bg-green-500'
            />{' '}
            {/* MongoDB is green */}
            <TechStackButton
              name='Ethers.js'
              icon='bg-pink-500'
            />{' '}
            {/* Ethers.js using pink */}
            <TechStackButton
              name='MetaMask'
              icon='bg-orange-500'
            />{' '}
            {/* MetaMask uses orange */}
            <TechStackButton
              name='Astra DB'
              icon='bg-violet-500'
            />{' '}
            {/* Astra DB using violet */}
            <TechStackButton
              name='wagmi'
              icon='bg-blue-500'
            />{' '}
            {/* wagmi uses blue shades */}
            <TechStackButton
              name='onchainkit'
              icon='bg-emerald-500'
            />{' '}
            <TechStackButton
              name='StarkNet'
              icon='bg-indigo-600'
            />{' '}
            {/* onchainkit using emerald */}
          </div>
        </div>

        <div>
          <IconCloudDemo />
        </div>
      </div>
    </div>
  )
}

export default Skills
