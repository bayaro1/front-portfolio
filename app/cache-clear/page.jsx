import { revalidateTag } from "next/cache"

export default function Page() {
    revalidateTag('project_index');
    revalidateTag('project_show');

    return (
        <div style={{margin: '40px'}}>
            <h3>Les actions suivantes ont eu lieu :</h3>
            <ul>
                <li>revalidateTag(&apos;project_index&apos;)</li>
                <li>revalidateTag(&apos;project_show&apos;)</li>
            </ul>
        </div>
    )
}