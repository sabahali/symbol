"use client"
import getStudents from '@/actions/getStudents'
import { useEffect } from 'react'
import useSWR from 'swr'
function Students() {
    const { data, error, isLoading } = useSWR('/getUsers', getStudents)
    useEffect(()=>{
        console.log(data)
    },[data])
  return (
    <div>Students</div>
  )
}

export default Students