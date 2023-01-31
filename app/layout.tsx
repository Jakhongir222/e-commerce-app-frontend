import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <head />
      <body>
        <Navbar />
        {children}
        <Footer/>
      </body>
    </html>
  );
}

