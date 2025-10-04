import Image from "next/image";
import Link from "next/link";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import type { ImagePlaceholder } from "@/lib/placeholder-images";

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
    <Link href="#" className="group block text-center">
      <div className="relative aspect-square overflow-hidden border">
        {image && (
          <Image
            src={image.imageUrl}
            alt={`Album art for ${album.title}`}
            fill
            className="object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            data-ai-hint={image.imageHint}
          />
        )}
      </div>
      <div className="mt-4">
        <p className="font-headline text-lg font-bold text-foreground transition-colors group-hover:text-primary">{album.title}</p>
        <p className="text-sm text-muted-foreground">{album.year}</p>
      </div>
    </Link>
  );
}
