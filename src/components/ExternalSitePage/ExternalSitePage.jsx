import React from 'react';
import './ExternalSitePage.css'; // ✅ Make sure CSS file exists and is styled

const ExternalSitePage = () => {
  return (
    <div className="external-container">
      <h2 className="external-title">Share anything : AI Avatar</h2>
      <div className="iframe-wrapper">
        <iframe
          src="https://r3f-virtual-girlfriend-frontend-snowy.vercel.app/" // ✅ Your external site
          title="External Website"
          className="embedded-iframe"
          allowFullScreen
        />
      </div>
    </div>
  );
};

export default ExternalSitePage;
