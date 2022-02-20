import React from 'react';

const MainSurvey = ({children, styles}) => {
  const mainSurveyStyles = {
    width: '100%'
  }


  return <div style={styles} className="min-h-screen min-w-full flex flex-col" style={mainSurveyStyles}>
    {children}
  </div>;
};

export default MainSurvey;
