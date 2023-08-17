"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

const mylounge = () => {
  const router = useRouter()
  return (
    <div className="mt-[6.25rem]">
      mylounge
      <button onClick={() => router.push('/mylounge/history')}>히스토리</button>
    </div>
  );
};

export default mylounge;
