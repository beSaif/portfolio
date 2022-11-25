
import './ExperienceContainer.css'

const ExperienceContainer = ({ experience }) => (
  <div className='experience'>
    <h3>{experience.name}</h3>
    <p className='experience__detail'>{experience.title} | {experience.fromTo}</p>
    <p className='experience__additional'>{experience.additional}</p>

    <p className='experience__description'>{experience.description}</p>
    {/* {experience.stack && (
      <ul className='experience__stack'>
        {experience.stack.map((item) => (
          <li key={uniqid()} className='experience__stack-item'>
            {item}
          </li>
        ))}
      </ul>
    )} */}

  </div>
)

export default ExperienceContainer
