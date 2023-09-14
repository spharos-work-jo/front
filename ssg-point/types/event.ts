
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
    id: string
    partnerid: string
    name: string
    startDate : string
    endDate : string
    rewardDate : string
    thumbnailUrl : string
}