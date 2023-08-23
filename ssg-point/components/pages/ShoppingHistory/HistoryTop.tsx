import React from "react";

const HistoryTop = () => {
  return (
    <div>
      <h3 className="hidden">쇼핑 히스토리</h3>
      <div className="py-[40px] px-[20px]">
        <p className="mt-[8px] text-[14px] font-medium leading-[1.71] text-[#767676]">
          <strong
            className="relative inline font-extrabold text-black 
              after:bg-[#fed6e8] after:absolute
              after:w-[100%] after:inline-block after:h-[15px] after:z-[-1] after:left-0 after:bottom-[-5px]"
          >
            배송윤
          </strong>
          님과 신세계포인트는 <br />
          올해 이렇게 함께 했어요.
        </p>
        <p className="mb-2 pt-2 text-[14px] leading-[1.71] text-[#767676]">
          2023-01-01 ~ 2023-08-20
        </p>
      </div>
    </div>
  );
};

export default HistoryTop;
