"use client"

import { Repo } from '@/lib/types';
import { Loader } from 'lucide-react';
import React, {useEffect, useState} from 'react'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';

const GITHUB_API_URL = 'https://api.github.com/users/jowhe/repos';

const GitHubProfileViewer = () => {

  const [repos, setRepos] = useState<Repo[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [isloading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    setIsLoading(true);
    const fetchRepos = async () => {
      try {
        const response = await fetch(GITHUB_API_URL);

        if (!response.ok) {
          throw new Error('Failed to fetch repositories');
        }
        const data: Repo[] = await response.json();
        setRepos(data);
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      } catch (err: any) {
        setError(err.message);
      } finally{
        setIsLoading(false);
      }
    };

    fetchRepos();
  }, []);

  if (error) return <p>Error: {error}</p>;

  return (
    <div>

      {isloading ? (
        <span className='w-full animate-pulse'><Loader className='mx-auto animate-spin' /></span>
      ) : (
        <div className='rounded-lg shadow-lg border p-3 my-3'>
          <h1 className='text-3xl'>GitHub Repos</h1>
          <hr className='w-[200px] mb-3'></hr>
          <div className="grid grid-cols-1 md:grid-cols-3 md:grid-flow-row gap-3">
          {repos.map((repo) => (
            <Card key={repo.id} className="shadow-lg flex flex-col ">
              <CardHeader>
                <CardTitle>{repo.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{repo.description}</CardDescription>
              </CardContent>
              <CardFooter className='mt-auto'>
                <Link
                  href={repo.html_url}
                  className="flex mt-auto w-full"
                  target='_blank'>
                  <Button className="w-full mt-auto">View on <Image alt='git-logo' src="https://firebasestorage.googleapis.com/v0/b/icon-finder-91d39.appspot.com/o/icons%2Fbrand%2Fgithub.svg?alt=media&token=1f7bb81a-61de-4c15-ba9a-62b28fb065fe" width={24} height={24} /></Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
        </div>
      )}

    </div>
    
  )
}

export default GitHubProfileViewer