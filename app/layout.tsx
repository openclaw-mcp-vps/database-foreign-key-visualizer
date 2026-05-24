import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'DB Schema Visualizer — Visual Database Relationship Mapper',
  description: 'Connect to any database, auto-generate interactive relationship diagrams with foreign key flows. Built for backend developers and database admins.'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="ef08f1c8-60d4-4054-aba3-0cff9b65a8cf"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  )
}
