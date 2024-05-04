import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";
import { usePosts } from "../contexts/HomepageContexts";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

function RandomProduct() {
  const { products } = usePosts();
  console.log(products);
  const randomNumbersArray = Array.from(
    { length: 5 },
    () => Math.floor(Math.random() * 20) + 1
  );

  const RandomProducts = products.filter((data) =>
    randomNumbersArray.includes(data.id)
  );

  return (
    <Swiper
      className=" bg-white   text-black  h-72   w-full   mt-10  border-2 "
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={1}
      //   pagination={{ clickable: true }}
      pagination={{
        clickable: true,
        renderBullet: (index, className) => {
          return `<span class="${className} bg-red-500   mx-2"></span>`; // هنا تغيير لون الدوائر
        },
      }}
      scrollbar={{ draggable: true }}
    >
      {RandomProducts.map((data) => (
        <SwiperSlide className="flex   bg-white justify-center items-center  gap-14">
          <div className="   w-36  flex  justify-center items-center gap-6 flex-col">
            <p className=" h-6 overflow-hidden">{data.title}</p>
            <h1 className=" font-bold  text-2xl">
              Up to {data.id}% off Voucher
            </h1>
            <Link
              to="/"
              className=" flex items-center justify-center gap-2    "
            >
              <p className=" border-b-black border-b-2">Shop Now</p>
              <FontAwesomeIcon icon={faArrowRight} />
            </Link>
          </div>
          <img src={data.image} alt={data.id} className="  w-52   h-52" />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default RandomProduct;
