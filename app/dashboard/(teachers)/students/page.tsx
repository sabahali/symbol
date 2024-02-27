"use client"
import { Table } from 'flowbite-react';
import getStudents from '@/actions/getStudents'
import { useEffect, useState } from 'react'
import useSWR from 'swr'
interface formModel {
  email:String,
  address:String,
  firstname:String,
  lastname:String
}
function Students() {
  const { data, error, isLoading } = useSWR('/getUsers', getStudents)
  const [students, setData] = useState<formModel[]>()
  useEffect(() => {
    if (data) {
      console.log(JSON.parse(data))
        setData(JSON.parse(data))
    }
  }, [data])
  return (
    <div className='w-full h-full flex justify-center items-start mt-5 '>
      <Table>
        <Table.Head>
          <Table.HeadCell>Email</Table.HeadCell>
          <Table.HeadCell>First Name</Table.HeadCell>
          <Table.HeadCell>Last Name</Table.HeadCell>
          <Table.HeadCell>Address</Table.HeadCell>
          {/* <Table.HeadCell>
            <span className="sr-only">Edit</span>
          </Table.HeadCell> */}
        </Table.Head>
        <Table.Body className="divide-y">
          {students?.map((item, index) => (

            <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800" key={index}>
              <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                {item.email}
              </Table.Cell>
              <Table.Cell>{item.firstname}</Table.Cell>
              <Table.Cell>{item.lastname}</Table.Cell>
              <Table.Cell>{item.address}</Table.Cell>
              {/* <Table.Cell>
                  <a href="#" className="font-medium text-cyan-600 hover:underline dark:text-cyan-500">
                    Edit
                  </a>
                </Table.Cell> */}
            </Table.Row>

          ))}

        </Table.Body>
      </Table>
    </div>
  )
}

export default Students