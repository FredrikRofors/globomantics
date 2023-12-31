import { Quicksand } from "@next/font/google";
import Link from "next/link";
import style from './styles.module.css'
import './global.css'

// https://fonts.google.com/
const googleFont = Quicksand({
  subsets: ['latin']
})

export const metadata = {
  title: 'Next.js',
  description: 'Generated by Next.js',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={googleFont.className}>
      <head>
        <meta name="apple-mobile-web-app-capable" content="yes" />
      </head>
      <body className={style.body}>
        <header className={style.header}>
          <h1>GLOBOMATICS :: TAKING TECH TO THE GLOBE</h1>
        </header>
        <nav className={style.navigation}>
          <Link href="/conference" style={{ color: 'white', marginRight: 20 }}>Conference</Link> |
          <Link href="/blog" style={{ color: 'white', marginRight: 20, marginLeft: 20 }}>Blog</Link> |
          <Link href="/settings" style={{ color: 'white', marginLeft: 20 }}>Settings</Link>
        </nav>
        <div className={style.content}>
          {children}
        </div>
        <footer className={style.footer}>
          Powered by Next.js v13
        </footer>
      </body>
    </html>
  )
}
