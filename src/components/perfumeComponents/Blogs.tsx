// import React from 'react'
import { MdDateRange } from 'react-icons/md'

const Blogs = () => {
  return (
    <>
        <section className=' w-full min-h-[60vh] bg-black text-white p-10'>
            <header className=' h-fit w-full flex items-center justify-center mb-4'>
                <h1 className=' font-bold text-6xl'>Blogs</h1>
            </header>
            <section className=' w-full flex max-md:flex-wrap gap-4 max-md:gap-10 items-center justify-between max-md:justify-center'>
                <div className=' w-80 h-96 scrollAnimation'>
                    <div className=' w-full h-[80%] bg-slate-700 rounded-3xl'>
                        <img src="" alt="img" className=' object-cover' />
                    </div>
                    <div className="date w-full h-[10%] flex items-center  gap-4 text-yellow-400">
                        <h1 className=' text-xl '>
                            <MdDateRange></MdDateRange>
                        </h1>
                        <p>September 10,2003</p>
                    </div>
                    <h1 className=' font-semibold text-2xl'>The essence of Happy</h1>
                </div>

                <div className=' w-80 h-96 scrollAnimation'>
                    <div className=' w-full h-[80%] bg-slate-700 rounded-3xl'>
                        <img src="" alt="img" className=' object-cover' />
                    </div>
                    <div className="date w-full h-[10%] flex items-center text-yellow-400 gap-4">
                        <h1 className=' text-xl'>
                            <MdDateRange></MdDateRange>
                        </h1>
                        <p>December 16,2022</p>
                    </div>
                    <h1 className=' font-semibold text-2xl'>Men's favorite perfume</h1>
                </div>


                <div className=' w-80 h-96 scrollAnimation'>
                    <div className=' w-full h-[80%] bg-slate-700 rounded-3xl'>
                        <img src="" alt="img" className=' object-cover' />
                    </div>
                    <div className="date w-full h-[10%] flex items-center text-yellow-400 gap-4">
                        <h1 className=' text-xl'>
                            <MdDateRange></MdDateRange>
                        </h1>
                        <p>September 10,2022</p>
                    </div>
                    <h1 className=' font-semibold text-2xl'>Benefits of using perfume</h1>
                </div>
            </section>
        </section>
    </>
  )
}

export default Blogs