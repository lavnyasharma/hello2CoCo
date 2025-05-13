import "./globals.css"

export const metadata = {
  title: "Hello2CoCo - Voice First Digital Transformation",
  description: "Voice-first AI technology for India's next billion users",
    generator: 'v0.dev'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  )
}
