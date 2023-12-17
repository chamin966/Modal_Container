'use client';
import BasicModal from '@/components/BasicModal';
import Link from 'next/link';

export default function Apps() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-center p-24'>
      <div>Apps 입니다</div>
      <BasicModal />
      <Link href={{ pathname: '/' }}>홈화면으로 돌아가기</Link>
    </main>
  );
}
