'use client';
import React, { forwardRef, useEffect, useRef } from 'react';
import { CloseButton } from '@/app/ui/buttons/CloseButton';
import { createPortal } from 'react-dom';
import '@/app/ui/container/modal.css';

export const Modal = forwardRef(({children, additionalClass, isOpen, close = null, animated = true}, modalRef) => {

    useEffect(() => {
        if(isOpen) {
            document.querySelectorAll('html, body').forEach(elt => elt.classList.add('no-overflow'));
        } else {
            document.querySelectorAll('html, body').forEach(elt => elt.classList.remove('no-overflow'));
        }
    }, [isOpen]);

    const containerRef = useRef();
    const closerRef = useRef();

    const handleClose = () => {
        if(!close) {
            return;
        }
        if(!animated) {
            close();
            return;
        }
        containerRef.current.classList.add('close');
        containerRef.current.addEventListener('animationend', () => {
            close();
        });
        closerRef.current.classList.add('close');
        closerRef.current.addEventListener('animationend', () => {
            close();
        });
    };

    const handleStopPropagation = e => {
        e.stopPropagation();
    };

    return (
            isOpen && createPortal(
                <div ref={containerRef} className={'modal-container' + (additionalClass ? ' '+additionalClass+'-container': '')} onClick={handleClose}>
                    <div ref={modalRef} className={'modal' + (additionalClass ? ' '+additionalClass: '')} onClick={handleStopPropagation}>
                        {
                            close !== null && createPortal(
                                (
                                    <div ref={closerRef} className="closer-wrapper">
                                        <CloseButton additionalClass="modal-closer" onClick={handleClose} />
                                    </div>
                                ),
                                document.body
                            )
                        }
                        {children}
                    </div>
                </div>,
                document.body
            )
    )
});




Modal.displayName = 'CustomModal';
