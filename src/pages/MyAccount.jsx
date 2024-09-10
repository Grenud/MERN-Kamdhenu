import React from 'react'
import { useSelector } from 'react-redux'

function MyAccount() {
    const {user} = useSelector((state)=>state.Auth)
  return (
    <section className='main-container'>
        <div>User Details</div>
    </section>
  )
}

export default MyAccount