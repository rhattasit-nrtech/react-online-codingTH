import React from 'react'

const Logo = () => {
    const logoImage = {
        url: './logo192.png'
    }

  return (
    <>
        {/* <img src="../logo192.png" width="100" alt='logo' /> */}
        <img src={logoImage.url} alt='logo' width="100" />
    </>
  )
}

export default Logo