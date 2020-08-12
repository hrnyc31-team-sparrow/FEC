import React from "react"


const ReviewsFeed = ({reviews}) => (
  <div className="reviews">

  <div className='text-style-1'>
<p>{200 }{' '}reviews, sorted by <span className='dropdown'>relevance {' '}<i className="arrow down"></i></span></p>
  </div>

  <div className='review-feed-container'>

         <span className="stars-review-body">
         <span className='fa fa-star checked'></span>
      <span className='fa fa-star checked'></span>
      <span className='fa fa-star checked'></span>
      <span className='fa fa-star checked'></span>
      <span className='fa fa-star'></span>
         </span>
         <span className="user-and-date text-style-2">username and date</span>
         <br/> <br/>
         <span className='review-title text-style-1'>Review Title</span>
           <br/>
           <span className='review-title-balance text-style-2'>Review title balance</span>
           <br/> <br/>
          <span className='review-body text-style-2'>Review body</span>
          <br/> <br/>
          <span className='review-body text-style-2'>Helpful? Yes (number) | Report</span>

  </div>
  </div>

)

export default ReviewsFeed