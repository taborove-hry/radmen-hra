import Image from 'next/image'
import { Inter } from 'next/font/google'
import Form from '@/components/Form'
import { Country, Germany, getCountryBySlug } from '@/utils/validate-password'
import { GetStaticPaths } from 'next'

const inter = Inter({ subsets: ['latin'] })

export default function CountryPage({ country }: { country: Country }) {
  return (
    <main className="flex min-h-screen flex-col items-center  p-24">
      <div className="z-10 w-full max-w-5xl items-center font-mono text-sm lg:flex">
       <h1>{country.country}</h1>

      </div>



    </main>
  )
}

export const getStaticPaths: GetStaticPaths<{ slug: string }> = async () => {

  return {
      paths: [], //indicates that no page needs be created at build time
      fallback: 'blocking' //indicates the type of fallback
  }
}

export async function getStaticProps({ params }: { params: { slug: string } }) {
  const country = await getCountryBySlug(params.slug)

  if (!country) {
    return {
      notFound: true
    }
  }

  return {
    props: {
      country
    },
  }
}
