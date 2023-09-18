import React from 'react'
import Footer from "./footer"
import Image from "next/image";
const Products = () => {
  return (
    <>
<div>
      <h1 style={{ color: 'Black', textAlign:'center', marginBottom:'1.6rem', fontSize:'2.5rem',fontWeight:'bold',fontFamily:'mulish'}} > Products </h1>
    
<footer class="flex flex-col items-center bg-neutral-200 text-center text-white dark:bg-neutral-600 dark:text-neutral-200">
  <div class="container p-6">
    <div class="grid gap-4 md:grid-cols-3 lg:grid-cols-6">
      <div class="mb-6 lg:mb-0">
        <Image
          src="/AP1.jpg"
          class="w-full rounded-md shadow-lg"  width={500} height={500} />
      </div>
      <div class="mb-6 lg:mb-0">
        <Image
          src="/AP2.jpg"
          class="w-full rounded-md shadow-lg"  width={500}   height={500} />
      </div>
      <div class="mb-6 lg:mb-0">
        <Image
          src="/AP2.jpg"
          class="w-full rounded-md shadow-lg"  width={500}  height={500} />
      </div>
      <div class="mb-6 lg:mb-0">
        <Image
          src="/AP1.jpg"
          class="w-full rounded-md shadow-lg"   width={500}  height={500} />
      </div>
      <div class="mb-6 lg:mb-0">
        <Image
          src="/AP1.jpg"
          class="w-full rounded-md shadow-lg"   width={500}  height={500} />
      </div>
      <div class="mb-6 lg:mb-0">
        <Image
          src="/AP1.jpg"
          class="w-full rounded-md shadow-lg"   width={500}  height={500} />
      </div>
    </div>
  </div>
  </footer>
    </div>
    <Footer />
    </>
  );
};export default Products
