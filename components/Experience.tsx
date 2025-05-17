import React from 'react'
import { WobbleCard } from './ui/wobble-card'

// Experience data in a JSON structure
const experiencesData = [
  {
    id: 1,
    organization: 'Web Wing - Google Developer Group (GDG), IIITL',
    role: 'Member',
    period: 'Oct 2024 - Current',
    description:
      "As a team member of the GDG WEB Wing, I've actively mentored over 100+ juniors, helping them grasp both fundamental and advanced concepts of web development. Apart from organizing learning sessions and improving assignment structures, I regularly solved doubts—sometimes late at night before deadlines—ensuring no one felt stuck or left behind. The efforts paid off, with a noticeable 40% increase in participation and engagement. It's been fulfilling to see beginners build their first full-stack projects and grow more confident in their skills.",
  },
  {
    id: 2,
    organization: 'Goonj, Dramatic Society of IIIT Lucknow',
    role: 'Member',
    period: 'July 2024 - Current',
    description:
      'Goonj has been a space where I explored creativity, chaos, and teamwork all at once. I played a key role in organizing events like Jokes Apart, managing everything from rehearsals to backstage coordination. Along the way, I mentored 40+ volunteers—helping them with everything from acting tips to last-minute script changes. Whether it was managing lights, props, or boosting morale before a performance, I learned how to keep things running smoothly even when nothing went according to plan. Goonj taught me how powerful storytelling and teamwork can be.',
  },
  {
    id: 3,
    organization: 'Seraphim, Social Awareness Society of IIIT Lucknow',
    role: 'Member',
    period: 'July 2024 - Current',
    description:
      "Being a part of Seraphim allowed me to contribute meaningfully to causes that matter. From organizing tree plantation and cleanliness drives to actively participating in donation campaigns, I've always tried to be hands-on. One of the most memorable experiences was our summer donation drive, where we distributed water bottles to people working or stranded on the roads during extreme heat. Seeing their smiles and gratitude was a powerful reminder of the impact small actions can have. These events have helped me grow not just as a volunteer, but as a more socially responsible individual.",
  },
]

const Experience: React.FC = () => {
  return (
    <div className='max-w-6xl mx-auto my-12 px-6 sm:px-16'>
      <h2 className='text-6xl font-extrabold mb-4 text-left font-recoleta'>
        Position Of Responsibility
      </h2>
      <br />

      {experiencesData.map((experience) => (
        <React.Fragment key={experience.id}>
          <WobbleCard containerClassName='bg-blue-900 '>
            <div className='flex justify-between flex-col sm:flex-row text-neutral-300'>
              <div>
                <h3 className='text-xl xl:text-2xl font-bold text-white'>
                  {experience.organization}
                </h3>
                <p className='sm:text-lg italic'>{experience.role}</p>
              </div>
              <div>
                <p className='sm:text-right text-base xl:text-lg'>
                  {experience.period}
                </p>
              </div>
            </div>

            <p className='mt-4 text-base xl:text-lg font-medium'>
              {experience.description}
            </p>
          </WobbleCard>
          {experience.id !== experiencesData.length && (
            <>
              <br />
              <br />
            </>
          )}
        </React.Fragment>
      ))}
    </div>
  )
}

export default Experience
