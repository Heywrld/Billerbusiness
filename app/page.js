"use client"

import About from '@/app/about/page'
import Header from '@/components/Header'

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Image from 'next/image'
import { useRouter } from 'next/navigation'

export default function Home() {
  const router = useRouter()

  return (
         <>
         <Header/>
         </>

         
           
          

  )
}
