export const PlusIcon = ({additionalClass, ...props}) => {
    return (
        <svg className={'icon i-plus' + (additionalClass ? ' ' + additionalClass: '')} {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <g id="essentials/basics/add" fill="none" fillRule="evenodd">
            <path fill="currentColor" id="Fill-70" d="m11.4935898 21c-.276 0-.5-.224-.5-.5v-8.5h-8.49999998c-.276 0-.5-.224-.5-.5s.224-.5.5-.5h8.49999998v-8.5c0-.276.224-.5.5-.5s.5.224.5.5v8.5h8.5c.276 0 .5.224.5.5s-.224.5-.5.5h-8.5v8.5c0 .276-.224.5-.5.5"></path>
            </g>
        </svg>
    )
}