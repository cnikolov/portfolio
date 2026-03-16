'use client'

import Image, { type StaticImageData } from 'next/image'
import { motion } from 'framer-motion'
import clsx from 'clsx'

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
}

const photoVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: { opacity: 1, y: 0, scale: 1 },
}

export function PhotoCarousel({
  photos,
}: {
  photos: { src: StaticImageData; alt: string; rotation: string }[]
}) {
  return (
    <div className="mt-16 sm:mt-20">
      <motion.div
        className="-my-4 flex justify-center gap-5 overflow-hidden py-4 sm:gap-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '0px 0px -40px' }}
      >
        {photos.map((photo) => (
          <motion.div
            key={photo.alt}
            className={clsx(
              'relative w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 sm:w-72 sm:rounded-2xl dark:bg-zinc-800',
              photo.rotation,
            )}
            variants={photoVariants}
            transition={{
              type: 'spring',
              stiffness: 300,
              damping: 25,
            }}
            whileHover={{
              scale: 1.05,
              rotate: 0,
              transition: { type: 'spring', stiffness: 300, damping: 20 },
            }}
            whileTap={{
              scale: 0.97,
              rotate: 0,
              transition: { type: 'spring', stiffness: 400, damping: 15 },
            }}
          >
            <div className="aspect-9/10">
              <Image
                src={photo.src}
                alt={photo.alt}
                sizes="(min-width: 640px) 18rem, 11rem"
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}
