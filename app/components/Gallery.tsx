'use client'
import { useEffect, useState } from "react"
import CldImage from "./CldImage"

export function Gallery() {
    const [photos, setPhotos] = useState('')
    const [loading, setLoading] = useState(false)
    const getData = async (tag: string) => {
        const response = await fetch(`https://res.cloudinary.com/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/list/${tag}.json`)
        console.log(response)
        const data = await response.json();
        setPhotos(data)
        setLoading(false)

    }

    useEffect(() => {
        getData('xv')
    }, [])

    return (
        <div>
            {loading && <p className="font-bold">Loading gallery</p>}
            {!loading && photos.length !== 0 ? (
                <div className="flex flex-wrap -mx-4">
                    {photos.resources.map((photo, idx) => {
                        return (
                            <div className="lg:w-1/3 md:w-1/2 w-full p-4" key={idx}>
                                <CldImage publicId={photo.public_id} />
                            </div>
                        );
                    })}
                </div>
            ) : (
                <p className="text-xl p-4">
                    No photos to list. Please make sure that you have uploaded some images
                    using this app.
                </p>
            )}
        </div>
    )
}