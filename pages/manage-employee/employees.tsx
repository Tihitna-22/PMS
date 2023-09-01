import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import ExampleWithProviders from '../../component/manage-employee/employee-list'

const  employees = (): any => {
  return (
    <h1 className="text-3xl font-bold underline">
      <ExampleWithProviders />
    </h1>
  )
}

export default employees
