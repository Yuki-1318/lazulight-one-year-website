import React, { useEffect } from 'react'

interface MascotProps {
  src: string
  className?: string
  style?: string
  delay?: number
  id: React.RefObject<HTMLVideoElement>
}

export default function MascotAnimation (props: MascotProps): JSX.Element {
  useEffect(() => {
    setTimeout(() => {
      if (props.id.current !== null) {
        props.id.current.setAttribute('loop', 'true')
        void props.id.current.play()
      }
    }, props.delay)
  })
  return <video ref={props.id} muted src={props.src} />
}
