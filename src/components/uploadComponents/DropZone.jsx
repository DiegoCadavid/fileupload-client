import React from 'react'
import { useDropzone } from 'react-dropzone';



const DropZone = ({ uploadFuction }) => {

    const { acceptedFiles, getRootProps, getInputProps } = useDropzone({
        accept: {
            'image/jpeg': [],
            'image/png': []
        },
        maxFiles: 1,
        onDrop: files => uploadFuction(files[0])
    });

    return (
            <div {...getRootProps({ className: 'fileupload__dropzone' })}>
                <input {...getInputProps()}/>
                <img src='./image.svg' alt="dropzone logo" accept='image/png, image/jpeg' />
                <p>Drag & Drop your image here</p>
            </div>
    )
}

export default DropZone