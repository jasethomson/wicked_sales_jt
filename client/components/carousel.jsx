import React, { useState } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from 'reactstrap';

const Coffee = props => {

  const photos = [
    {
      src: props.images[0],
      altText: 'Coffee Image 1',
      caption: '1 of 4'
    },
    {
      src: props.images[1],
      altText: 'Coffee Image 2',
      caption: '2 of 4'
    },
    {
      src: props.images[2],
      altText: 'Coffee Image 3',
      caption: '3 of 4'
    },
    {
      src: props.images[3],
      altText: 'Coffee Image 4',
      caption: '4 of 4'
    }
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === photos.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? photos.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = newIndex => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  const slides = photos.map(photo => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={photo.src}
      >
        <img src={photo.src} alt={photo.altText} />
        <CarouselCaption captionText={photo.caption} />
      </CarouselItem>
    );
  });

  return (
    <Carousel
      activeIndex={activeIndex}
      next={next}
      previous={previous}
      className={props.className}
    >
      <CarouselIndicators items={photos} activeIndex={activeIndex} onClickHandler={goToIndex} />
      {slides}
      <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
      <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
    </Carousel>
  );
};

export default Coffee;
