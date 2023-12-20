import { useState } from 'react'

export default function New({ text }) {
  const [visibleText, setVisibleText] = useState(text)

  const changeToWorld = () => setVisibleText("world");

  return (
    <span onClick={changeToWorld}>{visibleText}</span>
  )
}
