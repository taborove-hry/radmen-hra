import Image from 'next/image'
import { Inter } from 'next/font/google'
import Form from '@/components/Form'
import { Country, Germany, getCountryBySlug } from '@/utils/validate-password'
import { GetStaticPaths } from 'next'


const inter = Inter({ subsets: ['latin'] })

export default function CountryPage({ country }: { country: Country }) {
  return (
    <main className="min-h-screen " style={{backgroundImage: `url(${country.flag || ''})`, backgroundSize: 'cover', backgroundAttachment: 'fixed', backgroundPosition: 'center top'}}>
      <div className='flex flex-1 px-6  min-h-screen flex-col items-center py-14' style={{ backgroundImage: 'url(https://djaccw3ms0b81.cloudfront.net/zbytecnosti/backggrad2.png)', backgroundRepeat: 'repeat-y', backgroundSize: '120%', backgroundPosition: 'top center'}}>
      <div className="z-10 w-full flex-col max-w-5xl items-center font-mono text-sm lg:flex">
      <div>
        <iframe width="700" height="370" style={{maxWidth: '100%'}} src="https://www.youtube.com/embed/Gf0DpiisPbw" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
      </div>
       <h1 className='my-6 text-lg font-black'>{country.country}</h1>
       <article className='article' dangerouslySetInnerHTML={{ __html: country.html || ''}} />
       {country.images && country.images.map((image) => <Image key={image} width={600} height={500} alt={country.country} src={image}/>)}
      </div></div>

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
