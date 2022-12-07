import React from 'react'
import { Helmet } from "react-helmet";

const PixelIt = () => {
    return (
        <>
            <Helmet>
                <style>{"body { background-color: #046e97; }"}</style>
            </Helmet>
            <div>
            <iframe style={{width:'100%',marginTop:'3%'}} src="https://docs.google.com/forms/d/e/1FAIpQLScwjE3fFaD8Xz9VtYf-7A6D-pll4SmhWBXnmXWMatZfI1KFnA/viewform?embedded=true" width="640" height="1477" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
            </div>
        </>
    )
}

export default PixelIt
