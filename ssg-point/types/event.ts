
export interface EventBannerDataType {
  id: number
  data: EventBannerListProps[]
}

export interface EventBannerListProps {
  id: number
  url: string
  imgUrl: string
  imgAlt: string
}


export interface EventType {
    partnerid: number
    name: string
    startDate : string
    endDate : string
    type : number
    imgUrl : string
}