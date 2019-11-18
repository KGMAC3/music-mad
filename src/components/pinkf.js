import React, { Component } from "react"
import { Link } from "react-router-dom"
import Nav from "./nav"
import Pfloyd from "../images/pink_floyd_pic.jpg"

class PinkFloyd extends Component {
  render() {
    return (
      <>
        <h1>Pink Floyd wow</h1>
        <Nav />

        <section className='p-floyd-container'>
          <img src={Pfloyd}></img>
        </section>
      </>
    )
  }
}

export default PinkFloyd
