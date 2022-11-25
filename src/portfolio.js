const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: '',
  title: 'Saif.',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Saif',
  role: 'Full Stack Flutter Developer',
  description:
    '3+ years in Flutter and Dart | 4 Interships | 35+ Projects ',
  resume: 'https://linkedin.com/in/saifudeenhisham/',
  social: {
    linkedin: 'https://linkedin.com/in/saifudeenhisham/',
    github: 'https://github.com/beSaif',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'ment-Ai',
    description:
      'AI model embedded in Flutter App to predict user sentiment based on pictures',
    stack: ['tflite', 'camera', 'GetX'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
  },
  {
    name: 'Adhanminima',
    description:
      'Minimalistic Adhan App for Muslims to get notified at prayer times.',
    stack: ['tflite', 'camera', 'React'],
    sourceCode: 'https://github.com/beSaif/adhanminima',
    // livePreview: 'https://github.com',
    playStore: 'https://play.google.com/store/apps/details?id=in.codesaif.adhaan'
  },
  {
    name: 'todoSaif',
    description:
      'A minimalistic to-do app. Your tasks will be synced and accessible across all your devices.',
    stack: ['sqflite', 'sharedpref', 'Firebase'],
    sourceCode: 'https://github.com/beSaif/todosaif',
    livePreview: 'https://besaif.github.io/todosaifweb/',
    playStore: 'https://play.google.com/store/apps/details?id=in.codesaif.todosaif'
  },
  {
    name: 'codepod',
    description:
      'A fully functional Flutter-Serverpod app. Developed only using Dart for Frontend as well as Backend.',
    stack: ['Serverpod', 'API'],
    sourceCode: 'https://github.com/beSaif/codepod',
  },
  {
    name: 'Medica',
    description:
      'Stores user medical records and provides a way to share them with doctors.',
    stack: ['Work-in-Progress'],
    sourceCode: 'https://github.com/jumainahkhan/Medica',
  },
  {
    name: 'GetVu App',
    description:
      'A semi decentralized bus seat networking app.',
    stack: ['Google Maps', 'http', 'Razorpay'],
    sourceCode: 'https://github.com/beSaif/GetVu',

  },
  {
    name: 'and many more',
    description:
      'Checkout my Github for more projects.',
    stack: ['. . .'],
    sourceCode: 'https://github.com/beSaif/',

  },
  
]

const experience = [  {
  name: 'HiSave',
  title: 'Flutter Der',
  fromTo: 'Oct 2022 - Present',
  description:
    'Developing a Flutter app to embed an already existed webapp and make it more user friendly. Working closely in associating with Mastercard & ICICI.',
},{
  name: 'GetVu',
  title: 'Senior Flutter Developer',
  fromTo: 'Jul 2022 - Oct 2022',
  description:
    'A bus ticket booking app where tickets are NFT Tokens and can be resold to other users. Project is still in development phase.',
},
{
  name: 'Articuno Coding',
  title: 'Flutter Developer',
  fromTo: 'Jul 2022 - Oct 2022',
  description:
    'A meditation app that plays music based on electrical activity of the brain which is measured using EEG Headset. Project was done for an US based client.'
},
{
  name: 'ParadiseWeb',
  title: 'Flutter Developer',
  fromTo: 'Apr 2022 - Present',
  additional: 'University Project',
  description:
    'An social networking app to connect people with similar interests and hobbies.',
},

{
  name: 'MD Club',
  title: 'Flutter Developer',
  fromTo: 'Jun 2022 - Present',
  additional: 'University Project',
  description:
    'An event management app to organize, conduct and market all the events conducted in my university.',
},
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'Flutter',
  'Dart',
  'Firebase',
  'AWS Amplify',
  'Serverpod',
  'GetX',
  'Provider',
  'Webview',
  'TensorFlow'
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'hishamkolikara@gmail.com',
}

export { header, about, projects, experience, skills, contact }
