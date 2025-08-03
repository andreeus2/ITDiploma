import { useState } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import "../Styles/Home.css";
import { IMG } from "../Products";

export default function HomePage() {
  const [slide, setSlide] = useState(0);
  const nextSlide = () => {
    setSlide(slide === IMG.length -1 ? 0 : slide + 1);
  };

  const prevSlide = () => {
    setSlide(slide === 0 ? IMG.length -1 : slide - 1);
  };

  return (
    <div className="font-serif bg-black text-white min-h-screen">
      <header className="text-center py-10">
        <h1 className="text-4xl font-bold">Koala Tees</h1>
      </header>
      <div className="text_img">
          <div className="carousel_container">
            <div className="carousel">
              <BsArrowLeftCircleFill onClick={prevSlide} className="arrow arrow-left" />
              {IMG.map((item, idx) => {
                console.log(idx)
                return (
                  <img
                    src={item.src}
                    alt={item.alt}
                    className={slide === idx ? "slide" : "slide slide-hidden"}
                  />
                );
              })}
              <BsArrowRightCircleFill
                onClick={nextSlide}
                className="arrow arrow-right"
              />
              <span className="indicators">
                {IMG.map((_, idx) => {
                  return (
                    <button
                      key={idx}
                      className={
                        slide === idx ? "indicator" : "indicator indicator-inactive"
                      }
                      onClick={() => setSlide(idx)}
                    ></button>
                  );
                })}
              </span>
            </div>
          </div>
          <div className="container_text">
                <div>
                  <p>Koala T-shirt is a small store in Sydney CBD that sells t-shirts. 
                    It was founded in 1992 by Mr. Koah La and his wife Tee Shar. 
                    The store aims to provide t-shirts that accommodates customers of all sizes.</p>
                </div>
          </div>
        </div>

      <section className="max-w-3xl mx-auto p-10">
        <h2 className="text-2xl font-semibold mb-4">About us</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse pulvinar,
          purus at pretium laoreet, erat justo ultrices massa, nec feugiat sem velit non
          libero. Nulla facilisi. Aliquam erat volutpat.
        </p>
      </section>

      <footer className="text-center text-gray-600 py-6 border-t border-gray-700">
        &copy; 2025 © Koala T-shirt. All rights reserved.
      </footer>
    </div>
  );
}
