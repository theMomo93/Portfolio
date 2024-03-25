import Navbar from '@/components/Navbar'

export default function Home() {
  return (
    <div className='ml-96'>
      <Navbar />
      <section className='px-24 py-8 p-4 bg-gray-100 h-screen'>
        <h1 className='text-black '>Main Content</h1>
        <div className='mt-8'>
          <h2 className='text-xl font-semibold'>About Me</h2>
          <p className='text-gray-700'>
            Text
          </p>
        </div>
      </section>
    </div>
  );
};
