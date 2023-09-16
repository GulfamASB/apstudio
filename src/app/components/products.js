import React from 'react'
import Footer from "./footer"
const products = () => {
  return (
<div>
      <h1 style={{ color: 'Black', textAlign:'center', marginBottom:'1.6rem', fontSize:'2.5rem',fontWeight:'bold',fontFamily:'mulish'}} > Products </h1>
    
<footer class="flex flex-col items-center bg-neutral-200 text-center text-white dark:bg-neutral-600 dark:text-neutral-200">
  <div class="container p-6">
    <div class="grid gap-4 md:grid-cols-3 lg:grid-cols-6">
      <div class="mb-6 lg:mb-0">
        <img
          src="https://tecdn.b-cdn.net/img/new/fluid/city/113.webp"
          class="w-full rounded-md shadow-lg"  width={500} />
      </div>
      <div class="mb-6 lg:mb-0">
        <img
          src="https://tecdn.b-cdn.net/img/new/fluid/city/111.webp"
          class="w-full rounded-md shadow-lg"  width={500} />
      </div>
      <div class="mb-6 lg:mb-0">
        <img
          src="https://tecdn.b-cdn.net/img/new/fluid/city/112.webp"
          class="w-full rounded-md shadow-lg"  width={500} />
      </div>
      <div class="mb-6 lg:mb-0">
        <img
          src="https://tecdn.b-cdn.net/img/new/fluid/city/114.webp"
          class="w-full rounded-md shadow-lg"   width={500}/>
      </div>
      <div class="mb-6 lg:mb-0">
        <img
          src="https://tecdn.b-cdn.net/img/new/fluid/city/115.webp"
          class="w-full rounded-md shadow-lg"   width={500}/>
      </div>
      <div class="mb-6 lg:mb-0">
        <img
          src="https://tecdn.b-cdn.net/img/new/fluid/city/116.webp"
          class="w-full rounded-md shadow-lg"   width={500}/>
      </div>
    </div>
  </div>
  </footer>
    <Footer/>
    </div>
  )
};export default products
