import React from 'react'
import { Helmet } from "react-helmet";

const KaraokeRegistration = () => {
    return (
        <>
            <Helmet>
                <style>{"body { background-color: #046e97; }"}</style>
            </Helmet>
            <div>
                <iframe style={{width:'100%',marginTop:'3%',height:'800px'}} src='https://docs.google.com/forms/d/e/1FAIpQLSefIlcxi2Bhg2RSO8qdygpfHqsOUWZmX97IYEy0uEHy-zCQBQ/viewform?embedded=true'></iframe>
            </div>
        </>
    )
}

export default KaraokeRegistration
