'use client'

import { ChangeEvent, useState } from "react"

export function MediaPicker() {
    const [preview, setPreview ] = useState<string | null>(null)
    
    function onFileSelected(event: ChangeEvent<HTMLInputElement>) {
        const { files } = event.target

        if (!files) {
            return
        }

        const previewURL = URL.createObjectURL(files[0])

        setPreview(previewURL)
    }

    return (
        <>
            <input 
                onChange={onFileSelected} 
                name="coverUrl"
                type="file" 
                id="media" 
                className="invisible w-0 h-0"
                accept="image/*"
            />

            {preview && (
                <img 
                    src={preview} 
                    alt=""
                    className="aspect-video w-full rounded-lg object-cover" 
                />
            )}

        </>
    )
}