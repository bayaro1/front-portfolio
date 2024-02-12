import React from 'react';
import { TrashIcon } from '../icons/TrashIcon';

export const TrashButton = ({children, additionalClass, ...props}) => {
    
    return (
        <button 
            className={'icon-button trash-button' + (additionalClass ? ' ' + additionalClass: '')}
            aria-label="Supprimer" 
            title="Supprimer"
            {...props}
        > 
            <TrashIcon />
            {children}
        </button>
    )
}





