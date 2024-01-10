import { MyResponsiveSankey } from '@/components/myResponsiveSankey/MyResponsiveSankey'
import Link from 'next/link'

export default function HomePage() {

  return (
    <main className="flex flex-col items-center p-24">
      <span className='text-5xl'>
        SonarQUBE Analyzer
      </span>

      <Link href={'/about'}>More Details</Link>

      <h1 className='text-2xl pt-6'>SonarQUBE Findings by Category/Squad</h1>

      <div className='text-center h-lvh w-full'>
        <MyResponsiveSankey />
      </div>


    </main>
  )
}
