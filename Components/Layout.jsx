// components/Layout.js

import Head from 'next/head'
import Navbar from './Navbar'
import Footer from './Footer'

export default function Layout({ children, title = 'Mi Web' }) {
  return (
    <div>
      <Head>
        <title>{title}</title>
        {/* Aquí puedes agregar más elementos al head como meta tags, etc. */}
      </Head>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  )
}
