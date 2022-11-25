import uniqid from 'uniqid'
import { experience } from '../../portfolio'
import ExperienceContainer from '../ExperienceContainer/ExperienceContainer'
import './Experience.css'

const Experience = () =>  (
  <section className='section experience' id='experience'>
  <h2 className='section__title'>Experience</h2>
  
      <div className ="experience__grid">
        {experience.map((exp) => (
         <ExperienceContainer key={uniqid()} experience={exp} />
        ))}
        
      </div>

    </section>
  )


export default Experience
