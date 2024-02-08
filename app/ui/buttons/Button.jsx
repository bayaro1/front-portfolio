import '@/app/ui/buttons/index.css';

export const Button = ({additionalClass, children, isLoading, onClick, preventDefault = true, ...props}) => {

    const handleClick = e => {
        if(preventDefault) {
            e.preventDefault();
        }
        onClick();
    }

    return (
        <button 
            className={'button' + (additionalClass ? ' '+additionalClass: '') + (isLoading ? ' disabled': '')} 
            disabled={isLoading}
            onClick={handleClick} 
            {...props}
        >
            {
                isLoading ? 'chargement...': children
            }
        </button>
    )
}