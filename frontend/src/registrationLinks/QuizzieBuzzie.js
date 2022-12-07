import React from 'react'
import { Helmet } from "react-helmet";

const QuizzieBuzzie = () => {
  return (
    <div>
        <Helmet>
           <style>{"body { background-color: #046e97; }"}</style>
       </Helmet>
      <iframe className='link' src = 'https://docs.google.com/forms/d/e/1FAIpQLSfsrxBB4pymXTXpHOY4VBSAROaF3wWxspSkGbbvgGOfkyjCUw/viewform?embedded=true'  width="640" height="3181" frameborder="0" marginheight="0" marginwidth="0"></iframe>
    </div>
  )
}

export default QuizzieBuzzie
