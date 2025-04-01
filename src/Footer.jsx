import React from 'react';

const Footer = () => (
  <footer className="text-center p-3 border-top" style={{ backgroundColor: '#f0f0f0' }}>
    © {new Date().getFullYear()} Admin Panel. All rights reserved.
  </footer>
);

export default Footer;
