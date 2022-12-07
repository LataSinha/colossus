import React from 'react'
import { Helmet } from "react-helmet";

const QuizzieBuzzie = () => {
  return (
    <div>
        <Helmet>
           <style>{"body { background-color: #046e97; }"}</style>
       </Helmet>
       <iframe style={{width:'100%'}} src="https://docs.google.com/forms/d/e/1FAIpQLScwa2EbX_uG5mUMCFajUZ7R7qbFX7ehejj0d93Jr5g0wsBOiA/viewform?embedded=true" width="700" height="3181" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
    </div>
  )
}

export default QuizzieBuzzie
