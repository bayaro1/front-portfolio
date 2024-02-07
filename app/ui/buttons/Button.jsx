export const Button = ({additionalClass, children, isLoading, onClick, ...props}) => {

    return (
        <button 
            className={'button' + (additionalClass ? ' '+additionalClass: '') + (isLoading ? ' disabled': '')} 
            disabled={isLoading}
            onClick={onClick} 
            {...props}
        >
            {
                isLoading ? 'chargement...': children
            }
        </button>
    )
}