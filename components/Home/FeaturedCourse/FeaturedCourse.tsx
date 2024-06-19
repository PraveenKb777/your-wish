import React from 'react';
import "./index.css"
import GradientText from '@/components/GradientText/GradientText';
import CONTENT from '@/content';
import HoverCard from '@/components/HoverCard/HoverCard';

export default function FeaturedCourse() {

  const ANIMATION_DURATION = 500;
  const { home } = CONTENT;

  return (
    <div className='mt-12'>
      <div>
        <GradientText
          element="h6"
          className="text-4xl font-medium"
          style={{
            animation: `comeFromBottom ${ANIMATION_DURATION}ms`,
            opacity: 0,
            animationFillMode: "forwards",
            animationDelay: "0s",
          }}
        >
          {home.featuredCourse.title}
        </GradientText>
      </div>

      <div className='grid grid-cols-3 gap-[30px] mt-9'>
        {home.featuredCourse.cardContent.map((course, index) => (
          <HoverCard
            key={index}
            title={course.title}
            name={course.name}
            description={course.description}
            buttonLabel={home.featuredCourse.buttonLabel}
            animationDuration={ANIMATION_DURATION}
          />
        ))}
      </div>

    </div>
  )
}
