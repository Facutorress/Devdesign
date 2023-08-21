// components/Layout.js

import Head from 'next/head'
import Footer from './Footer'

export default function Layout({ children, title = 'Mi Web' }) {
  return (
    <div>
      <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{title}</title>
        {/* Aquí puedes agregar más elementos al head como meta tags, etc. */}
      </Head>

      <main>{children}</main>
      <Footer />
    </div>
  )
}
