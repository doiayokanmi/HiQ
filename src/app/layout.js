import Footer from '../../components/Footer'
import Navigation from '../../components/Navigation'
import './globals.css'

export const metadata = {
  title: 'HiQ Technology',
  description: 'Taking a step forward to Tech World',
  icons: {
    url: '/hiq_logo-removebg-preview.png',
      rel: 'icon',
      type: 'image/png',
      sizes: '32x32',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">

      <body>
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  )
}
