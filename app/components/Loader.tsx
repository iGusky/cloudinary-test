'use client'
import { AdvancedImage, responsive, placeholder } from '@cloudinary/react';
import {Cloudinary} from "@cloudinary/url-gen";
import CloudinaryUploadWidget from './CloudinaryUploadWidget';
import { useState } from 'react';


export default function () {

    // Configuration
    const cloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;
    const uploadPreset = process.env.NEXT_PUBLIC_UPLOAD_PRESET;

    const [publicId, setPublicId] = useState('');

    const cld =  new Cloudinary({
        cloud: {
            cloudName
        }
    });

    const uwConfig = {
        cloudName,
        uploadPreset: undefined,
        // Uncomment and modify as needed:
        // cropping: true,
        // showAdvancedOptions: true,
        // sources: ['local', 'url'],
        // multiple: false,
        //folder: 'xv',
        // tags: ['users', 'profile'],
        // context: { alt: 'user_uploaded' },
        // clientAllowedFormats: ['images'],
        // maxImageFileSize: 2000000,
        // maxImageWidth: 2000,
        // theme: 'purple',
    };

    const myImage = cld.image('carlos-matsufuji-bayonetta_atzcdr');

    return (
        <div>
            <h2 className="text-4xl font-black uppercase">Desde Loader.tsx</h2>
            <CloudinaryUploadWidget uwConfig={uwConfig} setPublicId={setPublicId} />
            {/* <AdvancedImage cldImg={myImage} /> */}

                  <div className="documentation-links">
        <p>
          <a
            href="https://cloudinary.com/documentation/upload_widget"
            target="_blank"
            rel="noopener noreferrer"
          >
            Upload Widget User Guide
          </a>
        </p>
        <p>
          <a
            href="https://cloudinary.com/documentation/upload_widget_reference"
            target="_blank"
            rel="noopener noreferrer"
          >
            Upload Widget Reference
          </a>
        </p>
      </div>

      {publicId && (
        <div
          className="image-preview"
          style={{ width: '800px', margin: '20px auto' }}
        >
          <AdvancedImage
            style={{ maxWidth: '100%' }}
            cldImg={cld.image(publicId)}
            plugins={[responsive(), placeholder()]}
          />
        </div>
      )}
        </div>
    )
}