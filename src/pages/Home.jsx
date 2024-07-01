import FrameComponent1 from "../components/FrameComponent1";
import USPContainer from "../components/USPContainer";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className="w-full relative bg-white overflow-hidden flex flex-col items-start justify-start py-0 pr-0 pl-[171px] box-border gap-[40px] leading-[normal] tracking-[normal] mq800:gap-[20px] mq800:pl-[85px] mq800:box-border mq450:pl-5 mq450:box-border">
      <div className="w-[1098px] h-[628px] relative max-w-full flex items-center justify-center">
        <img
          className="w-full h-full object-contain absolute left-[0px] top-[0px] [transform:scale(1.311)]"
          alt=""
          src="/frame-1000001779@2x.png"
        />
      </div>
      <FrameComponent1 />
      <section className="w-[1118px] flex flex-col items-start justify-start pt-0 pb-6 pr-5 pl-0 box-border gap-[24px] max-w-full text-left text-29xl text-off-balck font-callout">
        <h1 className="m-0 w-[1044px] relative text-inherit font-semibold font-inherit inline-block max-w-full mq800:text-19xl mq450:text-10xl">
          How to Maximize ROI
        </h1>
        <div className="self-stretch relative text-xl text-darkslategray mq450:text-base">
          Maximize real estate ROI with AI. Accurately forecast values, identify
          high ROI properties, and streamline seller connections for enhanced
          nationwide investment opportunities.
        </div>
      </section>
      <USPContainer />
      <Footer />
    </div>
  );
};

export default Home;
