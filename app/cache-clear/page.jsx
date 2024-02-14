import { revalidatePath } from "next/cache";
import Link from "next/link";

export default function Page() {
    revalidatePath('/mes-realisations', 'page');

    return (
        <div style={{position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <div style={{width: '600px', maxWidth: '80vw', maxHeight: '80vh', overflow: 'auto'}}>
                <h3>Les actions suivantes ont eu lieu :</h3>
                <ul>
                    <li>revalidatePath('/mes-realisations', 'page')</li>
                </ul>
            </div>
            <Link href="/">Retour à l'accueil</Link>
        </div>
    )
}