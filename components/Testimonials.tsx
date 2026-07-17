"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import type { FC } from "react";

// --- StarIcon ---
export const StarIcon: FC<{ className?: string }> = ({ className }) => (
  <svg
    className={className ?? "size-5 text-amber-400"}
    viewBox="0 0 20 20"
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.956a1 1 0 0 0 .95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.368 2.447a1 1 0 0 0-.364 1.118l1.287 3.956c.299.921-.755 1.688-1.539 1.118l-3.367-2.447a1 1 0 0 0-1.176 0l-3.367 2.447c-.784.57-1.838-.197-1.539-1.118l1.287-3.956a1 1 0 0 0-.364-1.118L2.063 9.383c-.783-.57-.38-1.81.588-1.81h4.163a1 1 0 0 0 .95-.69z" />
  </svg>
);

// --- Avatar ---
type AvatarProps = {
  src: string;
  alt?: string;
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  border?: boolean;
};

const avatarSizes: Record<NonNullable<AvatarProps["size"]>, string> = {
  xs: "size-8",
  sm: "size-10",
  md: "size-12",
  lg: "size-16",
  xl: "size-20",
};

export const Avatar: FC<AvatarProps> = ({
  src,
  alt = "",
  size = "md",
  border = false,
}) => {
  return (
    <Image
      height={80}
      width={80}
      src={src}
      alt={alt}
      className={[
        avatarSizes[size],
        "rounded-full object-cover",
        border ? "ring-1 ring-utility-gray-200 ring-inset" : "",
      ].join(" ")}
    />
  );
};

// --- PaginationDot ---
type PaginationDotProps = {
  page: number;
  total: number;
  size?: "sm" | "md" | "lg";
  onPageChange: (page: number) => void;
  color: string;
};

const dotSizes: Record<NonNullable<PaginationDotProps["size"]>, string> = {
  sm: "size-1.5",
  md: "size-2",
  lg: "size-2.5",
};

export const PaginationDot: FC<PaginationDotProps> = ({
  page,
  total,
  size = "md",
  onPageChange,
  color = "foreground",
}) => {
  return (
    <div
      className="flex items-center gap-2"
      role="tablist"
      aria-label="Pagination"
    >
      {Array.from({ length: total }).map((_, index) => {
        const dotPage = index + 1;
        const isActive = dotPage === page;

        return (
          <button
            key={dotPage}
            type="button"
            role="tab"
            aria-selected={isActive}
            aria-label={`Go to slide ${dotPage}`}
            onClick={() => onPageChange(dotPage)}
            className={[
              "rounded-full transition-all duration-300 ease-out",
              `bg-brand-solid`,
              dotSizes[size],
              isActive
                ? "bg-brand-solid w-6"
                : "bg-utility-gray-300 hover:bg-utility-gray-400",
            ].join(" ")}
          />
        );
      })}
    </div>
  );
};

// --- Testimonials data ---
const reviews = [
  {
    id: "review-01",
    quote:
      "Love the simplicity of the service and the prompt customer support. We can't imagine working without it.",
    author: {
      name: "Caleb King",
      title: "Head of Design, Layers",
      avatarUrl: "https://randomuser.me/api/portraits/men/32.jpg",
    },
  },
  {
    id: "review-02",
    quote:
      "We've been using Untitled to kick start every new project and can't imagine working without it.",
    author: {
      name: "André Laurent",
      title: "Product Manager, Wildcrafted",
      avatarUrl: "https://randomuser.me/api/portraits/men/45.jpg",
    },
  },
  {
    id: "review-03",
    quote:
      "Untitled has saved us thousands of hours of work. We're able to spin up projects and features faster.",
    author: {
      name: "Derek Wilkinson",
      title: "Head of Design, Layers",
      avatarUrl: "https://randomuser.me/api/portraits/men/11.jpg",
    },
  },
];

// Duration (ms) of the exit animation, before we swap in the new content.
const EXIT_DURATION = 250;

export const Testimonials = () => {
  const [displayIndex, setDisplayIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const pendingIndexRef = useRef<number | null>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  const goToPage = (page: number) => {
    const nextIndex = page - 1;
    if (nextIndex === displayIndex || pendingIndexRef.current === nextIndex)
      return;

    pendingIndexRef.current = nextIndex;
    setIsVisible(false);

    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      setDisplayIndex(nextIndex);
      pendingIndexRef.current = null;
      setIsVisible(true);
    }, EXIT_DURATION);
  };

  const review = reviews[displayIndex];

  return (
    <section
      id="testimonials"
      className="bg-background py-16 md:py-24 scroll-mt-20"
    >
      <div className="mx-auto max-w-container px-4 md:px-8">
        <div className="flex flex-col items-center gap-10">
          <h3 className="text-4xl font-semibold text-brand-secondary md:text-base">
            Testimonials
          </h3>
          <figure className="flex lg:h-full flex-col gap-8 text-center">
            <blockquote
              className="origin-bottom text-display-sm font-medium text-3xl text-balance text-foreground transition-all ease-out will-change-transform md:text-display-md"
              style={{
                transitionDuration: isVisible ? "500ms" : `${EXIT_DURATION}ms`,
                transitionDelay: isVisible ? "150ms" : "0ms",
                opacity: isVisible ? 1 : 0,
                transform: isVisible
                  ? "translateY(0) scale(1)"
                  : "translateY(10px) scale(0.98)",
              }}
            >
              {review.quote}
            </blockquote>

            <figcaption
              className="flex origin-bottom flex-col items-center gap-4 transition-all ease-out will-change-transform"
              style={{
                transitionDuration: isVisible ? "500ms" : `${EXIT_DURATION}ms`,
                transitionDelay: isVisible ? "200ms" : "0ms",
                opacity: isVisible ? 1 : 0,
                transform: isVisible
                  ? "translateY(0) scale(1)"
                  : "translateY(10px) scale(0.98)",
              }}
            >
              <div className="flex flex-col items-center gap-4">
                <Avatar
                  border
                  src={review.author.avatarUrl}
                  alt={review.author.name}
                  size="lg"
                />
                <div className="flex flex-col gap-1">
                  <p className="text-lg font-semibold text-foreground">
                    {review.author.name}
                  </p>
                  <cite className="text-base text-tertiary not-italic">
                    {review.author.title}
                  </cite>
                </div>
              </div>

              <div aria-hidden="true" className="flex gap-1">
                {Array.from({ length: 5 }).map((_, index) => (
                  <div
                    key={`${displayIndex}-${index}`}
                    className="transition-all ease-out"
                    style={{
                      transitionDuration: isVisible ? "300ms" : "0ms",
                      transitionDelay: isVisible
                        ? `${200 + index * 100}ms`
                        : "0ms",
                      opacity: isVisible ? 1 : 0,
                      transform: isVisible
                        ? "translateY(0) scale(1)"
                        : "translateY(6px) scale(0.9)",
                    }}
                  >
                    <StarIcon className="size-5 text-amber-400" />
                  </div>
                ))}
              </div>
            </figcaption>
          </figure>

          <PaginationDot
            page={displayIndex + 1}
            total={3}
            size="lg"
            onPageChange={goToPage}
            color={"foreground"}
          />
        </div>
      </div>
    </section>
  );
};
