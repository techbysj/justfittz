import React from 'react'
import { Nav } from '../components'
import { Subscribe , Footer } from '../sections'


export default function Products() {
  return (
    <main className="relative">
    <Nav />
   
    <section className="padding-x sm:py-32 py-16 w-full">
      <Subscribe />
    </section>
    <section className=" bg-black padding-x padding-t pb-8">
      <Footer />
    </section>
  </main>
  )
}
