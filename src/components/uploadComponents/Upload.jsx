import React, { useRef } from 'react'
import DropZone from './DropZone'

const Upload = ({ uploadState }) => {


  const btnUpload = useRef(null);
  const onBtnFile = () => {
    btnUpload.current.click();
  }

  const uploadFunc = (file) => {
    // Comprobaciones
    if (!['image/png', 'image/jpeg'].includes(file.type)) {
      return console.log('ERROR ARCHIVO INCORRECTO');
    }

    uploadState(file);
  }

  const onUpload = (e) => {
    const file = e.target.files[0];
    uploadFunc(file);
  }

  return (
    <div className='fileupload__container base__container'>
      <h3 className='fileupload__title'> Upload your image </h3>
      <p className='fileupload__info'>file should be Jpeg or Png</p>
      <DropZone uploadFuction={uploadFunc} />
      <p className='fileupload__or'> Or </p>
      <input type="file" name="fileUpload" id='btnfileUpload' ref={btnUpload} onChange={onUpload} accept='image/png, image/jpeg' hidden />
      <button className='fileupload__btn' onClick={onBtnFile}> Choose a file  </button>
    </div>
  )
}

export default Upload