import React, { useState } from "react";
import ProductCard from "./ProductCard";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { mens_kurat } from "./Data";

const ProductCardCaraousel = ({title}) => {
  const responsive = {
    0: { items: 1 },

    568: { items: 2 },
    1024: { items: 4 },
  };
//   const [activeIndex, setActiveIndex] = useState(0);

//   const slidePos = () => setActiveIndex(activeIndex + 1);
//   const slideNeg = () => setActiveIndex(activeIndex - 1);

//   const synActiveIndex = ({ item }) => setActiveIndex(item);
  const items = mens_kurat.map((item) => <ProductCard product={item} />);

  return (
    <div>
      <div className="relative">

        <div className="relative p-5">
            <h3 className="font-bold text-2xl pl-8 ">{title}</h3>
          <AliceCarousel
            mouseTracking
    
            disableButtonsControls
            items={items}
            responsive={responsive}
          />
          {/* <div className="icon absolute right-0 top-40 bg-slate-600 hover:bg-slate-700 text-white px-1 py-2 lg:px-1 lg:py-2  rounded-sm" onClick={slidePos}>
            <ArrowForwardIosIcon />
          </div>

          <div className="icon absolute left-1 top-40 bg-slate-600 hover:bg-slate-700 text-white px-1 py-2 lg:p-1 lg:py-2 rounded-sm" onClick={slideNeg}>
            <ArrowBackIosNewIcon />
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default ProductCardCaraousel;
