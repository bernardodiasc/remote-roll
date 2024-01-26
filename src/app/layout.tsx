'use client'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { useState } from 'react'

import { NotionDataBaseProvider } from '@hooks/useNotionDataBaseContext'

import type { ReactNode } from 'react'

// import './globals.css'

export default function RootLayout ({
  children,
}: {
  children: ReactNode
}) {
  const [queryClient] = useState(() => new QueryClient())
  return (
    <QueryClientProvider client={queryClient}>
      <NotionDataBaseProvider>
        <html lang="en">
          <body>
            {children}
          </body>
        </html>
      </NotionDataBaseProvider>
    </QueryClientProvider>
  )
}
