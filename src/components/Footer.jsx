import PropTypes from "prop-types";

const Footer = ({ className = "" }) => {
  return (
    <footer
      className={`w-[1118px] flex flex-col items-start justify-start pt-16 pb-24 pr-5 pl-0 box-border gap-[63px] max-w-full text-left text-base text-off-balck font-callout mq800:gap-[16px] mq450:pt-[42px] mq450:pb-[62px] mq450:box-border mq1125:gap-[31px] ${className}`}
    >
      <img
        className="self-stretch relative max-w-full overflow-hidden max-h-full"
        loading="lazy"
        alt=""
        src="/vector-10.svg"
      />
      <div className="self-stretch flex flex-row items-start justify-between max-w-full gap-[20px] mq1125:flex-wrap">
        <div className="w-[449.1px] flex flex-row items-start justify-start gap-[16px] min-w-[449.1px] max-w-full mq800:flex-wrap mq800:min-w-full mq1125:flex-1">
          <div className="w-[331px] flex flex-col items-start justify-start gap-[23px] min-w-[331px] shrink-0 max-w-full mq800:flex-1">
            <h3 className="m-0 relative text-5xl leading-[26px] font-semibold font-inherit inline-block min-w-[112px] mq450:text-lgi mq450:leading-[21px]">
              Reach us
            </h3>
            <div className="flex flex-row items-start justify-start gap-[25px]">
              <img
                className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
                loading="lazy"
                alt=""
                src="/bxsphonecall.svg"
              />
              <div className="relative inline-block min-w-[123px] whitespace-nowrap">
                +1 817-993 9581
              </div>
            </div>
            <div className="flex flex-row items-start justify-start gap-[25px]">
              <img
                className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
                loading="lazy"
                alt=""
                src="/icsharpemail.svg"
              />
              <div className="relative whitespace-nowrap">
                it.duy.duc@gmail.com
              </div>
            </div>
            <div className="self-stretch flex flex-row items-start justify-start gap-[25px]">
              <img
                className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
                loading="lazy"
                alt=""
                src="/carbonlocationfilled.svg"
              />
              <div className="flex-1 relative">{`Fake Address Folsom St. `}</div>
            </div>
          </div>
          <div className="flex flex-col items-start justify-start gap-[24px] min-w-[145px] shrink-0 mq800:flex-1">
            <h3 className="m-0 w-28 h-[26px] relative text-5xl leading-[26px] font-semibold font-inherit inline-block opacity-[0] mq450:text-lgi mq450:leading-[21px]">
              Reach us
            </h3>
            <div className="flex flex-row items-start justify-start gap-[25px]">
              <img
                className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
                loading="lazy"
                alt=""
                src="/bxsphonecall-1.svg"
              />
              <div className="relative inline-block min-w-[96px]">
                Duy.linkedIn
              </div>
            </div>
            <div className="flex flex-row items-start justify-start gap-[25px]">
              <img
                className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
                loading="lazy"
                alt=""
                src="/icsharpemail-1.svg"
              />
              <div className="relative inline-block min-w-[71px]">@itsduyt</div>
            </div>
          </div>
        </div>
        <div className="w-[456.4px] rounded-2xl bg-white overflow-hidden shrink-0 flex flex-col items-start justify-start py-6 pr-0 pl-6 box-border gap-[24px] min-w-[456.4px] max-w-full text-5xl mq800:min-w-full mq1125:flex-1">
          <h3 className="m-0 relative text-inherit font-semibold font-inherit mq450:text-lgi">
            Join Our Newsletter
          </h3>
          <div className="w-[448px] relative text-base text-not-selected inline-block max-w-[104%] shrink-0">{`Stay informed with updates to propolytics and the team `}</div>
          <div className="w-[408.4px] rounded-xl bg-whitesmoke-200 overflow-hidden flex flex-col items-end justify-center max-w-full">
            <button className="cursor-pointer [border:none] py-[9px] px-2.5 bg-primary-color overflow-hidden flex flex-row items-center justify-center hover:bg-cornflowerblue">
              <div className="relative text-base font-semibold font-callout text-white text-left inline-block min-w-[82px]">
                Subscribe
              </div>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

Footer.propTypes = {
  className: PropTypes.string,
};

export default Footer;
