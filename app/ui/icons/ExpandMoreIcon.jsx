export const ExpandMoreIcon = ({additionalClass, ...props}) => {
    return (
        <svg className={'icon i-expand-more' + (additionalClass ? ' ' + additionalClass: '')} {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960">
            <path fill="currentColor" d="M480-337.587 232.348-585.239 296-648.891l184 184 184-184 63.652 63.652L480-337.587Z"/>
        </svg>
    )
}


