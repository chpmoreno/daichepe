import React from 'react';

const ExternalLink = ({ href, children, ...other }) => (
  <a href={href} {...other} rel="noreferrer noopener" target="_blank" style={{color: "#899689"}}>
    {children}
  </a>
);

export default ExternalLink;
