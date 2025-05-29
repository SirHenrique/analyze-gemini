export const metadata = {
  title: 'Upload de Imagem com IA',
  description: 'Projeto com Next.js e API Gemini',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  )
}