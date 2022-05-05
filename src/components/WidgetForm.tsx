import { CloseButton } from "./CloseButton";
import bugImageUrl from '.../assets/bug.svg';
import ideaImageUrl from '.../assets/idea.svg';
import thoughtImageUrl from '.../assets/thought.svg';



const feedbackTypes = {
    BUG: {
        title: 'problema',
        image: {
            source: bugImageUrl,
            alt: 'Image de um inseto'
        }
    },
    IDEA: {
        title: 'Idea',
        image: {
            source: ideaImageUrl,
            alt: 'Imagem de uma lampada'
        }
    },
    OTHER: {
        title: 'Outro',
        image: {
            source: thoughtImageUrl,
            alt: 'Imagem de uma nuvem de pensamento'
        }
    }
}

export function WidgetForm() {
    return(
        <div className="bg-zinc-900 p4 relative rounded-2xl mb-4 flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">
            <header>
                <span className="text-xl leading-6">Deixe seu feedback</span>
                <CloseButton />
            </header>

            <div className="flex py-8 gap-2 w-full">
    
            </div>


            <footer className="text-xs text-neutral-400">
                Feito com ♥ pela <a className="underline underline-offset-3" href="https://rocketseat.com.br">Rocketseat</a>
            </footer>
        </div>
    )
}