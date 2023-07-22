import '@styles/globals.css';

export const metadata = {
  title: 'Spokane Bitcoin Club',
  description: 'Generated by Next.js',
}
 
export default function RootLayout({ children }) {
 return (
    <html lang="en">
      <body>
        <div className="main">
          <div className="gradient" />
        </div>
        
        <main className="app">
          {children}
        </main>
      </body>
    </html>
  )
}
