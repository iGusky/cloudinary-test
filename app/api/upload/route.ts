import axios from 'axios'
import { NextRequest } from 'next/server'

export async function POST(req: NextRequest) {
    const formData = await req.formData()
    try {
        const response = await axios.post(`https://${process.env.CLOUDINARY_API_KEY}:${process.env.CLOUDINARY_API_SECRET}@api.cloudinary.com/v1_1/${process.env.CLOUDINARY_CLOUD_NAME}/image/upload?use_filename=true&tags=xv`,formData)
        if(response.status === 200) return true
        return false
    } catch {
        return false
    }
}