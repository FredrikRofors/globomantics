import Link from "next/link"
import style from './styles.css'

export const metadata = {
  title: 'Next.js',
  description: 'Generated by Next.js',
}

export default function ConferenceLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <header style={style.header}>
        <h1>GLOBOMATICS MANIACALLY TAKING TECH TO THE GLOBE</h1>
      </header>
      <div style={{ backgroundColor: 'lightgray', paddingTop: 20, paddingBottom: 20, paddingLeft: 20, paddingRight: 20, fontSize: '1.5em' }}>
        <Link href="/conference" style={{ color: 'white', marginRight: 20}}>Conference</Link> | <Link href="/conference/speakers" style={{ color: 'white', marginRight: 20, marginLeft: 20}}>Speakers</Link> | <Link href="/conference/sessions" style={{ color: 'white', marginLeft: 20}}>Sessions</Link>
      </div>
      {children}
    </>    
  )
}