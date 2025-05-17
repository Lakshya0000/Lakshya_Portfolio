import IconCloud from './icon-cloud'

const slugs = [
  'react', // React.js
  'nextdotjs', // Next.js
  'typescript', // TypeScript
  'javascript', // JavaScript
  'vite', // Vite
  'tailwindcss', // Tailwind CSS
  'nodedotjs', // Node.js
  'express', // Express.js
  'hono', // Hono (might not be available in simple-icons)
  'prisma', // Prisma ORM
  'prisma', // Prisma Accelerate (using prisma twice as it's the same icon)
  'postgresql', // PostgreSQL
  'mongodb', // MongoDB
  'ethers', // Ethers.js (might not be available in simple-icons)
  'metamask', // MetaMask
  'astradb', // Astra DB (might not be available in simple-icons)
  'wagmi', // wagmi (might not be available in simple-icons)
  'onchainkit', // onchainkit (might not be available in simple-icons)
  'starknet', // StarkNet (might not be available in simple-icons)
  // Adding some common tech icons that are available in simple-icons
  // to ensure the cloud has enough icons if some aren't available
  'github',
  'git',
  'visualstudiocode',
  'html5',
  'css3',
]

export function IconCloudDemo() {
  return (
    <div className='relative flex size-full max-w-xl items-center justify-center overflow-hidden rounded-lg px-8 min-w-64 sm:pb-0 pb-4'>
      <IconCloud iconSlugs={slugs} />
    </div>
  )
}
