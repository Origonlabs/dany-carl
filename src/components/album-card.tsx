import Image from "next/image";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
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
    <Link href="#" className="group block">
      <Card className="overflow-hidden transition-all duration-500 ease-in-out border-border/20 hover:border-primary bg-card/50 hover:bg-card hover:shadow-2xl hover:shadow-primary/20 transform hover:-translate-y-2">
        <CardContent className="p-0">
          {image && (
            <div className="aspect-square relative overflow-hidden">
              <Image
                src={image.imageUrl}
                alt={`Album art for ${album.title}`}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                data-ai-hint={image.imageHint}
              />
               <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-300" />
               <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <PlayCircle className="w-20 h-20 text-white/70 group-hover:text-white transform group-hover:scale-110 transition-transform duration-300" strokeWidth={1} />
               </div>
            </div>
          )}
        </CardContent>
        <CardFooter className="flex-col items-start p-6 bg-card/80 backdrop-blur-sm">
          <p className="font-headline text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">{album.title}</p>
          <p className="text-sm text-muted-foreground">{album.year}</p>
        </CardFooter>
      </Card>
    </Link>
  );
}
