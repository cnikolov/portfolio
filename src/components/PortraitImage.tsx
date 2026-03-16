'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import portraitImage from '@/images/photos/christian-young-bw.jpg'

export function PortraitImage() {
  return (
    <motion.div
      className="cursor-pointer"
      style={{ touchAction: 'pan-y' }}
      initial={{ rotate: 3 }}
      whileHover={{ rotate: -3, scale: 1.02 }}
      whileTap={{ rotate: -5, scale: 0.98 }}
      transition={{
        type: 'spring',
        stiffness: 300,
        damping: 20,
      }}
    >
      <Image
        src={portraitImage}
        alt="Christian Nikolov"
        sizes="(min-width: 1024px) 32rem, 20rem"
        className="aspect-square rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
      />
    </motion.div>
  )
}
