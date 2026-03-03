'use client'
import { uploadImage } from "./lib/uploadImage"

export default function Home() {

  function handleSubmit() {
    uploadImage()
  }

  return (
    <div className="container main-content">
      <h1>Subir imágenes a cloudinary.</h1>
      <form onSubmit={handleSubmit}>
        <input type="file" accept="image/*"></input>
        <button type="submit">Upload</button>
      </form>
    </div>
  )
}