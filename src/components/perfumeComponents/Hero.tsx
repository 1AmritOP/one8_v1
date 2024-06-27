// import React from 'react'

const Hero = () => {
  return (
    <>
        <div className="hero flex overflow-x-hidden justify-between items-center p-10
         h-[calc(100vh-4rem)]  w-full   text-white relative">


            <div className="left  h-full w-80 flex items-end justify-center " >
                <section className=' h-96 w-[90%] bg-red-500 leftBorderRadius'></section>
            </div>

            <div className="center h-full w-80 flex items-center justify-center">
                <section className="bg-slate-400 h-[28rem] w-[90%] centerBorderRadius"></section>
            </div>

            <div className="right h-full w-80 flex items-start justify-center">
                <section className=' h-96 w-[90%] bg-red-500 rightBorderRadius'></section>
            </div>

        </div>
    </>
  )
}

export default Hero