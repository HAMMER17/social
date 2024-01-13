import { ClerkProvider } from '@clerk/nextjs'
import { Inter } from 'next/font/google'
import '../globals.css'
import LeftSideBar from '@/components/layout/LeftSideBar'
import MainContainer from '@/components/layout/MainContainer'
import RightSideBar from '@/components/layout/RightSideBar'
import BottomBar from '@/components/layout/BottomBar'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Vibe Zone',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>
          <main className='flex flex-row'>
            <LeftSideBar />
            <MainContainer>
              {children}
            </MainContainer>
            <RightSideBar />
          </main>
          <BottomBar />
        </body>
      </html>
    </ClerkProvider>
  )
}
