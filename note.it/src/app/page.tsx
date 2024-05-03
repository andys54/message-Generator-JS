/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image'
import Link from 'next/link';
import { buttonVariants } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

import { Pattaya } from 'next/font/google'
const pattaya = Pattaya({ subsets: ['latin'], weight: "400" })

export default function Home() {
  return (
    <div className='w-full flex flex-col'>
      <div className='flex flex-col justify-center items-center mt-20'>
        <div className='w-full text-[#343a40] text-5xl font-semibold text-center mb:text-3xl mt-10 px-5'>Your Notes. Cards. And Tasks.<br/> In one place.<span className={`text-[#3a86ff] ${pattaya.className}`}> note.it</span></div>
        <p className='w-25% mt-5 flex text-center text-[#6c757d]'>note.it allows you to elevate your learning experience by managing and optimizing through repitition. <br/>Don't believe us? Try it out for free.</p>
      </div>
      <div className='flex items-center justify-center mt-3'>
        <Link className={buttonVariants({ variant: "default" })} href="/">Get started<ArrowRight className='ml-1.5' /> </Link>
      </div>
    </div>
  )
}
