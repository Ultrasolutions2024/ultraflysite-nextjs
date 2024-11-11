import React from 'react'
import dynamic from 'next/dynamic'
const Web=dynamic(()=>import('./Web'),{
  ssr:false
})
function page() {
  return (
   <Web/>
  )
}

export default page