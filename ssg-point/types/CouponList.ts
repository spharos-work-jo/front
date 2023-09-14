export interface CouponListType
{
  id: number;
  userCouponId: number;
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
  userCouponStatus: string;
  partnerImageUrl: string;
  partnerThumbnailUrl: string;
  remainDay: number;
  couponId: string;
}

export interface CouponDownType
{
  couponId: number;
  userCouponId: number;
}