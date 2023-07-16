import React from 'react'
import '../stylesheets/prep.css'
import '../stylesheets/AboutUsHeader.css'

const AboutUsHeader = () => {
  return (
    <div id='aboutUsHeaderContainer'>
        <div id='aboutUsTextContainer'>
          <div className='title-contabt'>
            <div id='one' className='dis-in-blk'><p className='aboutUsHeaderTitle'>THIS</p><p className='dot one'>. </p></div>
            <div id='two' className='dis-in-blk'><p className='aboutUsHeaderTitle'>IS</p><p className='dot one'>. </p></div>
            <div id='three' className='dis-in-blk'><p className='aboutUsHeaderTitle'>US</p><p className='dot one'>. </p></div>
          </div>
            <p className='aboutUsHeaderDesc'>Suprano Exhibits</p>
        </div>
    </div>
  )
}

export default AboutUsHeader