import Image from 'next/image'
import { Inter } from 'next/font/google'
import HomeComp from '@/src/components/HomeComp'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <HomeComp />
    </>
  )
}
