import React from 'react'
import dynamic from 'next/dynamic'
const PrivacyPolicy=dynamic(()=>import('./PrivacyPolicy'),{
  ssr:false
})
function page() {
  return (
    <PrivacyPolicy/>
  )
}

export default page