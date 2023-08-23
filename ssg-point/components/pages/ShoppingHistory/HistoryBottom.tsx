import { EventType } from "@/types/event";
import React from "react";

//bar_graph 태그의 height는  (적립포인트 / 총 보유 포인트 * 100)%

const HistoryBottom = () => {
  const pointWrap = "flex justify-between items-center ";
  const pointTitle = "text-[13px] font-semibold leading-[21px]";
  const pointTxt = "text-[13px] font-semibold leading-[21px]";
  const pointContent = "flex text-2xl leading-[30px] font-extrabold";
  const barGraph = "relative w-[24px] rounded-[30px] mt-auto ";

  // before 속성에 calc 주기 위해...
  const beforeStyle: any = {
    content: "''",
    display: "block",
    width: `calc(100% - 8px)`,
    height: "196px",
    background: "#fff",
    borderRadius: "14px",
    position: "absolute",
    top: "1%",
    left: "1%",
    zIndex: "0",
  };


  const EventData: EventType[] = [
    { id: '1', img_url: "" }, 
    { id: '2', img_url: "" }, 
    { id: '3', img_url: "" }
  ];

  return (
    <div className="px-[20px] pb-[50px]">
      {/* 사용가능 포인트 */}
      <div className="point_lists">
        <div className={`${pointWrap} border-t border-black h-[74px]`}>
          <div className="point_head pl-4">
            <p className={pointTitle}>신세계 포인트</p>
            <p className={pointTxt}>(사용가능)</p>
          </div>
          <p
            className={`${pointContent} after:bg-point-img
             after:bg-contain after:w-[33px] after:h-[30px] after:ml-[7px]`}
          >
            0
          </p>
        </div>
      </div>

      {/* 포인트 그래프 */}
      <div
        className="flex relative w-[100%] h-[200px] truncate rounded-2xl bg-gradient 
      "
      >
        <div style={beforeStyle}></div>
        <div className="point_use_cont relative flex-1 h-[100%] p-4">
          <p className="p_use font-semibold text-[13px] leading-5">
            신세계 포인트 <br />
            <span>이용</span>
          </p>
          <p className="p_year absolute text-[13px] left-4 bottom-[18px]">
            2023년
          </p>
        </div>

        <div className="point_bar_wrap flex-1 flex relative ">
          <ul className="bar_acc mr-[55px]">
            <li className="flex flex-col items-end h-[100%] pt-[45px] pb-[1px]">
              <div className={`${barGraph}`} style={{}}>
                <span>
                  <span className="point_cnt absolute text-[11px] top-[-30px] left-[50%] translate-x-[49%] translate-y-[49%] bg-[#ea035c] h-[22px] z-1 rounded-[4px] leading-[21px] px-[7px] w-auto font-extrabold">
                    0P
                  </span>
                </span>
              </div>
              <p></p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default HistoryBottom;
