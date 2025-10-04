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
      <Card className="overflow-hidden transition-all duration-300 ease-in-out bg-card hover:shadow-xl hover:-translate-y-2">
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
               <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <PlayCircle className="w-20 h-20 text-white/80 transform group-hover:scale-110 transition-transform duration-300" strokeWidth={1.5} />
               </div>
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
