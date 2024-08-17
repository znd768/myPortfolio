import React, { useState } from 'react'
import { useThemeUpdate } from '../../pageFunctions/ThemeContext';
import { motion } from 'framer-motion'

const ModeToggle = () => {
  const [isOn, setIsOn] = useState(false);
  const themeUpdate = useThemeUpdate()
  const spring = {
    type: "spring",
    stiffness: 700,
    damping: 30,
  };
  return (
    <div className="flex flex-col items-center justify-center">
      <div
        className={`flex h-12 w-20 cursor-pointer items-center rounded-full bg-white/40 p-2 ${
          isOn ? "justify-end" : "justify-start"
        }`}
        onClick={() => {
          themeUpdate();
          setIsOn(!isOn);
        }}
      >
        <motion.div
          className="h-8 w-8 rounded-full bg-white"
          layout
          transition={spring}
        />
      </div>
    </div>
  )
}

export default ModeToggle