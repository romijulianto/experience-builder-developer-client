import { type ImmutableObject } from 'seamless-immutable'

export interface Config {
  googleApiKey: string
  featureServiceUrl: string
  showTrafficLayer: boolean
}

export type IMConfig = ImmutableObject<Config>
