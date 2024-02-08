import React, { useEffect, useState } from 'react';

export const SuggestList = ({additionalClass, suggests, onSelect, onClose, render}) => {
    //fermeture au click sur le côté
    useEffect(() => {
            document.body.addEventListener('click', onClose);
            return () => document.removeEventListener('click', onClose);
    }, []);
    //fermeture à l'appui sur Tab
    useEffect(() => {
        const closeOnTabDown = e => {
            if(e.key === 'Tab') {
                onClose();
            }
        };
        document.addEventListener('keydown', closeOnTabDown);
        return () => document.removeEventListener('click', closeOnTabDown);
    }, []);

    
    //utilisation au clavier
    const [selected, setSelected] = useState(null);

    useEffect(() => {
        const onKeyDown = e => {
            switch(e.key) {
                case 'ArrowUp':
                    e.preventDefault();
                    setSelected(selected => {
                        if(selected === null || selected <= 0) {
                            return (suggests.length - 1);
                        }
                        return (selected - 1);
                    });
                    break;
                case 'ArrowDown':
                    e.preventDefault();
                    setSelected(selected => {
                        if(selected === null || selected >= (suggests.length - 1)) {
                            return 0;
                        }
                        return (selected + 1);
                    });
                    break;
                default: 
                    break;
            }
        }
        document.addEventListener('keydown', onKeyDown);
        return () => document.removeEventListener('keydown', onKeyDown);
    }, []);

    useEffect(() => {
        const onKeyDown = e => {
           if(e.key === 'Enter') {
                e.preventDefault();
                e.stopPropagation();
                onSelect(suggests[selected]);
           }
        }
        document.addEventListener('keydown', onKeyDown);
        return () => document.removeEventListener('keydown', onKeyDown);
    }, [selected]);

    const stopPropagation = e => {
        e.stopPropagation();
    }
    
    return (
        
        <ul className={`suggest-list ${additionalClass}`} onClick={stopPropagation} role="listbox" aria-label="Suggestions">
            {
                suggests.map((suggest, index) => render(suggest, selected === index))
            }
        </ul>
    )
}



    
