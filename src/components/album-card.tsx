import Image from "next/image";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
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
    <Link href="#" className="group block">
      <Card className="overflow-hidden transition-all duration-300 ease-in-out border-border/50 hover:border-primary/50 bg-card/50 hover:bg-card hover:shadow-2xl hover:shadow-primary/20 transform hover:-translate-y-2">
        <CardContent className="p-0">
          {image && (
            <div className="aspect-square relative overflow-hidden">
              <Image
                src={image.imageUrl}
                alt={`Album art for ${album.title}`}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                data-ai-hint={image.imageHint}
              />
               <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-70 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          )}
        </CardContent>
        <CardFooter className="flex-col items-start p-4">
          <p className="font-headline text-lg font-bold text-foreground">{album.title}</p>
          <p className="text-sm text-muted-foreground">{album.year}</p>
        </CardFooter>
      </Card>
    </Link>
  );
}
