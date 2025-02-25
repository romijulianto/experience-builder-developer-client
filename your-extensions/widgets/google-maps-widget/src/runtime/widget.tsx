import { React, jsx } from 'jimu-core'
import type { AllWidgetProps } from 'jimu-core'
import { GoogleMap, LoadScript, Marker, TrafficLayer } from '@react-google-maps/api'
import { Button } from 'jimu-ui'
import type { Config } from '../config'

const containerStyle = {
  width: '100%',
  height: '100%'
}

const buttonStyle: React.CSSProperties = {
  position: 'absolute' as 'absolute',
  top: '10px',
  right: '10px',
  zIndex: 1000,
  backgroundColor: 'white',
  padding: '8px 12px',
  borderRadius: '4px',
  boxShadow: '0 2px 6px rgba(0,0,0,0.3)',
  border: '1px solid #ccc',
  color: '#333',
  fontWeight: '500',
  fontSize: '14px',
  cursor: 'pointer',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  minWidth: '100px',
  transition: 'all 0.3s ease'
}

export default function Widget (props: AllWidgetProps<Config>) {
  const [features, setFeatures] = React.useState([])
  const [showTraffic, setShowTraffic] = React.useState(false)
  React.useEffect(() => {
    if (props.config.featureServiceUrl) {
      fetch(`${props.config.featureServiceUrl}/query?where=1=1&outFields=*&f=json`)
        .then(response => response.json())
        .then(data => {
          setFeatures(data.features)
        })
    }
  }, [props.config.featureServiceUrl])

  const [map, setMap] = React.useState(null)

  const onLoad = React.useCallback(function callback (map) {
    setMap(map)
  }, [])

  const onUnmount = React.useCallback(function callback (map) {
    setMap(null)
  }, [])

  return (
    <div style={{ position: 'relative', width: '100%', height: '100%' }}>
      <Button
        style={buttonStyle}
        onClick={() => { setShowTraffic(!showTraffic) }}
      >
        {showTraffic ? 'Hide Traffic' : 'Show Traffic'}
      </Button>
      <LoadScript googleMapsApiKey={props.config.googleApiKey}>
        <GoogleMap
          mapContainerStyle={containerStyle}
          zoom={10}
          center={{ lat: -6.200000, lng: 106.816666 }}
          onLoad={onLoad}
          onUnmount={onUnmount}
          options={{
            zoomControl: true, // Enable zoom controls
            mapTypeControl: true, // Enable map type control
            streetViewControl: true, // Enable street view control
            fullscreenControl: true // Enable fullscreen control
          }}
        >
          {showTraffic && <TrafficLayer />}
          {features.map((feature, index) => (
            <Marker
              key={index}
              position={{
                lat: feature.geometry.y,
                lng: feature.geometry.x
              }}
            />
          ))}
        </GoogleMap>
      </LoadScript>
    </div>
  )
}
