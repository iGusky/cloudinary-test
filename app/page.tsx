'use client'
import { useState } from "react";
import { Gallery } from "./components/Gallery";

export default function Home() {

  const [image, setImage] = useState<File|null>(null)

  async function handleSubmit() {
    if(!image) return;

    const formData = new FormData()
    formData.append('file', image);
    
    const response = await fetch('/api/upload', {method: 'POST', body: formData})
  }

  function handleChangeImage(e: React.ChangeEvent<HTMLInputElement>) {
    const selected = e.target.files?.[0] ?? null
    setImage(selected)
  }

  return (
    <div className="container main-content">
      <h1>Subir imágenes a cloudinary.</h1>
        <input type="file" accept="image/*" onChange={handleChangeImage}></input>
        <button onClick={handleSubmit}>Upload</button>

        <Gallery/>
    </div>
  )
}