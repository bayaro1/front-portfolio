import '@/app/ui/buttons/index.css';
import { Loader } from '@/app/ui/icons/Loader';

export const Button = ({additionalClass, children, isLoading, onClick, type = 'button', disabled, ...props}) => {

    const handleClick = e => {
        if(type !== 'submit') {
            e.preventDefault();
        }
        if(onClick) {
            onClick();
        }
    }

    return (
        <button 
            className={'button' + (additionalClass ? ' '+additionalClass: '') + (isLoading || disabled ? ' disabled': '')} 
            disabled={isLoading || disabled}
            onClick={handleClick} 
            type={type}
            {...props}
        >
            {
                isLoading ? <Loader />: children
            }
        </button>
    )
}