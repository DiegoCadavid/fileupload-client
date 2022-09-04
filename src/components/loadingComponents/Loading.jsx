import React from 'react'
import LinearProgress from '@mui/material/LinearProgress'

const Loading = () => {
  return (
    <div className='loading__container base__container'>  
            <p>Uploading...</p>
            <LinearProgress className='loading__progress'
            sx={{ 
                
                backgroundColor: "#F2F2F2",
                borderRadius: "8px",
                '& .MuiLinearProgress-bar': {
                    backgroundColor: "#2F80ED",
                    borderRadius: "8px"
                }
            }} />
    </div>
  )
}

export default Loading