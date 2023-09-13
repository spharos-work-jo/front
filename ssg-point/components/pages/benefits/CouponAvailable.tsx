'use client'
import React, { useState, useEffect } from 'react';
import styles from './CouponAvailable.module.css';
import Image from 'next/image';
import { CouponListType } from '@/types/CouponList';
import { useSession } from 'next-auth/react';
import Swal from 'sweetalert2';
import CustomBarcode from '@/components/ui/CustomBarcode';


const CouponList = ( {pathName} : { pathName: string } ) => {
    const [couponList, setCouponList] = useState<number[]>([]);
    const session = useSession();  // Destructuring을 이용해서 session.data를 바로 사용

useEffect(() => {
    const fetchData = async () => {  // async 함수로 변경
    const headers = {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${session.data?.user.data.token}`
    };

    const response = await fetch('http://workjo.duckdns.org/api/v1/coupon/my', {
        method: 'GET',
        headers
    });
    const data = await response.json();
    setCouponList(data.data.content);
    };

    fetchData();
}, []);

    return (
        <div className='pt-2.5 pr-5 pb-14 pl-5'>
            <h3 className='hidden'>쿠폰 리스트</h3>
            <div className='coupon_search h-[46px] flex items-center justify-between border-b border-black'>
                <div className='w-[95px] h-[38px] text-[14px] relative pt-3'>
                    <select className='sel'>
                        <option value={'new'}>마감임박</option>
                        <option value={'endDate'}>최신순</option>
                    </select>
                </div>
                <div>
                    <button className='text-[14px] pr-[26px] relative'>
                        <span className={styles.all}>
                        더 많은 쿠폰 보기
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
};

export default CouponList;


const CouponWrap = ({ couponId } : { couponId: number }) => {
    const session = useSession();  // Destructuring을 이용해서 session.data를 바로 사용
    const [isdownloaded, setIsdownloaded] = useState(false);

    const [couponData, setCouponData] = useState<CouponListType>({} as CouponListType);
    
    const headers = {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + session.data?.user.data.token
    };
    console.log(session.data);

    const handleButtonClick = async () => {  // async 키워드 추가
        if (!session.data?.user.data.token) {
            Swal.fire({
            title: "로그인이 필요합니다.",
            confirmButtonText: "확인",
            confirmButtonColor: "#000000",
            });
            return;
        }
        const headers = {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + session.data?.user.data.token
        };
          // await 키워드를 추가하여 비동기 처리
        const response = await fetch(`http://workjo.duckdns.org/api/v1/coupon/${couponId}/download`, {
            method: 'POST',
            headers,
            body: JSON.stringify({ id: couponData.id })
        });
    
          // 서버 응답 후 처리할 로직
        if (response.ok) {
            Swal.fire({
                title: "쿠폰 다운로드에 성공했습니다.",
                confirmButtonText: "확인",
                confirmButtonColor: "#000000",
            });
            setIsdownloaded(true);
        }
    }

    useEffect(() => {
        fetch(`http://workjo.duckdns.org/api/v1/coupon/${couponId}`, {
            method: 'GET',
            headers 
        })
        .then((response) => response.json())
        .then((data) => {

            console.log(data)
            setCouponData(data.data)
            setIsdownloaded(data.data.isDownloaded);
        })
    },[])
    
    const [showModal, setShowModal] = useState(false);

    const handleBarcodeClick = async () => {
        setShowModal(true);
    };
        const closeModal = () => {
        setShowModal(false);
    };

        // Swal.fire({
        //     title: "쿠폰을 사용하시겠습니까?",
        //     showCancelButton: true,
        //     confirmButtonText: "사용",
        //     cancelButtonText: "취소",
        //     confirmButtonColor: "#000000",
        //     cancelButtonColor: "#000000",
        // }).then((result) => {
        //     if (result.isConfirmed) {
        //         Swal.fire({
        //             title: "쿠폰 사용에 성공했습니다.",
        //             confirmButtonText: "확인",
        //             confirmButtonColor: "#000000",
        //         });
        //     }
        // }); 
        // }


    return (

        <li key={couponData.id} className='border-b pt-4 box-border'>
            <div className='inline-block align-top'>
                {couponData && couponData.imageUrl ? (
                <Image src={couponData.imageUrl} alt={couponData.name} height={80} width={80} />
                ) : (
                <p>Image Loading or Not Available</p>
                )}

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
                        <Image src={couponData.partnerThumbnailUrl} alt="e24" height={1} width={28} />
                        
                        {isdownloaded ?
                        <li onClick={handleBarcodeClick} className='flex mt-[-1px] mb-[-1px] whitespace-nowrap items-center text-[12px] text-slate-500'>사용하기
                        <CustomBarcode value={couponData.couponNum} options={{ width: 0.5, height: 15, displayValue:false }}/> </li> 
                        :
                        <button onClick={handleButtonClick}>
                            <Image src='/assets/images/coupon/down.png' alt="다운로드" width={18} height={17} />
                        </button>
                        }
                    </div>
                </div>
            </div>
        </li>
    );
}