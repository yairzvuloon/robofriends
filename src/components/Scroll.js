import React from 'react';

const Scroll = props => <div style={{ overflowY: 'scroll', height: '800px' }}>{props.children}</div>;

export default Scroll;
