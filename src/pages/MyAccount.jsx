import React from 'react'
import { useSelector } from 'react-redux'

function MyAccount() {
    const {user} = useSelector((state)=>state.Auth)
  return (
    <section className='main-container w-full h-screen'>
        <div className='font-semibold text-green-dark text-2xl'>Hello , {user?.user?.name} </div>
        <div className='font-semibold text-secondary'>Email : {user?.user?.email}</div>
    </section>
  )
}

export default MyAccount