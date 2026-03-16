'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

function ShareIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 20 20" fill="currentColor" {...props}>
      <path d="M13 4.5a2.5 2.5 0 1 1 .702 1.737L6.97 9.604a2.5 2.5 0 0 1 0 .792l6.733 3.367a2.5 2.5 0 1 1-.671 1.341l-6.733-3.367a2.5 2.5 0 1 1 0-3.474l6.733-3.367A2.5 2.5 0 0 1 13 4.5Z" />
    </svg>
  )
}

function PrintIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 20 20" fill="currentColor" {...props}>
      <path
        fillRule="evenodd"
        d="M5 2.75C5 1.784 5.784 1 6.75 1h6.5c.966 0 1.75.784 1.75 1.75v3.552c.377.06.734.158 1.064.294a3.75 3.75 0 0 1 2.186 2.186c.192.47.25.96.25 1.468v3a.75.75 0 0 1-.75.75H16v1.25A2.75 2.75 0 0 1 13.25 17h-6.5A2.75 2.75 0 0 1 4 14.25V14H2.25a.75.75 0 0 1-.75-.75v-3c0-.508.058-.998.25-1.468a3.75 3.75 0 0 1 2.186-2.186c.33-.136.687-.234 1.064-.294V2.75ZM6.5 6h7V2.75a.25.25 0 0 0-.25-.25h-6.5a.25.25 0 0 0-.25.25V6Zm7 5.5h-7A1.25 1.25 0 0 0 5.25 12.75v1.5c0 .69.56 1.25 1.25 1.25h6.5c.69 0 1.25-.56 1.25-1.25v-1.5A1.25 1.25 0 0 0 13.5 11.5Z"
        clipRule="evenodd"
      />
    </svg>
  )
}

function LinkIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 20 20" fill="currentColor" {...props}>
      <path d="M12.232 4.232a2.5 2.5 0 0 1 3.536 3.536l-1.225 1.224a.75.75 0 0 0 1.061 1.06l1.224-1.224a4 4 0 0 0-5.656-5.656l-3 3a4 4 0 0 0 .225 5.865.75.75 0 0 0 .977-1.138 2.5 2.5 0 0 1-.142-3.667l3-3Z" />
      <path d="M11.603 7.963a.75.75 0 0 0-.977 1.138 2.5 2.5 0 0 1 .142 3.667l-3 3a2.5 2.5 0 0 1-3.536-3.536l1.225-1.224a.75.75 0 0 0-1.061-1.06l-1.224 1.224a4 4 0 1 0 5.656 5.656l3-3a4 4 0 0 0-.225-5.865Z" />
    </svg>
  )
}

export function ShareBanner() {
  const [copied, setCopied] = useState(false)
  const [dismissed, setDismissed] = useState(false)

  function handleCopyLink() {
    navigator.clipboard.writeText(window.location.href).then(() => {
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    })
  }

  return (
    <AnimatePresence>
      {!dismissed && (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20, transition: { duration: 0.2 } }}
      transition={{ type: 'spring', stiffness: 300, damping: 25, delay: 0.3 }}
      className="relative mb-10 rounded-2xl border border-zinc-100 bg-zinc-50 p-6 dark:border-zinc-700/40 dark:bg-zinc-800/50 print:hidden"
    >
      <button
        onClick={() => setDismissed(true)}
        className="absolute top-3 right-3 text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-300"
        aria-label="Dismiss"
      >
        <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
          <path d="M6.28 5.22a.75.75 0 0 0-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 1 0 1.06 1.06L10 11.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L11.06 10l3.72-3.72a.75.75 0 0 0-1.06-1.06L10 8.94 6.28 5.22Z" />
        </svg>
      </button>
      <div className="flex items-start gap-4">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-teal-500/10">
          <ShareIcon className="h-5 w-5 text-teal-600 dark:text-teal-400" />
        </div>
        <div className="min-w-0 flex-1">
          <p className="text-sm font-semibold text-zinc-800 dark:text-zinc-100">
            Know someone who might be interested?
          </p>
          <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
            Share this page or save it as a PDF to send along.
          </p>
          <div className="mt-4 flex flex-wrap gap-3">
            <button
              onClick={() => window.print()}
              className="inline-flex items-center gap-2 rounded-lg bg-teal-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-teal-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-600"
            >
              <PrintIcon className="h-4 w-4" />
              Save as PDF
            </button>
            <button
              onClick={handleCopyLink}
              className="inline-flex items-center gap-2 rounded-lg border border-zinc-200 bg-white px-4 py-2 text-sm font-semibold text-zinc-700 shadow-sm hover:bg-zinc-50 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-300 dark:hover:bg-zinc-700"
            >
              <LinkIcon className="h-4 w-4" />
              {copied ? 'Copied!' : 'Copy link'}
            </button>
          </div>
        </div>
      </div>
    </motion.div>
      )}
    </AnimatePresence>
  )
}
