'use client';
import '@/app/ui/error/Error';
 
export default function Error({error, reset}) {

    console.log(error);

    return (
        <Error error={error} reset={reset} />
    )
}
