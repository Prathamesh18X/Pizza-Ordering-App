import React from 'react'

export default function Success({success}) {
  
  return (
    <div><div class="alert alert-success p-2 text-center" role="alert">
    {success} !
  </div></div>
  )
}
