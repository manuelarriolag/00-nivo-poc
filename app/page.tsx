import { MyResponsiveSankey } from '@/components/myResponsiveSankey/MyResponsiveSankey'
import Link from 'next/link'

export default function HomePage() {

  return (
    <main className="flex flex-col items-center p-24">
      <span className='text-5xl'>
        Sonar Analizer
      </span>

      <Link href={'/about'}>About Page</Link>

      <h1 className='text-2xl pt-6'>Distribución de los hallazgos en SonarQube por Squad</h1>

      <div className='container text-center h-96 w-full'>
        <MyResponsiveSankey />
      </div>


    </main>
  )
}
