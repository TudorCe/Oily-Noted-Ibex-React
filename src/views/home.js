import React from 'react'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Oily Noted Ibex</title>
        <meta property="og:title" content="Oily Noted Ibex" />
      </Helmet>
      <h1>Heading</h1>
      <span>Text</span>
      <h1>Heading</h1>
      <span>Text</span>
    </div>
  )
}

export default Home
