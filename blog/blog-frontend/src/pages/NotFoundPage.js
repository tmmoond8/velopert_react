import React from 'react';
import NotFound from 'components/common/NotFound';

const NotFoundPage = ({ history, staticContext }) => {
  if (staticContext) {
    staticContext.NotFound = true;
  }
  return (
    <NotFound onGoBaCK={history.goBack}/>
  );
};

export default NotFoundPage;