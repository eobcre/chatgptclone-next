import Head from 'next/head';
import { useState } from 'react';
// API
import { Configuration, OpenAIApi } from 'openai';
// react-icon
import { RiSendPlaneFill } from 'react-icons/Ri';
import { HiOutlineDotsHorizontal } from 'react-icons/Hi';

export default function Home() {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const configuration = new Configuration({
    apiKey: process.env.NEXT_PUBLIC_OPENAPI_KEY,
  });

  const openai = new OpenAIApi(configuration);

  const submitHandler = async (e) => {
    // prevents reload
    e.preventDefault();
    setIsLoading(true);

    // API
    const response = await openai.createChatCompletion({
      model: 'gpt-3.5-turbo',
      messages: [{ role: 'user', content: 'Hello!' }],
    });

    setMessages((prevState) => [
      ...prevState,
      { sender: 'user', text: message },
      { sender: 'bot', text: response.data.choices[0].message?.content },
    ]);

    console.log(messages);

    // console.log(response.data.choices[0].message?.content);

    setIsLoading(false);
  };

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
            className='w-full h-96 bg-gray-100 p-4 overflow-scroll rounded-t-lg'
          >
            <span className='block text-center text-2xl font-medium border-b-2 border-blue-600 pb-4 mb-2'>
              Chat GPT Clone
            </span>
            <div>
              <div>Hello</div>
            </div>
          </div>

          <form onSubmit={(e) => submitHandler(e)} className='w-full'>
            <div className=' w-full relative flex items-center p-4 bg-gray-100 rounded-b-lg'>
              <input
                type='text'
                className='flex-1 border-2 rounded-lg py-2 px-4 focus:outline-none'
                onChange={(e) => setMessage(e.target.value)}
                value={message}
              />
              <button
                type='submit'
                className='absolute top-4 right-4 px-3 py-3 hover:text-blue-700'
              >
                {isLoading ? (
                  <HiOutlineDotsHorizontal className='text-2xl' />
                ) : (
                  <RiSendPlaneFill className='text-2xl' />
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
