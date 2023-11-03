"use client";

import { BsStar, BsStarFill, BsStarHalf } from "react-icons/bs";

const RatingStar = ({ rate }: { rate: number }) => {
  const returnStar = (starValue: number) => {
    if (starValue > rate) {
      return <BsStar className="text-base text-yellow-500" />;
    } else if (starValue === rate) {
      return <BsStarHalf className="text-base text-yellow-500" />;
    } else {
      return <BsStarFill className="text-base text-yellow-500" />;
    }
  };

  return (
    <div className="flex space-x-2 items-center text-sm">
      <div className="flex space-x-1 items-center">
        {[...Array(5)].map((star, index) => (
          <span key={index}>{returnStar(index + 1)}</span>
        ))}
      </div>
      <p>{rate} stars</p>
    </div>
  );
};

export default RatingStar;
