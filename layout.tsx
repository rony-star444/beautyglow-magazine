import './globals.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
export const metadata = {
  title: 'BeautyGlow Magazine',
  description: 'Beauty tips, tutorials and product highlights'
}
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gradient-to-br from-pink-50 to-rose-50 text-foreground">
        <Navbar />
        <main className="min-h-[60vh]">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
