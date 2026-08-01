import { useEffect, useState } from "react";

function useTestimonialsCarousel() {
  const [carouselApi, setCarouselApi] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (!carouselApi) return;

    const updateActiveIndex = () => {
      setActiveIndex(carouselApi.selectedScrollSnap());
    };

    updateActiveIndex();
    carouselApi.on("select", updateActiveIndex);
    carouselApi.on("reInit", updateActiveIndex);

    return () => {
      carouselApi.off("select", updateActiveIndex);
      carouselApi.off("reInit", updateActiveIndex);
    };
  }, [carouselApi]);

  return { activeIndex, setCarouselApi };
}

export { useTestimonialsCarousel };
