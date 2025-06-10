import React from 'react'
import TopFooter from '../../components/TopFooter'
import BottomFooter from '../../components/BottomFooter'

function Footer({headerLogo}) {
  return (
    <>
      <TopFooter headerLogo={headerLogo} />
      <BottomFooter/>
    </>
  )
}

export default Footer
