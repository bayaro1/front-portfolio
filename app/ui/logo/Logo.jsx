import Image from 'next/image';
import Link from 'next/link';

export const Logo = ({additionalClass, ...props}) => {
    return (
        <Link
            className="logo-button"
            href="/"
            {...props}
        >
            <Image
                width={35}
                height={35}
                src="/logo.png"
                alt="Logo IA"
                className={'logo' + (additionalClass ? ' '+additionalClass: '')}
            />
        </Link>
    )
};