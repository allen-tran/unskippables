import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import SignIn from '../components/SignIn/SignIn'

export default function UnauthedView() {
  return (
      <div className='fragment'>
          <Navbar/>
          <SignIn/>
      </div>
  )
}
