import { useZoomImg } from '@/app/lib/customHooks/dom/useZoomImg';
import { useState } from 'react';

export const ShowImgSelector = ({pictures}) => {

    const [currentPicture, setCurrentPicture] = useState(pictures[0]);
    
    const {imgWrapperStyle, onMouseOver, onMouseMove, onMouseLeave, isZooming} = useZoomImg(currentPicture.src, 300);

    return (
        <div className="img-selector-wrapper">
            <div className="img-selector-controls">
                {
                    pictures.length > 1 && pictures.map(picture => (
                        <ImgSelectorControl
                            key={picture.id}
                            picture={picture}
                            isSelected={picture.id === currentPicture.id}
                            setCurrentPicture={setCurrentPicture}
                        />
                    ))
                }
            </div>
            <div className="img-selector-main-wrapper" style={imgWrapperStyle} onMouseOver={onMouseOver} onMouseMove={onMouseMove} onMouseLeave={onMouseLeave}>
                <img className={'img-selector-main' + (isZooming ? ' invisible': '')} src={currentPicture.src} alt={currentPicture.alt} />
            </div>
        </div>
    )
}


const ImgSelectorControl = ({picture, isSelected, setCurrentPicture}) => {

    const handleSelect = () => {
        setCurrentPicture(picture);
    }

    return (
        <button 
            className={'img-selector-control' + (isSelected ? ' selected': '')} 
            onClick={handleSelect} 
            onMouseOver={handleSelect}
            type="button"
            >
            <img src={picture.srcSmall} alt={picture.alt} />
        </button>
    )
}