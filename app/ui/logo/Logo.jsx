import Image from 'next/image';

export const Logo = ({additionalClass, ...props}) => {
    return (
        <Image
            width={35}
            height={35}
            src="/logo.png"
            alt="Logo IA"
            className={'logo' + (additionalClass ? ' '+additionalClass: '')}
            {...props}
        />
    )
};