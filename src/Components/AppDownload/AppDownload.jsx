import React from 'react';
import "./AppDownload.css";
import appStore from "../../../public/img/appstore.png"
import playStore from "../../../public/img/playstore.png"

const AppDownload = () => {
  return (
    <div className='app-download' id='app-download'>
        <p>For Better Experience Download <br /> <span>Beauty Glow</span> App</p>
        <div className="app-download-platforms">
            <a href="https://play.google.com/store" target="_blank" rel="noopener noreferrer" className='aForPlaystore'>
                <img src={playStore} alt="Get it on Google Play" className='playstore'/>
            </a>
            <a href="https://www.apple.com/app-store/" target="_blank" rel="noopener noreferrer" className='aForAppStore'>
                <img src={appStore} alt="Download on the App Store"  className='appstore'/>
            </a>
        </div>
    </div>
  )
}

export default AppDownload;

