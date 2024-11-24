import React from 'react'
import Image from 'next/image'
import AboutMarkdown from '@/components/AboutMarkdown';
import GitHubProfileViewer from '@/components/GitHubProfileViewer';
import Link from 'next/link';
import { XCircleIcon } from 'lucide-react';
import { SanityLive } from '@/sanity/lib/live';

export default async function page({searchParams}: {
  searchParams: Promise<{query?: string}>
}) {
  const query = (await searchParams).query;

  return (
    <div className="flex flex-col">
      { query ? (<>
        <span className='flex md:w-1/4 justify-between'>
          <p>Showing results for &quot;{query}&quot;</p>
          <Link href='/'><XCircleIcon /></Link>
        </span>
      </>) : (

        <section className='container flex-col animate-in slide-in-from-left-full rounded-lg shadow-lg border p-3'>
          <h1 className='text-3xl'>About Me</h1>
          <div className='flex flex-col md:flex-row'>
            <div className='md:w-1/4 my-auto'>
              <Image
                src='/me.jpg'
                alt="profile-picture"
                width={1080}
                height={1920}
                className='rounded-full hover:animate-pulse mx-auto my-auto border text-center max-h-[250px] max-w-[250px] md:max-w-[150px] md:max-h-[150px] profile-picture'
              />
            </div>
            <div className='w-full ml-6'>
              <AboutMarkdown />
            </div>
          </div>
        </section>
      ) }
      
      <section className='container flex-col animate-in slide-in-from-right-full'>
        <GitHubProfileViewer />
      </section>

      <section className='container flex-col animate-in slide-in-from-left-full rounded-lg shadow-lg border p-3'>
        <h1 className='text-3xl'>Work Experience</h1>
        <p>Currently nobody has had the luxury of hiring me. I can ensure you that they are missing out!</p>
        <div className="flex flex-col flex-wrap col-span-3 md:flex-row">

        </div>
      </section>

      <SanityLive />
    </div>
  )
}