import React from 'react'
import dynamic from 'next/dynamic'
const More=dynamic(()=>import('./More'),{
  ssr:false
})
function page() {
  return (
    <More/>
  )
}

export default page