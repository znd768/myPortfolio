import { motion } from "framer-motion";

const drawCareer = {
  initial: { opacity: 0 },
  animate: (i) => {
    const delay = (i + 1) * 1.2 + 0.1;
    return {
      opacity: 1,
      transition: {
        delay,
        duration: 0.8,
      },
    };
  },
};

const career = [
  {
    when: "2016",
    event: ["札幌西高等学校卒業", "静岡大学情報学部入学"],
  },
  {
    when: "2021",
    event: ["静岡大学中途退学", "北海道情報大学転入"],
  },
  {
    when: "2023",
    event: ["北海道情報大学卒業", "パソコン専門店システム部就職"],
  },
  {
    when: "2024.9",
    event: ["転職活動中"],
  },
  {
    when: "In a few years",
    event: ["Web開発者としてキャリア形成"],
  },
];

const margin = [
  "mt-[calc(58px-1.8rem)]",
  "mt-[calc(249px-58px-6rem)]",
  "mt-[calc(384px-249px-6rem)]",
  "mt-[calc(482px-384px-6rem)]",
  "mt-[calc(668px-482px-6rem)]",
];

const CareerDesc = () => {
  return (
    <motion.div
      className="col-start-3 -col-end-1 flex h-full flex-grow flex-col items-center sm:col-start-4 sm:-col-end-2 md:col-start-7 md:-col-end-4 lg:col-start-4 lg:-col-end-1"
      initial="initial"
      animate="animate"
    >
      {career.map((v, i) => {
        return (
          <motion.div
            className={`relative ${margin[i]} grid h-24 w-full place-items-center rounded-lg bg-trans-white drop-shadow-xl dark:bg-dark-theme-1 pl-[6%] sm:pl-[10%]`}
            variants={drawCareer}
            custom={i + 1}
            key={v.when}
          >
            <div className="absolute left-[-8rem] top-[20%] hidden h-8 w-32 translate-y-[-20%] bg-trans-white [clip-path:polygon(100%_0%,50%_50%,100%_100%)] lg:block dark:bg-dark-theme-1" />
            <div className=" flex flex-col items-start w-full">
              <p>{v.when}</p>
              {v.event.map((ev) => (
                <p key={ev}>{ev}</p>
              ))}
            </div>
          </motion.div>
        );
      })}
    </motion.div>
  );
};

export default CareerDesc;
