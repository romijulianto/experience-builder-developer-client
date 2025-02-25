import { React } from 'jimu-core'
import type { AllWidgetSettingProps } from 'jimu-for-builder'
import { TextInput, Switch } from 'jimu-ui'

export default function Setting (props: AllWidgetSettingProps<any>) {
  const onGoogleApiKeyChange = (evt: React.FormEvent<HTMLInputElement>) => {
    props.onSettingChange({
      id: props.id,
      config: props.config.set('googleApiKey', evt.currentTarget.value)
    })
  }

  const onFeatureServiceUrlChange = (evt: React.FormEvent<HTMLInputElement>) => {
    props.onSettingChange({
      id: props.id,
      config: props.config.set('featureServiceUrl', evt.currentTarget.value)
    })
  }

  const onShowTrafficLayerChange = (evt: React.FormEvent<HTMLInputElement>) => {
    props.onSettingChange({
      id: props.id,
      config: props.config.set('showTrafficLayer', evt.currentTarget.checked)
    })
  }

  return (
    <div className="widget-setting-google-maps">
      <div className="setting-row">
        <label>Google Maps API Key</label>
        <TextInput
          type="text"
          className="w-100"
          value={props.config.googleApiKey || ''}
          onChange={onGoogleApiKeyChange}
        />
      </div>
      <div className="setting-row">
        <label>Feature Service URL</label>
        <TextInput
          type="text"
          className="w-100"
          value={props.config.featureServiceUrl || ''}
          onChange={onFeatureServiceUrlChange}
        />
      </div>
      <div className="setting-row">
        <label>Show Traffic Layer by Default</label>
        <Switch
          checked={props.config.showTrafficLayer || false}
          onChange={onShowTrafficLayerChange}
        />
      </div>
    </div>
  )
}
