import React from 'react';
import { CloseIcon } from '@/app/ui/icons/CloseIcon';
import { Button } from '@/app/ui/buttons/Button';

export const CloseButton = ({additionalClass, ...props}) => {

    return (
        <Button 
            className={'icon-button close-button' + (additionalClass ? ' ' + additionalClass: '')} 
            aria-label="Fermer"
            title="Fermer"
            {...props}
            > 
            <CloseIcon />
        </Button>
    )
}