export interface CouponListType
{
  id: number;
  name: string;
  description: string;
  couponValue: string;
  startDate: string;
  endDate: string;
  imageUrl: string;
  type: string;
  guideline: string;
  couponNum: string;
  isDownloaded:boolean;
  partnerImageUrl: string;
  partnerThumbnailUrl: string;
  remainDay: string;
}