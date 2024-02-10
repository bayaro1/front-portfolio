'use client';
import { useState } from "react";


export const useZoomImg = (src, zoomRate = 300) => {

    const [imgWrapperStyle, setImgWrapperStyle] = useState({});

    const [width, setWidth] = useState(0);
    const [height, setHeight] = useState(0);

    const [isZooming, setZooming] = useState(false);

    const onMouseOver = e => {
        setWidth(e.target.offsetWidth);
        setHeight(e.target.offsetHeight);

        setImgWrapperStyle(style => ({
            ...style,
            width: e.target.offsetWidth,
            height: e.target.offsetHeight
        }));

        setZooming(true);
    }

    const onMouseMove = e => {
        const x = Math.round(e.nativeEvent.offsetX * 100 / width);
        const y = Math.round(e.nativeEvent.offsetY * 100 / height);

        setImgWrapperStyle(style => ({
            ...style,
            background: 'url('+src+') '+ x +'% '+ y +'% / '+ zoomRate +'% no-repeat'
        }));
    }

    const onMouseLeave = () => {
        setZooming(false);
        setImgWrapperStyle({});
    }

    return {imgWrapperStyle, onMouseOver, onMouseMove, onMouseLeave, isZooming};
}