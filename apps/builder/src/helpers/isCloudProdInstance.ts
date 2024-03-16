import { env } from '@typebot.io/env'

export const isCloudProdInstance = () => {
  if (typeof window !== 'undefined') {
    return window.location.hostname === '.'
  }
  return env.NEXTAUTH_URL === 'https://.'
}
