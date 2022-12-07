import React from 'react'
import { Helmet } from "react-helmet";

const QuizzieBuzzie = () => {
  return (
    <div>
        <Helmet>
           <style>{"body { background-color: #046e97; }"}</style>
       </Helmet>
       <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSco6m7Yb4p2f9RAYN7F37R1_OMgvpX1I5YL0YEhfu_f_Q-_ng/viewform?embedded=true" width="640" height="2162" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
    </div>
  )
}

export default QuizzieBuzzie
