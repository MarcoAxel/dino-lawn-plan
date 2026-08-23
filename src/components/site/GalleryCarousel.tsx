import { useEffect, useState } from "react";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import { GALLERY_IMAGES } from "@/lib/gallery";

export function GalleryCarousel() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) return;
    const onSelect = () => setCurrent(api.selectedScrollSnap());
    onSelect();
    api.on("select", onSelect);
    return () => {
      api.off("select", onSelect);
    };
  }, [api]);

  if (GALLERY_IMAGES.length === 0) return null;

  return (
    <div className="relative">
      <Carousel
        setApi={setApi}
        opts={{ loop: true, align: "start" }}
        plugins={[Autoplay({ delay: 4500, stopOnInteraction: false })]}
      >
        <CarouselContent>
          {GALLERY_IMAGES.map((image) => (
            <CarouselItem key={image.src} className="md:basis-1/2 lg:basis-1/2">
              <div className="overflow-hidden rounded-2xl border border-border bg-muted">
                <img
                  src={image.src}
                  alt="Freshly cut lawn"
                  loading="lazy"
                  className="aspect-4/3 w-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="-left-3 hidden sm:flex" />
        <CarouselNext className="-right-3 hidden sm:flex" />
      </Carousel>

      <div className="mt-5 flex justify-center gap-2">
        {GALLERY_IMAGES.map((image, i) => (
          <button
            key={image.src}
            type="button"
            aria-label={`Go to slide ${i + 1}`}
            onClick={() => api?.scrollTo(i)}
            className={`h-2 rounded-full transition-all ${
              current === i ? "w-6 bg-forest" : "w-2 bg-border hover:bg-primary"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
