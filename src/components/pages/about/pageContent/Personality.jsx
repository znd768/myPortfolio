import React from "react";

const personalInfo = [
  {
    title: "Profile",
    putItemName: true,
    items: { age: "27", birthplace: "Asahikawa, Hokkaido" },
  },
  {
    title: "Hobbies",
    putItemName: false,
    items: {
      item1: "learning trending web technology",
      item2: "watching MLB",
      item3: "game play (video or card games)",
    },
  },
  {
    title: "Like",
    putItemName: false,
    items: { item1: "cats", item2: "listening to music" },
  },
];

const Personality = () => {
  return (
    <section className="flex min-h-[calc(100vh-5rem)] flex-col gap-8 px-6 py-4 lg:p-8 xl:p-10">
      <h1 className="text-4xl">About Me</h1>
      <h2 className="text-xl lg:text-2xl">My Personality</h2>
      <article className="flex flex-col">
        {personalInfo.map((info) => {
          return (
            <div className="flex h-[600px] w-full flex-row" key={info.title}>
              <div className="flex w-[40%] flex-col justify-center gap-4 p-12">
                <h3 className="text-lg lg:text-2xl">{info.title}</h3>
                <ul className="ml-8">
                  {Object.entries(info.items).map(([itemKey, item]) => {
                    return (
                      <li key={itemKey} className="first-letter:uppercase">
                        {info.putItemName && (
                          <span className="mr-2 after:content-[':']">
                            {itemKey}
                          </span>
                        )}
                        {item}
                      </li>
                    );
                  })}
                </ul>
              </div>
              <div className="w-[60%]"></div>
            </div>
          );
        })}
        <div>
          <h3 className="text-2xl">How to spend my holidays</h3>
          <p>I spend almost time staying home.</p>
          <p>
            I hardly go out except purpose of a hospital visit or shopping
            because I dislike crowd... :)
          </p>
        </div>
      </article>
    </section>
  );
};

export default Personality;
