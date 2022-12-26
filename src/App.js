import React, { Suspense } from 'react'
//
import Router from './router/Router'
// bootstrap
import './assets/scss/bootstrap/bootstrap.scss'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './assets/scss/webx/webx.scss'

const App = () => {
  return (
    <Suspense fallback={null}>
      <Router />
    </Suspense>
  )
}

export default App