const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://rajshekhar26.github.io/cleanfolio',
  title: 'Saif.',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Saif',
  role: 'Full Stack Flutter Developer',
  description:
    '3+ years in Flutter and Dart | 4 Interships | 35+ Projects ',
  resume: 'https://example.com',
  social: {
    linkedin: 'https://linkedin.com/beSaif',
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
    name: 'GetVu',
    description:
      'A semi decentralized bus seat networking app.',
    stack: ['Google Maps', 'http', 'Razorpay'],
    sourceCode: 'https://github.com/beSaif/GetVu',

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

export { header, about, projects, skills, contact }
