import { Inter as FontSans } from 'next/font/google'
import '@/styles/globals.css'
import { cn } from '@/lib/utils'
import { ThemeProvider } from '@/components/theme-provider'
import { ReactNode } from 'react'

const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans',
})

export default function RootLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <html lang='en' data-theme='sunset'>
      <body
        className={cn(
          'min-h-screen bg-background font-sans antialiased',
          fontSans.variable
        )}
      >
        <ThemeProvider
          attribute='class'
          defaultTheme='dark'
          enableSystem
          disableTransitionOnChange
        >
          <main className='p-6 m-w-screen-xl m-auto'>{children}</main>
          <footer className='p-4 bg-transparent text-base-content w-full text-center'>
            <aside>
              <p>
                Copyright © {new Date(Date.now()).getFullYear()} - All right
                reserved by JitenshaSW.com
              </p>
            </aside>
          </footer>
        </ThemeProvider>
      </body>
    </html>
  )
}
