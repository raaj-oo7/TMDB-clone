import React, { useRef } from "react";
import "./scroller.css";
import MovieCard from "../movieCard/MovieCard";
import RecommendationCard from "../recommendationCard/Recommendation";
import ShimmerCardEffect from "../shimmerCardEffect/ShimmerCardEffect";
import ShimmerRecommendationEffect from "../shimmerRecommendationEffect/shimmerRecommendationEffect";

function Scroller({
  data,
  variant,
  movieCardVariant,
  category,
  isCategoryChanged = true,
  isLoading = false,
}) {
  const scrollerWrapperRef = useRef();
  const trendingScrollerRef = useRef();

  function handleScroller() {
    const currentScrollPos = trendingScrollerRef.current.scrollLeft;
    if (currentScrollPos > 25) {
      scrollerWrapperRef.current.style.setProperty("--opacity", 0);
    } else if (currentScrollPos === 0) {
      scrollerWrapperRef.current.style.setProperty("--opacity", 1);
    }
  }

  return (
    <div
      className={`scroller_wrapper ${variant} ${
        isCategoryChanged === true ? "scroller_transition" : ""
      }`}
      ref={scrollerWrapperRef}
    >
      <div
        className={`trending_scroller ${variant}`}
        ref={trendingScrollerRef}
        onScroll={() => handleScroller()}
      >
        {isLoading === true ? (
          <>
            {[...Array(20)].map((_, index) =>
              movieCardVariant === "recommendations" ? (
                <ShimmerRecommendationEffect key={index} />
              ) : (
                <ShimmerCardEffect key={index} variant={movieCardVariant} />
              )
            )}
          </>
        ) : (
          <>
            {movieCardVariant === "recommendations"
              ? data?.map(
                  (
                    movie,
                    index 
                  ) => (
                    <RecommendationCard
                      key={index}
                      data={movie}
                      category={category}
                    />
                  )
                )
              : data?.map((movie, index) => (
                  <MovieCard
                    key={index}
                    movie={movie}
                    variant={movieCardVariant}
                    category={category}
                  />
                ))}
            {movieCardVariant === "full" &&
              data.length % 5 !== 0 &&
              [...Array(5 - (data.length % 5))].map(
                (
                  _,
                  index 
                ) => (
                  <div key={index} style={{ width: "180px" }} /> 
                )
              )}
          </>
        )}
      </div>
    </div>
  );
}

Scroller.defaultProps = {
  variant: "default",
};

export default Scroller;
