import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Tripsee - Your Travel Adventure',
  description: 'Discover amazing destinations and create unforgettable memories with our curated travel experiences',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  )
} 