import { SignUpListType } from '@/types/signupListType';

export const signUpListData : SignUpListType[]= [
    {
        id: 1,
        step: 'STEP. 1',
        title: '본인인증',
        icon: '/assets/images/signupIcon/signup-icon01.png',
    },
    {
        id: 2,
        step: 'STEP. 2',
        title: '약관동의',
        icon: '/assets/images/signupIcon/signup-icon02.png',
    },
    {
        id: 3,
        step: 'STEP. 3',
        title: '정보입력',
        icon: '/assets/images/signupIcon/signup-icon03.png',
    },
    {
        id: 4,
        step: 'STEP. 4',
        title: '가입완료',
        icon: '/assets/images/signupIcon/signup-icon04.png',
    }
]