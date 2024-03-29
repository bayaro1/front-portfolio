export const PhoneIcon = ({additionalClass, ...props}) => {
    return (
        <svg className={'icon i-phone' + (additionalClass ? ' ' + additionalClass: '')} {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960">
            <path fill="currentColor" d="M800-86q-131.098 0-259.049-57Q413-200 307-305.5T144-539.282Q87-667.564 87-799q0-32.143 21.143-53.571Q129.286-874 161-874h161q37 0 60 18t31 52l25 119q6 31-.5 53T411-593l-103 90q16 26 37.5 52.5T396-396q26 26 50 45.5t48 33.5l101-98q20-19 44.5-25.5t53.5-.5l111 25q35 10 52.5 31t17.5 55v169q0 32.143-21.5 53.571Q831-86 800-86ZM247-616l65-57-15-75h-82q3 34 10.457 66.941Q232.914-648.118 247-616Zm362 363q33 14 68 23t71 14v-83l-74-17-65 63ZM247-616Zm362 363Z"/>
        </svg>
    )
}
