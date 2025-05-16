import React from 'react';
import './ExternalSitePage.css'; // ✅ Make sure CSS file exists and is styled
import { color } from 'framer-motion';
import { text } from 'framer-motion/client';

const ExternalSitePage = () => {
  return (
    <div className="external-container">
      <div>Just for Padding Purposes</div>
      <h2 className="external-title">Share and Talk : AI Avatar</h2>
      <div className="iframe-wrapper">
        <iframe
          src="https://r3f-virtual-girlfriend-frontend-snowy.vercel.app/"
          title="External Website"
          className="embedded-iframe"
          allowFullScreen
        />
      </div>
      <h1 className='external-title'>Talk to AI Avatar to Resolve Your Issues and Frustrations</h1>
    </div>
  );
};

export default ExternalSitePage;
