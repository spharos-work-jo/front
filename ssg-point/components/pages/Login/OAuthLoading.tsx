'use client'
import React, { useEffect } from 'react';
import { useSession, getSession } from 'next-auth/react';
import { useRouter } from 'next/navigation'; // please note that I corrected the import path
import { get } from 'http';

const OAuthLoading = () => {
  const { data: session, status } = useSession();
  const router = useRouter();
  
  useEffect(() => {
    if (status === 'authenticated') {
      const requestBody = {
        oauthId: session?.user?.id,
        provider: 'NAVER',
      };

      fetch('http://10.10.10.203:8000/api/v1/auth/oauth-login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestBody),
      })
      .then((res) => {
        console.log("Response: ", res);
        return res.json();
      })
      .then((data) => {
        console.log("유저데이터: ", data);

        if (data.code === 'S001') {
          // Store JWT in localStorage (if that's your method of storing tokens)
          fetch('http:// ')
          session.user.data.token = data.data.token;
      
          // Navigate to home
          router.push('/');
        } else {
          // Navigate to total login if the login attempt was not successful
          router.push('/totallogin');
        }
      });
    }
  }, [session, status]);

  return (
    <div>
      {/* Loading indicator */}
    </div>
  );
};

export default OAuthLoading;