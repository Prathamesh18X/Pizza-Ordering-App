import React from 'react'

export default function Error({error}) {
  return (
    <div class="alert alert-danger text-center p-2" role="alert">
    {error} !
    </div>
  )
}
