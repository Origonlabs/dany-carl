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
    <Link href="#" className="group block text-left">
      <div className="relative aspect-square overflow-hidden rounded-lg border-2 border-border group-hover:border-primary/50 transition-all duration-300">
        {image && (
          <Image
            src={image.imageUrl}
            alt={`Album art for ${album.title}`}
            fill
            className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            data-ai-hint={image.imageHint}
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <PlayCircle className="h-16 w-16 text-white/80" />
        </div>
      </div>
      <div className="mt-4">
        <p className="font-headline text-xl font-bold text-foreground transition-colors group-hover:text-primary">{album.title}</p>
        <p className="text-sm text-muted-foreground">{album.year}</p>
      </div>
    </Link>
  );
}