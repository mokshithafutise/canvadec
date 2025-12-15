import React from 'react'
import User from './User'
import Title from './Title'
import img from "../assets/images/dk.png";

const Team = () => {
  return (
    <div className='px-20 flex flex-col gap-5'>
      {/* header  */}
        <Title title="Our Team"/>
        <div className='flex gap-5 items-center place-self-center'>
          <User name={"Dushyant Kumar"} desc={"about"} img={img}/>
          <User name={"Dushyant Kumar"} desc={"about"} img={img}/>
        </div>
    </div>
  )
}

export default Team