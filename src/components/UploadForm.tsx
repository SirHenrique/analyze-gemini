'use client'

import { useState } from 'react'
import axios from 'axios'
import styles from './UploadForm.module.css'


export default function UploadForm() {
  const [image, setImage] = useState<File | null>(null)
  const [keywords, setKeywords] = useState<string[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!image) {
      setError('Selecione uma imagem.')
      return
    }

    const formData = new FormData()
    formData.append('image', image)

    setLoading(true)
    setError(null)

    try {
      const response = await axios.post('/api', formData)
      setKeywords(response.data.keywords)
    } catch (err: any) {
      setError(err.response?.data?.error || 'Erro ao processar imagem')
    } finally {
      setLoading(false)
    }
  }

  return (
   <div className={styles.container}>
      <h1 className={styles.title}>Upload de Imagem com IA</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="file"
          accept="image/png, image/jpeg"
          className={styles.inputFile}
          onChange={(e) => setImage(e.target.files?.[0] || null)}
        />
        <button type="submit" className={styles.button} disabled={loading}>
          {loading ? 'Analisando...' : 'Enviar'}
        </button>
      </form>

      {error && <p className={styles.error}>{error}</p>}

      {keywords.length > 0 && (
        <div>
          <h3>Palavras-chave encontradas:</h3>
          <ul className={styles.list}>
            {keywords.map((kw, i) => (
              <li key={i}>{kw}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}
