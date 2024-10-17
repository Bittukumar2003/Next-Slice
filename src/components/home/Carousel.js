import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const imageProp = ["https://cmx.weightwatchers.com/assets-proxy/weight-watchers/image/upload/v1594406683/visitor-site/prod/ca/burgers_mobile_my18jv","https://www.engelvoelkers.com/wp-content/uploads/2014/07/pizza-stock.jpg","https://th.bing.com/th?id=OIP.nOWf5KBiVWOC_DzU5bSw8QHaEr&w=314&h=198&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2"];

function CarouselComponent() {
  return (
    <Carousel
      autoPlay
      navButtonsAlwaysVisible
      infiniteLoop
      showStatus={false}
      emulateTouch
      showThumbs={false}
    >
      {imageProp.map((image, index) => {
        return (
          <div
            key={index}
            style={{ maxHeight: "36rem" }}
            className="object-center brightness-50"
          >
            <img
              src={`${image}`}
              alt="pizza"
            />
          </div>
        );
      })}
    </Carousel>
  );
}

export default CarouselComponent;
