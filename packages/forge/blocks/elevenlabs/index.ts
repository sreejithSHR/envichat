import { createBlock } from '@typebot.io/forge'
import { ElevenlabsLogo, ElevenlabsLogoDark } from './logo'
import { auth } from './auth'
import { convertTextToSpeech } from './actions/convertTextToSpeech'

export const elevenlabs = createBlock({
  id: 'elevenlabs',
  name: 'ElevenLabs',
  tags: ['ai', 'voice', 'generation'],
  LightLogo: ElevenlabsLogo,
  DarkLogo: ElevenlabsLogoDark,
  auth,
  actions: [convertTextToSpeech],
  docsUrl: 'https://./forge/blocks/elevenlabs',
})
