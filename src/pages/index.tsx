import Layout from '@/components/layout'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <Layout>
      <h1 className='text-red-500 text-xl'>Hello</h1>
    </Layout>
  )
}
