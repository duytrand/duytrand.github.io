import { useMemo } from "react";
import PropTypes from "prop-types";

const UVPsPoints = ({
  className = "",
  group105,
  discoverProperty,
  discoverRealEstateInvestm,
  propFlex,
  propWidth,
}) => {
  const uVPsPointsStyle = useMemo(() => {
    return {
      flex: propFlex,
      width: propWidth,
    };
  }, [propFlex, propWidth]);

  return (
    <div
      className={`flex-1 shadow-[0px_2px_4px_1px_rgba(8,_143,_225,_0.1)] rounded-2xl box-border overflow-hidden flex flex-col items-start justify-center py-5 pr-[17px] pl-[21px] gap-[24px] max-w-full text-left text-5xl text-primary-color font-callout border-[3px] border-solid border-primary-color ${className}`}
      style={uVPsPointsStyle}
    >
      <div className="self-stretch flex flex-row items-center justify-start gap-[16px] mq450:flex-wrap">
        <div className="overflow-hidden flex flex-col items-center justify-start min-w-[100px] mq450:flex-1">
          <img
            className="w-[100px] h-[100px] relative mq450:self-stretch mq450:w-auto"
            loading="lazy"
            alt=""
            src={group105}
          />
        </div>
        <div className="flex-1 overflow-hidden flex flex-col items-start justify-start py-4 px-3 box-border min-w-[123px]">
          <h3 className="m-0 self-stretch relative text-inherit font-semibold font-inherit mq450:text-lgi">
            {discoverProperty}
          </h3>
        </div>
      </div>
      <div className="self-stretch h-[74px] relative text-base whitespace-pre-wrap inline-block">
        {discoverRealEstateInvestm}
      </div>
    </div>
  );
};

UVPsPoints.propTypes = {
  className: PropTypes.string,
  group105: PropTypes.string,
  discoverProperty: PropTypes.string,
  discoverRealEstateInvestm: PropTypes.string,

  /** Style props */
  propFlex: PropTypes.any,
  propWidth: PropTypes.any,
};

export default UVPsPoints;
