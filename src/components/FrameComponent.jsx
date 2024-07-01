import PropTypes from "prop-types";

const FrameComponent = ({
  className = "",
  frame14347,
  prop,
  rOI,
  frame1000001789,
  prop1,
}) => {
  return (
    <div
      className={`h-[330.5px] w-[280.5px] shadow-[0px_0px_2px_1px_rgba(10,_144,_225,_0.05)] rounded-xl bg-white box-border overflow-hidden shrink-0 flex flex-col items-center justify-start pt-0 px-0 pb-4 gap-[8px] text-left text-5xl text-black font-callout border-[0.5px] border-solid border-input-field ${className}`}
    >
      <div className="self-stretch flex-1 overflow-hidden flex flex-col items-center justify-start pt-2 px-2 pb-0">
        <img
          className="self-stretch flex-1 relative rounded-xl max-w-full overflow-hidden max-h-full object-cover"
          loading="lazy"
          alt=""
          src={frame14347}
        />
      </div>
      <div className="self-stretch overflow-hidden flex flex-col items-center justify-start pt-2 px-4 pb-0 gap-[16px]">
        <div className="self-stretch flex flex-row items-center justify-between pt-0 px-0 pb-2 gap-[5px]">
          <div className="w-[154px] relative font-medium inline-block shrink-0 whitespace-nowrap mq450:text-lgi">
            {prop}
          </div>
          <div className="rounded-2xl [background:linear-gradient(180deg,_#58acdf,_#088fe1)] overflow-hidden flex flex-row items-center justify-center py-1 px-3 whitespace-nowrap text-base text-white">
            <div className="relative font-semibold whitespace-pre-wrap inline-block min-w-[65px]">
              {rOI}
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
              src={frame1000001789}
            />
          </div>
          <div className="rounded-mid overflow-hidden flex flex-row items-center justify-center py-1 px-3">
            <div className="h-6 relative inline-block min-w-[56px] whitespace-nowrap">
              <span className="font-semibold font-callout">{prop1}</span>
              <span className="font-light">ft</span>
              <sup>
                <span className="font-light">2</span>
              </sup>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

FrameComponent.propTypes = {
  className: PropTypes.string,
  frame14347: PropTypes.string,
  prop: PropTypes.string,
  rOI: PropTypes.string,
  frame1000001789: PropTypes.string,
  prop1: PropTypes.string,
};

export default FrameComponent;
