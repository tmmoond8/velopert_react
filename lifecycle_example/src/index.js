import React from 'react';
import ReactDOM from 'react-dom';
import LifeCycleSample from './LifeCycleSample';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<LifeCycleSample />, document.getElementById('root'));
registerServiceWorker();
