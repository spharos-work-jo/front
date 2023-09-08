'use client'
import React, { useState, useEffect, use } from 'react';
import styles from './CouponList.module.css';
import Image from 'next/image';
import { CouponListType } from '@/types/CouponList';
import { useSession } from 'next-auth/react';

const CouponList = () => {
const [couponList, setCouponList] = useState<number[]>([]);
const session=useSession();
// console.log(session.data?.user.data.token);


useEffect(() => {
    const fetchData = () => {
        // try {
        const headers = {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + session.data?.user.data.token
        };

        fetch('http://workjo.duckdns.org/api/v1/coupon', {
            method: 'GET',
            headers
        }).then(res => {
            return res.json()
        }).then(data => {
            console.log(data.data.content)
            setCouponList(data.data.content)
        })
        
    }
        
        fetchData();
        }, []);
    
    return (
        <div className='pt-2.5 pr-5 pb-14 pl-5'>
            <h3 className='hidden'>쿠폰 리스트</h3>
            <div className='coupon_search h-[46px] flex items-center justify-between border-b border-black'>
                <div className='w-[95px] h-[38px] text-[14px] relative pt-3'>
                    <select className='sel'>
                        <option value='1'>마감임박</option>
                        <option value='2'>최신순</option>
                    </select>
                </div>
                <div>
                    <button className='text-[14px] pr-[26px] relative'>
                        <span className={styles.btn}>
                        전체다운
                        </span>
                    </button>
                </div>
            </div>
            {couponList.length > 0 ? (
            <ul>
                {couponList.map((item: number, idx: number) => (
                    <CouponWrap 
                        key={idx}
                        couponId={item}
                    />
                ))}
            </ul>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
}

export default CouponList;

const handleButtonClick = () => {
    alert('다운로드');
}
const CouponWrap = ({couponId} : { couponId: number}) => {

    const [couponNum, setCouponNum] = useState<string | null>(null);
    const [couponData, setCouponData] = useState<CouponListType>({} as CouponListType);
    const session=useSession();
    const headers = {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + session.data?.user.data.token
    };
    console.log(session.data);

    const handleButtonClick = async () => {  // 새로운 이벤트 핸들러 함수 추가
        try {
            const response = await fetch(`https://workjo.duckdns.org/api/v1/coupon/${couponId}`, {
                method: 'POST',
                headers,
                body: JSON.stringify({
                    
                    // 필요한 데이터 입력
                }),
            });
            const data = await response.json();
            if (data && data.couponNum) {
                setCouponNum(data.couponNum);
            }
        } catch (error) {
            console.error('API 호출 중 오류 발생:', error);
        }
    };

    useEffect(() => {
        

        fetch(`https://workjo.duckdns.org/api/v1/coupon/${couponId}`, {
            method: 'GET',
            headers 

        })
        .then((response) => response.json())
        .then((data) => {

            console.log(data)
            setCouponData(data.data)
        })

    },[])
    return (

        <li key={couponData.id} className='border-b pt-4 box-border'>
            <div className='inline-block align-top'>
                <Image src={couponData.imageUrl} alt={couponData.name} height={80} width={80} />
                <Image src={couponData.partnerImageUrl} alt="emart24" height={80} width={80} />
            </div>
            <div className='pl-[18px] w-[calc(100%_-_80px)] align-top inline-block box-border'>
                <p className='text-[11px] text-gray-400 leading-5'>
                    {couponData.description}
                </p>
                <p className='text-[16px] font-semibold pt-0.5 pb-3 leading-[26px] overflow-hidden text-black'>
                    {couponData.name}
                </p>
                <p className='text-[11px] font-medium leading-5 text-slate-500'>
                    {couponData.startDate} ~ {couponData.endDate}
                    <span className='text-red-700'>
                        <span className={styles.col}>
                            {couponData.remainDay}일 남음
                        </span>
                    </span>
                </p>
                <div className='flex justify-between items-center box-border border-t-[1px] relative pt-[12px] pb-[16px] mt-[12px]'>
                    <div className='flex justify-between w-full'>
                        <Image src={couponData.partnerThumbnailUrl} alt="e24" height={20} width={20} />
                        <button className='' onClick={handleButtonClick}>
                            <Image src='/assets/images/coupon/down.png' alt="다운로드" width={18} height={17} />
                        </button>
                    </div>
                </div>
            </div>
        </li>
    );
}

// 빈 의존성 배열은 컴포넌트가 마운트될 때 한 번만 실행됨을 의미합니다.