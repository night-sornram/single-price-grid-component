import Image from 'next/image'

export default function Home() {
  return (
    <div className=' w-screen h-screen flex justify-center items-center'>
      <div className='w-11/12 md:w-3/4 lg:w-2/3 xl:w-1/2  flex flex-col'>
        <div className=' flex w-full p-10 rounded-t-lg  bg-white '>
          <div className=' flex flex-col'>
            <div className=' text-xl text-custom-100 font-bold'>
              Join our community
            </div>
            <div className=' text-lg text-custom-200 mt-5'>
              30-day, hassle-free money back guarantee
            </div>
            <div className=' text-custom-400 mt-5'>
              Gain access to our full library of tutorials along with expert code reviews. Perfect for any developers who are serious about honing their skills.
            </div>
          </div>
        </div>
        <div className=' flex  flex-col md:flex-row w-full'>
          <div className=' flex flex-col w-full md:w-1/2 bg-custom-500 rounded-bl-none md:rounded-bl-lg relative'>

            <div className=' flex flex-col p-7 text-white'>
              <div className=' font-bold'>
                Monthly Subscription 
              </div>
              <div className=' mt-5 flex flex-row'>
                <div className= ' text-3xl font-bold'>$29</div>
                <div className=' ml-3 flex justify-center items-center font-extralight'>
                  per month
                </div> 
              </div>
              <div className=' mt-2'>
                Full access for less than $1 a day 
              </div>
              <button className=' mt-7 rounded-lg font-bold p-5 bg-custom-200'>
                Sign Up 
              </button>
            </div>
          </div>
          <div className=' flex flex-col w-full md:w-1/2 py-7 px-10 text-white rounded-b-lg md:rounded-bl-none md:rounded-br-lg bg-custom-100'>
            <div>
              Why Us
            </div>
            <div className=' mt-5 text-sm font-extralight w-2/3'>
              Tutorials by industry experts Peer & expert code review Coding exercises Access to our GitHub repos Community forum Flashcard decks New videos every week
            </div>
          </div>
        </div>

      </div>
    </div>
  )}