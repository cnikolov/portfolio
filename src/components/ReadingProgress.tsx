'use client'

import { useEffect, useState } from 'react'
import { motion, useSpring } from 'framer-motion'

export function ReadingProgress() {
  let [progress, setProgress] = useState(0)
  let scaleX = useSpring(0, { stiffness: 100, damping: 30 })

  useEffect(() => {
    function updateProgress() {
      let scrollTop = window.scrollY
      let docHeight = document.documentElement.scrollHeight - window.innerHeight
      let value = docHeight > 0 ? scrollTop / docHeight : 0
      setProgress(value)
      scaleX.set(value)
    }

    updateProgress()
    window.addEventListener('scroll', updateProgress, { passive: true })
    return () => window.removeEventListener('scroll', updateProgress)
  }, [scaleX])

  if (progress === 0) return null

  return (
    <motion.div
      className="fixed top-0 right-0 left-0 z-50 h-0.5 origin-left bg-teal-500 dark:bg-teal-400"
      style={{ scaleX }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    />
  )
}
