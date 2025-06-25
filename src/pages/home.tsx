
import { Mic, AudioLines } from 'lucide-react';

const Home = () => {
  return (
    <div className='flex flex-col items-center justify-center'>
      <div className='flex flex-col items-center justify-center px-4'>
        <p className='text-xl font-bold'>Listening...</p>
        <p className='text-sm text-gray-500 text-center pt-2'>Speak clearly to search for products, collections, or orders</p>
        <p className='text-sm text-gray-500 text-center'>You can also click the microphone to start speaking</p>
      </div>
     { 
     //Audio lines and microphone icon are going to be conditionally set based on the state of the microphone
        <div className='mt-10 flex flex-col items-center justify-center'>
            <div>
                <Mic width={220} height={240} className='text-black' />
            </div>

            <div>< AudioLines width={160} height={200} className='text-black' /></div>
        </div>
     }
     <p>Red sneakers</p>

    </div>
  );
};

export default Home;
