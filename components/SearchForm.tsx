import React from 'react'
import Form from 'next/form'
import { Input } from './ui/input'

const SearchForm = () => {
  return (
    <Form action="/" className='w-full mr-2 md:px-2'>
      <Input
        id="search-input"
        placeholder='Search'
        defaultValue={''}
        name='query'
        className='w-full'
      ></Input>
    </Form>
  )
}

export default SearchForm