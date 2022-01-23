import React from 'react';

const MainSurvey = ({children, styles}) => {
  return <div style={styles} className="min-h-screen min-w-full flex flex-col">
    {children}
  </div>;
};

export default MainSurvey;
