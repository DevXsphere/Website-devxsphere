import { Html, useProgress} from '@react-three/drei'
import React from 'react'
// import { toFixed } from '@react-three/drei';

const CanvasLoader = () => {
    const { progress } = useProgress();
  return (
    <Html
        as='div'
        center
        style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column',
        }}
    >
        <span className='canvas-loader' />
        <p style={{ fontSize: 14, color: '#F1F1F1', fontWeight: 800, marginTop: 40}}>
            { progress != 0 ? `${progress.toFixed(2)}%` : 'Loading...'}
        </p>
    </Html>
  )
}

export default CanvasLoader