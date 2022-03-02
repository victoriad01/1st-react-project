import { useState } from 'react'

export const UseStateExample = () => {
  const [text, setText] = useState('Hi Dear!')
  const handleClick = () => {
    if (text === 'Hi Dear!') {
      setText('Welcome here')
    } else if (text === 'Welcome here') {
      setText('Ready to Get Started?')
    } else if (text === 'Ready to Get Started?') {
      setText('We move!')
    } else {
      setText('Hi Dear!')
    }
  }
  return (
    <>
      <h2>{text}</h2>
      <button type='button' className='btn' onClick={handleClick}>
        Change Message
      </button>
    </>
  )
}
