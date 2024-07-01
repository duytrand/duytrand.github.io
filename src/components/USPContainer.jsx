import UVPsPoints from "./UVPsPoints";
import PropTypes from "prop-types";

const USPContainer = ({ className = "" }) => {
  return (
    <section
      className={`w-[1118px] flex flex-row flex-wrap items-start justify-start py-0 pr-5 pl-0 box-border gap-[24px_19px] min-h-[524px] max-w-full text-left text-5xl text-primary-color font-callout ${className}`}
    >
      <div className="w-[350px] flex flex-row items-center justify-center max-w-full">
        <UVPsPoints
          group105="/group-105.svg"
          discoverProperty="Discover Property"
          discoverRealEstateInvestm="Discover real estate investment opportunities  across the US"
        />
      </div>
      <div className="w-[353px] shadow-[0px_2px_4px_1px_rgba(8,_143,_225,_0.1)] rounded-2xl box-border overflow-hidden shrink-0 flex flex-row items-center justify-center py-5 px-[22px] max-w-full border-[3px] border-solid border-primary-color">
        <div className="flex-1 overflow-hidden flex flex-col items-start justify-start pt-4 px-3 pb-[26px] gap-[16px]">
          <h3 className="m-0 self-stretch relative text-inherit font-semibold font-inherit mq450:text-lgi">
            Effortless Seller Connectivity
          </h3>
          <div className="self-stretch relative text-base">
            Connect with sellers seamlessly on our platform, streamlining offers
            for swift decisions.
          </div>
        </div>
      </div>
      <div className="w-[353px] shadow-[0px_2px_4px_1px_rgba(8,_143,_225,_0.1)] rounded-2xl box-border overflow-hidden shrink-0 flex flex-row items-center justify-center py-5 px-[22px] max-w-full border-[3px] border-solid border-primary-color">
        <div className="flex-1 overflow-hidden flex flex-col items-start justify-start pt-4 px-3 pb-[26px] gap-[16px]">
          <h3 className="m-0 self-stretch h-[72px] relative text-inherit font-semibold font-inherit inline-block mq450:text-lgi">
            <p className="m-0">Invest Smarter</p>
          </h3>
          <div className="self-stretch relative text-base">
            Our AI forecasts give investors strategic property value insights
            for informed decisions.
          </div>
        </div>
      </div>
      <div className="w-[353px] shadow-[0px_2px_4px_1px_rgba(8,_143,_225,_0.1)] rounded-2xl box-border overflow-hidden shrink-0 flex flex-row items-center justify-center py-5 px-[22px] max-w-full border-[3px] border-solid border-primary-color">
        <div className="flex-1 overflow-hidden flex flex-col items-start justify-start pt-4 px-3 pb-[26px] gap-[16px]">
          <h3 className="m-0 self-stretch relative text-inherit font-semibold font-inherit mq450:text-lgi">
            Advanced Property Forecasting
          </h3>
          <div className="self-stretch relative text-base">
            We provide cutting-edge tools for precise prediction of future
            property values.
          </div>
        </div>
      </div>
      <div className="w-[353px] shadow-[0px_2px_4px_1px_rgba(8,_143,_225,_0.1)] rounded-2xl box-border overflow-hidden shrink-0 flex flex-row items-center justify-center py-5 px-[22px] max-w-full border-[3px] border-solid border-primary-color">
        <div className="flex-1 overflow-hidden flex flex-col items-start justify-start pt-4 px-3 pb-[26px] gap-[16px]">
          <h3 className="m-0 self-stretch relative text-inherit font-semibold font-inherit mq450:text-lgi">
            Integrated Investment Support
          </h3>
          <div className="self-stretch relative text-base">
            Our AI approach integrates property purchase and loans with thorough
            analysis.
          </div>
        </div>
      </div>
      <UVPsPoints
        group105="/group-105-1.svg"
        discoverProperty="Maximize ROI"
        discoverRealEstateInvestm="With the help of AI maximize your ROI when investing"
        propFlex="unset"
        propWidth="350px"
      />
    </section>
  );
};

USPContainer.propTypes = {
  className: PropTypes.string,
};

export default USPContainer;
