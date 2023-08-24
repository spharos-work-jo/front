import { EventType } from "@/types/event";
import React from "react";

//bar_graph 태그의 height는  (적립포인트 / 총 보유 포인트 * 100)%

const HistoryBottom = () => {
  const pointWrap = "flex justify-between items-center ";
  const pointTitle = "text-[13px] font-semibold leading-[21px]";
  const pointTxt = "text-[13px] font-semibold leading-[21px]";
  const pointContent = "flex text-2xl leading-[30px] font-extrabold";
  const barGraph = "relative w-[24px] rounded-[30px] mt-auto ";

  interface AfBe {
    [key: string]: string | number;
  }

  // before 속성에 calc 주기 위해...
  const beforeStyle: AfBe = {
    content: "''",
    display: "block",
    width: `calc(100% - 4px)`,
    height: "196px",
    background: "#fff",
    borderRadius: "14px",
    position: "absolute",
    top: "1%",
    left: "0.2%",
    zIndex: "0",
  };

  const pntCntAfter: AfBe = {
    content: "''",
    position: "absolute",
    zIndex: "1",
    marginLeft: "-6px",
    width: 0,
    height: 0,
    borderRight: "6px solid transparent",
    borderLeft: "6px solid transparent",
  };

  const EventData: EventType[] = [
    { id: "1", img_url: "" },
    { id: "2", img_url: "" },
    { id: "3", img_url: "" },
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

        {/* 포인트 그래프 */}
        <div className="flex relative w-[100%] h-[200px] truncate rounded-2xl bg-gradient">
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

          <div className="point_bar_wrap flex-1 flex">
            {/* 포인트 적립 그래프 */}
            <ul className="bar_acc mr-[55px] h-[100%]">
              <li className="flex flex-col items-end h-[100%] pt-[45px] pb-[16px]">
                <div
                  className={`${barGraph} relative`}
                  style={{ height: "70%", background: "#ea035c" }}
                >
                  <span className="point_cnt absolute text-white text-[11px] top-[-49px] left-[-116%] translate-x-[49%] translate-y-[49%] bg-[#ea035c] h-[22px] z-1 rounded-[4px] leading-[21px] px-[7px] w-auto font-extrabold min-w-[39px] ">
                    0P
                  </span>
                  <span
                    className="top-[-17px] left-[58%]  border-t-4 border-[#ea035c]"
                    style={pntCntAfter}
                  ></span>
                </div>
                <p className="text-[13px] leading-[21px] z-10">적립</p>
              </li>
            </ul>
            {/* 포인트 사용 그래프 */}
            <ul className="bar_acc mr-[55px] h-[100%]">
              <li className="flex flex-col items-end h-[100%] pt-[45px] pb-[16px]">
                <div
                  className={`${barGraph} relative`}
                  style={{ height: "30%", background: "#5c1880" }}
                >
                  <span className="point_cnt absolute text-white text-[11px] top-[-49px] left-[-116%] translate-x-[49%] translate-y-[49%] bg-[#5c1880] h-[22px] z-1 rounded-[4px] leading-[21px] px-[7px] w-auto font-extrabold min-w-[39px] ">
                    0P
                  </span>
                  <span
                    className="top-[-17px] left-[58%] border-t-4 border-[#5c1880]"
                    style={pntCntAfter}
                  ></span>
                </div>
                <p className="text-[13px] leading-[21px] z-10">사용</p>
              </li>
            </ul>
          </div>
        </div>

        {/* 방문일수 */}
        <div className="point_wrap flex border-b border-[#e8e8e8] justify-between items-center h-[74px]">
          <div className="point_head pl-[16px]">
            <p className="text-[13px] leading-[21px]">신세계포인트</p>
            <p className="text-[13px] font-bold leading-[21px]">방문 일수</p>
          </div>
          <p>
            <span className="text-[20px] font-semibold mr-[3px]">0</span>
            <span>일</span>
          </p>
        </div>
        <div className="point_wrap flex border-b border-[#e8e8e8] justify-between items-center h-[74px]">
          <div className="point_head pl-[16px]">
            <p className="text-[13px] leading-[21px]">신세계포인트</p>
            <p className="text-[13px] font-bold leading-[21px]">구매 금액</p>
          </div>
          <p>
            <span className="text-[20px] font-semibold mr-[3px]">0</span>
            <span>원</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default HistoryBottom;
