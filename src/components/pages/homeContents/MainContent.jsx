import React from 'react'
import { motion } from "framer-motion";

const MainContent = () => {
  return (
    <div className=" h-[calc(100vh-5rem)] dark:bg-slate-900 dark:text-white p-12 snap-end flex flex-col">
      {/* <div className=" h-64 w-64">
        <motion.div
          className=" bg-white h-full w-full"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 2, delay: 2 }}
          whileHover={{opacity:1, scale:2}}
        ></motion.div>
      </div> */}
      <h1 className=' self-start text-4xl bg-green-500 inline-block'>test estset</h1>
    </div>
  )
}

export default MainContent