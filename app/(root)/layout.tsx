import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import React from 'react'

function layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Navbar />
      <section className="container border border-t-0 mx-auto py-3 px-6 fade-in delay-100">
        {children}
      </section>
      <Footer/>
    </>
  );
}

export default layout