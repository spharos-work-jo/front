'use client'
import React, { useEffect } from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';


const OAuthLoading = () => {
  const session = useSession();
  const router = useRouter();
  
  useEffect(() => {


      console.log(session)
      const requestBody = {
        oauthId: session.data?.user.id, // Change these fields based on your actual session object
        provider: 'NAVER',// Or any other provider
      };

      
      fetch('https://workjo.duckdns.org/api/v1/auth/oauth-login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(requestBody),
        }).then((res) => res.json()).then((data) => {
          
          if (data.code === 'S001') {
            router.push('/');
          } else {
            router.push('/totallogin');
          console.log(data);
        }
        
        });

  }, [session]
  );

  return (
    <div>
      {/* Loading indicator */}
    </div>
  );
};

export default OAuthLoading;
