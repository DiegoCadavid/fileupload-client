import React, { useRef } from 'react'
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import BackBtn from '../BackBtn';

const Preview = ({ urlPreview }) => {

    const textCopy = useRef(null);

    const onCopy = () => {
        if (document.body.createTextRange) {
            const range = document.body.createTextRange();
            range.moveToElementText(textCopy.current);
            range.select();
        } else if (window.getSelection) {
            const selection = window.getSelection();
            const range = document.createRange();
            range.selectNodeContents(textCopy.current);
            selection.removeAllRanges();
            selection.addRange(range);
        } else {
            console.warn("Could not select text in node: Unsupported browser.");
        }


        if (!navigator.clipboard) {
            document.execCommand('copy');
        } else {
            navigator.clipboard.writeText(urlPreview).then(
                function () {
                    console.log('Texto copiado');
                })
                .catch(
                    function () {
                        console.warn('Error al copiar el texto');
                    });
        }
    }

    return (
        <>
        <BackBtn />
            <div className='base__container preview__container'>
                <CheckCircleIcon className='preview__icon' sx={{
                    height: 35,
                    width: 35,
                    color: '#219653'
                }} />

                <p>Uploaded Successfully!</p>

                <div className='preview__img' style={{ backgroundImage: `url(${urlPreview})` }} />
                <div className='preview__link'>
                    <p ref={textCopy}> {urlPreview} </p>
                    <button onClick={onCopy}> Copy link </button>
                </div>

            </div>
        </>
    )
}

export default Preview