import React from 'react'
import Logo from './Logo'

const Header = () => {
    let companyName = 'Google Inc'
    const companyAddress = <p>Hatyai, Songkhla</p>
    let num = 10
    const showMessage = () => {
        return companyName + '.com'
    }

    const isLogin = true


  return (
    <>
        <h1>Company Name: <em>{companyName}</em></h1>
        {companyAddress}
        {num + 100}
        <br />
        {showMessage()}
        <br />
        {isLogin ? <Logo /> : <p>Goodbye !</p>}
        <hr />
    </>
  )
}

export default Header