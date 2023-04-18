import Image from 'next/image'
import { Inter } from 'next/font/google'
import Form from '@/components/Form'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center  p-24">
      <div className="z-10 w-full max-w-5xl items-center font-mono text-sm lg:flex">
       <h1></h1>

       <Form />
      </div>



    </main>
  )
}
