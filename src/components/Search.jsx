import React from 'react'
import axios from 'axios'
import { useQuery } from '@tanstack/react-query'

const Search = () => {


    const fetchSearch = () => {

    }

    const {data: searchedMovie} = useQuery({
        queryKey: ['movies'], // labels our query so react query can tell if we made the api call/have the data or not
        queryFn: fetchSearch,//function that makes API call
        enabled: false // true = run query automatically (default), false do NOT run automatically
    })
  return (
    <div>Search</div>
  )
}

export default Search