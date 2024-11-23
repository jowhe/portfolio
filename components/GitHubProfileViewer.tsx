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
        <div className="flex flex-col md:flex-row flex-wrap gap-6 justify-around">
        {repos.map((repo) => (
          <Card key={repo.id} className="w-auto md:w-1/3 shadow-md">
            <CardHeader>
              <CardTitle>{repo.full_name}</CardTitle>
            </CardHeader>
              <CardContent>
                <CardDescription>{repo.description}</CardDescription>
              </CardContent>
              <CardFooter className=''>
                <Link
                  href={repo.html_url}
                  className="mt-auto w-full"
                  target='_blank'>
                <Button className="w-full">View on <Image alt='git-logo' src="https://firebasestorage.googleapis.com/v0/b/icon-finder-91d39.appspot.com/o/icons%2Fbrand%2Fgithub.svg?alt=media&token=1f7bb81a-61de-4c15-ba9a-62b28fb065fe" width={24} height={24} /></Button>
                </Link>
              </CardFooter>
          </Card>
        ))}
      </div>
      )}

    </div>
    
  )
}

export default GitHubProfileViewer