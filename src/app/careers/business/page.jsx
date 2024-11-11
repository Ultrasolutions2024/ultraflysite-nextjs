import React from 'react'

import dynamic from 'next/dynamic'
const Bd=dynamic(()=>import('./Bd'),{
  ssr:false
})
function page() {
  return (
    <Bd/>
  )
}

export default page