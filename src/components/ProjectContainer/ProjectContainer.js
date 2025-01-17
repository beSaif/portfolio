import uniqid from 'uniqid'
import GitHubIcon from '@material-ui/icons/GitHub'
import LaunchIcon from '@material-ui/icons/Launch'
import './ProjectContainer.css'
import { Shop } from '@material-ui/icons'

const ProjectContainer = ({ project }) => (
  <div className='project'>
    <h3>{project.name}</h3>

    <p className='project__description'>{project.description}</p>
    {project.stack && (
      <ul className='project__stack'>
        {project.stack.map((item) => (
          <li key={uniqid()} className='project__stack-item'>
            {item}
          </li>
        ))}
      </ul>
    )}

    {project.sourceCode && (
      <a
        href={project.sourceCode}
        aria-label='source code'
        className='link link--icon'
        rel="noopener noreferrer"
        target = '_blank'
      >
        <GitHubIcon />
      </a>
    )}

{project.livePreview && (
      <a
        href={project.livePreview}
        aria-label='live preview'
        className='link link--icon'
        rel="noopener noreferrer"
        target = '_blank'
      >
        <LaunchIcon />
      </a>

        // render() {
        //      iOSUrl = 'https://itunes.apple.com/us/app/all-of-the-lights/id959389722?mt=8';
        //     return (
        //         <div>
        //             <MobileStoreButton
        //               store="ios"
        //               url={iOSUrl}
        //               linkProps={{ title: 'iOS Store Button' }}
        //             />
        //         </div>
        //     );
        // }
    
    )}

    {project.playStore && (
      <a
        href={project.playStore}
        aria-label='live preview'
        className='link link--icon'
        rel="noopener noreferrer"
        target = '_blank'
      >
    <Shop />
      </a>
    )}
  </div>
)

export default ProjectContainer
