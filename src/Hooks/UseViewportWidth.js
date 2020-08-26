import {useState, useEffect} from 'react'

const UseViewportWidth = () => {
  const [viewportWidth, setViewportWidth] = useState(window.innerWidth)

  useEffect(() => {
    const handleWindowResizing = () => setViewportWidth(window.innerWidth)
    window.addEventListener("resize", handleWindowResizing)
    return () => window.removeEventListener("resize", handleWindowResizing)
  }, [])

  return {viewportWidth}
}

export default UseViewportWidth
