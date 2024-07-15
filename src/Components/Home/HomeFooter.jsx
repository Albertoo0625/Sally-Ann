import React from 'react'

const HomeFooter = () => {
  return (
    <div className='Container'>
    <div className='Context'> 
    <div className='column'>
      <h2 className='title'>We are SallyAnn</h2>
      <p>SallyAnn Litein fosters an environment that encourages our students to be the best they can be. We hold our students to a high standard and invest in their academic journey at SallyAnn Litein. Every student houses within themselves their individual dreams, ambitions, and aspirations, and it is our job to help them achieve them.</p>
      <p>SallyAnn Litein focuses on molding each child into well-rounded global citizens. We nurture change makers who will leave a positive mark on this world. Our student-focused, student-driven approach helps our student body shape their SallyAnn Litein experience by giving them the ability to lead in school activities, events, and agendas.</p>
      <p>SallyAnn Litein’s exceptionally unique campuses offer exemplary facilities, dedicated staff, and an engaging, happy, and helpful family environment. Begin your child’s SallyAnn Litein journey today.</p>
     <p>#WeAreSallyAnn #WeAreFamily</p>
     <a href="#">Why SallyAnn?</a>
     </div>
    </div>
    
      <div  className='VideoTour'>
       <div className='gradient'></div>
       <video style={{maxHeight:"360px",maxWidth:'640px'}}className='videoasset' width="auto" height="auto" controls>
        <source src='assets/video/video.mp4' type="video/mp4"/>
        Your browser does not support the video tag.
      </video>
      </div>
    
    </div>
  )
}

export default HomeFooter