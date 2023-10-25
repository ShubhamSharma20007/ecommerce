import React from 'react'
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

const items = [
  {
    img: "https://images.unsplash.com/photo-1445205170230-053b83016050?auto=format&fit=crop&q=80&w=1471&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    img: "https://images.unsplash.com/photo-1464699908537-0954e50791ee?auto=format&fit=crop&q=80&w=2071&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    img: "https://images.unsplash.com/photo-1596484552993-aec4311d3381?auto=format&fit=crop&q=60&w=600&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzJ8fGZhc2hpb24lMjBkZXNpZ258ZW58MHx8MHx8fDA%3D",
  },{
    img:"https://images.unsplash.com/photo-1579986736295-338a3a637862?auto=format&fit=crop&q=60&w=600&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTA3fHxmYXNoaW9uJTIwZGVzaWdufGVufDB8fDB8fHww"
  }
];

const Carousel = () => {
  return (
    <>
      <AliceCarousel
        mouseTracking
        items={items.map((item, index) => (
          <img key={index} width='100%'  src={item.img} alt="" role='presentation' className='img-fluid' srcSet="" />
        ))}
        infinite
        disableButtonsControls
        animationDuration={3000}
        autoPlay
        controlsStrategy="alternate"
      />
    </>
  )
}

export default Carousel
