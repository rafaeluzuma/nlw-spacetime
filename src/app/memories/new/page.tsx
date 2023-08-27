import { Camera, ChevronLeft } from "lucide-react";
import Link from "next/link";

export default function NewMemory() {
    return (
        <div className="flex flex-1 flex-col gap-4">
            <Link
                href="/"
                className="flex items-center gap-1 text-sm text-gray-200 hover:text-gray-100"
            >
                <ChevronLeft />
                voltar á timeline
            </Link>

            <form className="flex flex-1 flex-col gap-2">
                <div className="flex items-center gap-4">
                    <label 
                        htmlFor="media"
                        className="flex cursor-pointer items-center gap-1.5 text-sm text-gray-200 hover:text-gray-100"
                    >
                        <Camera className="w-4 h-4"/>
                        Anexar mídia
                    </label>

                    <label 
                        htmlFor="isPublic" 
                        className="flex cursor-pointer items-center gap-1.5 text-sm text-gray-200 hover:text-gray-100"
                    >

                        <input type="checkbox" id="isPublic" name="isPublic" className="h-4 w-4 rounded border-gray-400 bg-gray-700 text-purple-500"/>
                        Tornar memoria publica
                    </label>
        
                </div>

                <input type="file" id="media" className="invisible w-0 h-0"/>

                <textarea 
                    name="content"
                    spellCheck={false}
                    className="w-full flex-1 resize-none rounded border-0 bg-transparent p-0 text-lg leading-relaxed text-gray-100 placeholder:text-gray-400 focus:ring-0"
                    placeholder="Fique livre para adicionar fotos, videos e relatos sobre sua experiência que você lembrar para sempre"
                />
            </form>
        </div>
    )
}