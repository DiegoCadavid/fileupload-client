import React from 'react'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { useNavigate } from 'react-router-dom';

const BackBtn = () => {
    const navigate = useNavigate();

    const backPage = () => {
        navigate('/', { replace: true})    
    }

  return (
    <button className='backBtn' onClick={backPage}> <ArrowBackIosIcon sx={{
        width: '100%',
        height: '100%'
    }}  />  </button>
  )
}

export default BackBtn