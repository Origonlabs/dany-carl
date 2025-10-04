import Image from "next/image";
import Link from "next/link";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import type { ImagePlaceholder } from "@/lib/placeholder-images";
import { PlayCircle } from "lucide-react";

type Album = {
  title: string;
  year: string;
  imageId: string;
};

export default function AlbumCard({ album }: { album: Album }) {
  const image: ImagePlaceholder | undefined = PlaceHolderImages.find(
    (img) => img.id === album.imageId
  );

  return (
    <Link href="#" className="group block overflow-hidden rounded-lg">
      <div className="relative aspect-square">
        {image && (
          <Image
            src={image.imageUrl}
            alt={`Album art for ${album.title}`}
            fill
            className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            data-ai-hint={image.imageHint}
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <PlayCircle className="w-20 h-20 text-white/80 transform group-hover:scale-110 transition-transform duration-300" strokeWidth={1} />
        </div>
        <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out">
          <p className="font-headline text-lg font-bold text-white">{album.title}</p>
          <p className="text-sm text-white/70">{album.year}</p>
        </div>
      </div>
    </Link>
  );
}
