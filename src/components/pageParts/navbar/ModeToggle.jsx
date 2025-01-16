import { useTheme, useThemeUpdate } from '../../pageFunctions/ThemeContext';
import { motion } from 'framer-motion'

const ModeToggle = () => {
  const isDarkMode = useTheme();
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
          isDarkMode ? "justify-start" : "justify-end"
        }`}
        onClick={() => {
          themeUpdate();
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