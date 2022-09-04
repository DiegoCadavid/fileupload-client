import React, { useEffect, useState } from 'react'
import { Routes, Route, useNavigate } from "react-router-dom";
import axios from 'axios'

import { useSnackbar } from 'notistack';

import Footer from './components/Footer'
import Loading from './components/loadingComponents/Loading'
import Preview from './components/previewComponents/Preview'
import Upload from './components/uploadComponents/Upload'



const App = () => {

  const [fileResponse, setFileResponse] = useState({
    data: null,
    loading: false,
    err: false
  })

  const [file, setFile] = useState(undefined);
  const navigate = useNavigate();

  const uploadFile = (file) => {
    setFileResponse({
      data: null,
      loading: true,
      err: false
    })

    const formData = new FormData();
    formData.append('image', file);

    axios.post('https://fileuploadserver-production.up.railway.app/', formData, {
      headers: { "Content-Type": "multipart/form-data" },
    }).then(res => {
      setFileResponse({
        data: res.data,
        loading: false,
        err: false
      })
    }).catch(err => {
      console.log('error')
      setFileResponse({
        data: null,
        loading: false,
        err: true
      })
    })
  }


  useEffect(() => {
    uploadFile(file);
  }, [file])


  const { enqueueSnackbar } = useSnackbar();

  // Cuando se hace un http request
  useEffect(() => {

    // Si esta cargando
    if (fileResponse.loading) {
      navigate('/loading', { replace: true });
    }

    // Si deja de cargar y no hay data significa que regreso
    if (!fileResponse.loading && fileResponse.data == null) {
      navigate('/', { replace: true });
    }

    // Si deja de cargar y no hay data significa error
    if (!fileResponse.loading && fileResponse.data == null && fileResponse.err) {
      navigate('/', { replace: true });
    }

    // Si deja de cargar y hay data significa ok!
    if (!fileResponse.loading && fileResponse.data != null) {
      enqueueSnackbar('Success!', {variant: 'success'})
      navigate('/preview', { replace: true });
    }


  }, [fileResponse])




  return (
    <div className='main'>
      <Routes>
        <Route path='/' element={<Upload uploadState={setFile} />} />
        <Route path='loading' element={<Loading />} />
        <Route path='preview' element={<Preview urlPreview={fileResponse.data?.url} />} />
      </Routes>

      <Footer />
    </div>
  )
}

export default App