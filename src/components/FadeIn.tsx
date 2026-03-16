'use client'

import { createContext, useContext } from 'react'
import { motion, useReducedMotion } from 'framer-motion'

const FadeInStaggerContext = createContext(false)

const viewport = { once: true, margin: '0px 0px -80px' }

export function FadeIn({
  children,
  className,
  ...props
}: React.ComponentPropsWithoutRef<typeof motion.div>) {
  let shouldReduceMotion = useReducedMotion()
  let isInStaggerGroup = useContext(FadeInStaggerContext)

  return (
    <motion.div
      className={className}
      variants={{
        hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 16 },
        visible: { opacity: 1, y: 0 },
      }}
      transition={{ duration: 0.5, ease: [0.21, 0.47, 0.32, 0.98] }}
      {...(isInStaggerGroup
        ? {}
        : {
            initial: 'hidden',
            whileInView: 'visible',
            viewport,
          })}
      {...props}
    >
      {children}
    </motion.div>
  )
}

export function FadeInStagger({
  children,
  className,
  faster = false,
  ...props
}: React.ComponentPropsWithoutRef<typeof motion.div> & { faster?: boolean }) {
  return (
    <FadeInStaggerContext.Provider value={true}>
      <motion.div
        className={className}
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
        transition={{ staggerChildren: faster ? 0.08 : 0.15 }}
        {...props}
      >
        {children}
      </motion.div>
    </FadeInStaggerContext.Provider>
  )
}
