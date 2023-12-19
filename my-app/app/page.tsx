import Link from 'next/link';

export default function Home() {
  return (
    <main className='flex  min-h-screen flex-col items-center justify-center p-24 ga'>
      <div>홈화면 입니다</div>
      <Link href={{ pathname: '/modals' }}>modals 화면으로 이동</Link>
    </main>
  );
}
