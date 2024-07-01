import FrameComponent from "./FrameComponent";
import PropTypes from "prop-types";

const FrameComponent1 = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch flex flex-col items-start justify-start gap-[32px] max-w-full text-left text-29xl text-black font-callout mq800:gap-[16px] ${className}`}
    >
      <div className="w-[1035px] flex flex-col items-start justify-start py-0 pr-5 pl-0 box-border gap-[16px] max-w-full">
        <h1 className="m-0 w-[712px] relative text-inherit font-semibold font-inherit inline-block max-w-full mq800:text-19xl mq450:text-10xl">
          Discover
        </h1>
        <div className="self-stretch relative text-xl mq450:text-base">
          Discover Homes across the US offering the Greatest ROI in your Price
          range
        </div>
      </div>
      <div className="self-stretch h-[332px] relative max-w-full text-5xl mq1350:h-auto mq1350:min-h-[332]">
        <div className="absolute top-[2px] left-[0px] w-full overflow-hidden flex flex-row items-start justify-start py-0 px-0 box-border gap-[24px] max-w-full h-full mq1350:flex-wrap mq1350:justify-center">
          <div className="h-[330.5px] w-[280.5px] shadow-[0px_0px_2px_1px_rgba(10,_144,_225,_0.05)] rounded-xl bg-white box-border overflow-hidden shrink-0 flex flex-col items-center justify-start pt-0 px-0 pb-4 gap-[8px] border-[0.5px] border-solid border-input-field">
            <div className="self-stretch flex-1 overflow-hidden flex flex-col items-center justify-start pt-2 px-2 pb-0">
              <img
                className="self-stretch flex-1 relative rounded-xl max-w-full overflow-hidden max-h-full object-cover"
                loading="lazy"
                alt=""
                src="/frame-14347@2x.png"
              />
            </div>
            <div className="self-stretch overflow-hidden flex flex-col items-center justify-start pt-2 px-4 pb-0 gap-[16px]">
              <div className="self-stretch flex flex-row items-center justify-between pt-0 px-0 pb-2 gap-[5px]">
                <div className="w-[154px] relative font-medium inline-block shrink-0 whitespace-nowrap mq450:text-lgi">
                  $700,000
                </div>
                <div className="rounded-2xl [background:linear-gradient(180deg,_#58acdf,_#088fe1)] overflow-hidden flex flex-row items-center justify-center py-1 px-3 whitespace-nowrap text-base text-white">
                  <div className="relative font-semibold whitespace-pre-wrap inline-block min-w-[65px]">
                    15% ROI
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-col items-start justify-start gap-[6px]">
                <div className="self-stretch h-3 rounded-mid bg-whitesmoke-100 overflow-hidden shrink-0" />
                <div className="w-[166px] h-3 rounded-mid bg-whitesmoke-100 overflow-hidden shrink-0" />
              </div>
              <div className="self-stretch flex flex-row items-center justify-between gap-[18px] text-base text-off-balck">
                <div className="rounded-mid overflow-hidden flex flex-row items-center justify-center py-1 px-3 gap-[8px]">
                  <div className="relative font-semibold inline-block min-w-[10px]">
                    2
                  </div>
                  <img
                    className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
                    loading="lazy"
                    alt=""
                    src="/frame-1000001798.svg"
                  />
                </div>
                <div className="rounded-mid overflow-hidden flex flex-row items-center justify-center py-1 px-3 gap-[8px]">
                  <div className="relative font-semibold inline-block min-w-[10px]">
                    3
                  </div>
                  <img
                    className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
                    loading="lazy"
                    alt=""
                    src="/frame-1000001789.svg"
                  />
                </div>
                <div className="rounded-mid overflow-hidden flex flex-row items-center justify-center py-1 px-3">
                  <div className="h-6 relative inline-block min-w-[56px] whitespace-nowrap">
                    <span className="font-semibold font-callout">{`1670 `}</span>
                    <span>ft</span>
                    <sup>
                      <span>2</span>
                    </sup>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <FrameComponent
            frame14347="/frame-14347-1@2x.png"
            prop="$850,000"
            rOI="18%  ROI"
            frame1000001789="/frame-1000001789.svg"
            prop1="1570 "
          />
          <FrameComponent
            frame14347="/frame-14347-2@2x.png"
            prop="$625,000"
            rOI="16%  ROI"
            frame1000001789="/frame-1000001789-2.svg"
            prop1="1490 "
          />
          <FrameComponent
            frame14347="/frame-14347-3@2x.png"
            prop="$1,020,000"
            rOI="9%  ROI"
            frame1000001789="/frame-1000001789.svg"
            prop1="1920 "
          />
          <div className="h-[308px] w-[280px] shadow-[0px_2px_4px_1px_rgba(0,_0,_0,_0.1)] rounded-2xl bg-white overflow-hidden shrink-0 flex flex-col items-center justify-start pt-0 px-0 pb-4 box-border gap-[8px]">
            <img
              className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-cover"
              loading="lazy"
              alt=""
              src="/frame-14346@2x.png"
            />
            <div className="self-stretch overflow-hidden flex flex-col items-center justify-start pt-2 px-4 pb-4 gap-[16px]">
              <div className="self-stretch flex flex-row items-center justify-between pt-0 px-0 pb-2 gap-[13px]">
                <div className="w-[154px] relative font-medium inline-block shrink-0 whitespace-nowrap mq450:text-lgi">
                  $640,000
                </div>
                <div className="h-8 w-[81px] rounded-2xl [background:linear-gradient(180deg,_#58acdf,_#088fe1)] overflow-hidden shrink-0 flex flex-row items-center justify-center py-1 px-[11px] box-border whitespace-nowrap text-base text-white">
                  <div className="self-stretch flex-1 relative font-semibold whitespace-pre-wrap">
                    8% ROI
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-row items-center justify-between gap-[-16.5px] text-base font-lato">
                <div className="w-[90px] rounded-mid bg-whitesmoke-100 overflow-hidden shrink-0 flex flex-row items-center justify-center py-1 px-3 box-border gap-[8px] whitespace-nowrap text-xs">
                  <div className="flex-1 relative">
                    <span>
                      <span>{` `}</span>
                      <span className="text-base">4</span>
                    </span>
                    <span>
                      <span>{` `}</span>
                      <span className="font-light font-lato">bds</span>
                    </span>
                  </div>
                  <img
                    className="h-6 w-6 relative overflow-hidden shrink-0"
                    alt=""
                    src="/benefits-row-two.svg"
                  />
                </div>
                <div className="w-[81px] rounded-mid bg-whitesmoke-100 overflow-hidden shrink-0 flex flex-row items-center justify-center py-1 px-3 box-border gap-[4px] whitespace-nowrap z-[1]">
                  <div className="h-[19px] flex-1 relative inline-block">
                    <span>
                      <span>2</span>
                    </span>
                    <span>
                      <span>{` `}</span>
                      <span className="font-light font-lato">ba</span>
                    </span>
                  </div>
                  <img
                    className="h-6 w-6 relative overflow-hidden shrink-0"
                    alt=""
                    src="/frame-1000001789-4.svg"
                  />
                </div>
                <div className="rounded-mid bg-whitesmoke-100 overflow-hidden flex flex-row items-center justify-center py-1 px-3 gap-[8px] whitespace-nowrap z-[2] font-callout">
                  <div className="h-6 w-[54px] relative inline-block">
                    <span className="font-medium">
                      <span className="text-xs">1</span>
                      <span>25</span>
                    </span>
                    <span>
                      <span className="font-medium">{`0 `}</span>
                      <span className="font-light font-lato">spft</span>
                    </span>
                  </div>
                  <img
                    className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
                    alt=""
                    src="/frame-14344arrowproperty-23.svg"
                  />
                </div>
              </div>
              <div className="self-stretch h-3.5 flex flex-col items-start justify-start pt-0 px-0 pb-0 box-border gap-[6px]">
                <div className="self-stretch h-3 rounded-mid bg-whitesmoke-100 overflow-hidden shrink-0" />
                <div className="w-[166px] h-3 rounded-mid bg-whitesmoke-100 overflow-hidden shrink-0" />
              </div>
            </div>
          </div>
        </div>
        <div className="absolute h-full top-[0px] bottom-[0px] left-[928px] [background:linear-gradient(90deg,_rgba(255,_255,_255,_0),_#fff_75%)] w-[341px] overflow-hidden z-[1]" />
      </div>
    </section>
  );
};

FrameComponent1.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent1;
