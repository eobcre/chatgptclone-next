import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Chat GPT Clone</title>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
      </Head>

      <div className='h-screen flex justify-center items-center'>
        <div className='max-w-lg w-full'>
          <div
            styles={{ height: '650px' }}
            className='w-full h-96 bg-gray-100 p-4 overflow-scroll rounded-lg'
          >
            <span className='block text-center text-2xl font-medium border-b-2 border-blue-600 pb-4 mb-2'>
              Chat GPT Clone
            </span>
            <div>
              <div>Hello</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
