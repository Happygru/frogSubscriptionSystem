import ABLTemplateCard from "@/Components/ABLTemplateCard";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Templates = () => {
  var settings = {
    dots: true,
    speed: 500,
    dotsClass: "slick-dots template-dots",
    slidesToShow: 6,
    infinite: false,
    responsive: [
      {
        breakpoint: 2300,
        settings: {
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 1700, // apply below 1700px
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1440, // apply below 1440px
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1200, // apply below 1200px
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 900, // apply below 900px
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <h1 className="text-2xl font-bold text-white">Offical Templates</h1>
      <h1 className="mt-8 mb-6 text-lg font-bold text-white">
        General Knowledge
      </h1>
      <div className="flex w-full flex-wrap justify-between gap-4">
        <Slider {...settings} className="w-full">
          <div className="!flex justify-center">
            <ABLTemplateCard title="What Income Do I need?" />
          </div>
          <div className="!flex justify-center">
            <ABLTemplateCard title="Gen-Z Dictionary" />
          </div>
          <div className="!flex justify-center">
            <ABLTemplateCard title="How Do I clean..." />
          </div>
          <div className="!flex justify-center">
            <ABLTemplateCard title="Advice from a 1" />
          </div>
          <div className="!flex justify-center">
            <ABLTemplateCard title="Advice from a 2" />
          </div>
          <div className="!flex justify-center">
            <ABLTemplateCard title="Advice from a 3" />
          </div>
          <div className="!flex justify-center">
            <ABLTemplateCard title="Advice from a 4" />
          </div>
        </Slider>
      </div>
      <h1 className="mt-8 mb-6 text-lg font-bold text-white">Marketing</h1>
      <div className="flex w-full flex-wrap gap-4">
        <Slider {...settings} className="w-full">
          <div className="!flex justify-center">
            <ABLTemplateCard title="What Income Do I need?" />
          </div>
          <div className="!flex justify-center">
            <ABLTemplateCard title="Gen-Z Dictionary" />
          </div>
          <div className="!flex justify-center">
            <ABLTemplateCard title="How Do I clean..." />
          </div>
          <div className="!flex justify-center">
            <ABLTemplateCard title="Advice from a 1" />
          </div>
          <div className="!flex justify-center">
            <ABLTemplateCard title="Advice from a 2" />
          </div>
          <div className="!flex justify-center">
            <ABLTemplateCard title="Advice from a 3" />
          </div>
          <div className="!flex justify-center">
            <ABLTemplateCard title="Advice from a 4" />
          </div>
        </Slider>
      </div>
    </>
  );
};

export default Templates;
