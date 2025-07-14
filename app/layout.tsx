import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Bishal kr Haldar | Video Editor',
  description: 'Professional video editor specializing in cinematic storytelling, color grading, and motion graphics. Transforming raw footage into compelling visual narratives.',
  generator: 'joy',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
