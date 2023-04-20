import Image from 'next/image'
import { Inter } from 'next/font/google'
import Form from '@/components/Form'
import bg from '../images/bg.jpg'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className="flex min-h-screen min-w-screen flex-1 flex-col items-center justify-center p-10" style={{background: 'black', backgroundImage: `url(https://djaccw3ms0b81.cloudfront.net/zbytecnosti/bckg.jpg)`, backgroundPosition: 'top center', backgroundSize: 'cover' }}>
      <div className="z-10 w-full justify-self-end justify-center font-mono lg:flex" >

       <div className='justify-self-end flex-1' style={{maxWidth: '640px'}}><Form /></div>

      </div>



    </main>
  )
}
