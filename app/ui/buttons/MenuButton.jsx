import React from 'react';
import { MenuIcon } from '@/app/ui/icons/MenuIcon';
import { Button } from '@/app/ui/buttons/Button';

export const MenuButton = ({additionalClass, ...props}) => {

    return (
        <Button 
            className={'icon-button' + (additionalClass ? ' ' + additionalClass: '')} 
            aria-label="Menu"
            title="Menu"
            {...props}
        > 
            <MenuIcon />
        </Button>
    )
}