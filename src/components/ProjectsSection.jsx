export default function ProjectsSection() {
  return (
    <>
      <section className="flex flex-col p-10">
        <header className="grid grid-cols-1 lg:grid-cols-2 pb-10">
          <div className="flex items-center order-1">
            <h1 className="text-left font-bigShoulder text-3xl text-primary mr-10">
              Featured Projects
            </h1>
            <div className="bg-primary h-px flex-1"></div>
          </div>
          <div className="block order-2"></div>
        </header>
        <div>
          <div className="grid lg:grid-cols-project1 pb-10">
            <div className="flex items-center justify-center">
              <img
                className="max-h-64 lg:max-h-96 rounded-lg"
                src="/images/pokememory.png"
                alt="img1"
              />
            </div>
            <div className="pt-10 lg:pt-0">
              <h className="font-bigShoulder text-3xl text-primary">
                PokeMatch
              </h>
              <div className="flex justify-center items-center">
                <div className="flex flex-row bg-[#444] rounded-[8px] items-center py-[3px] px-[6px] mr-[6px] mt-[10px]">
                  <img
                    className="max-w-[350px] w-[16px] h-[16px]"
                    src="/icons/icon_react.svg"
                    alt="react"
                  />
                  <span className="text-primary text-[12px] ml-[6px] font-bold font-monospace">
                    react
                  </span>
                </div>
                <div className="flex flex-row bg-[#444] rounded-[8px] items-center py-[3px] px-[6px] mr-[6px] mt-[10px]">
                  <img
                    className="max-w-[350px] w-[16px] h-[16px]"
                    src="/icons/vite_logo.svg"
                    alt="vite"
                  />
                  <span className="text-primary text-[12px] ml-[6px] font-bold font-monospace">
                    vite
                  </span>
                </div>
                <div className="flex flex-row bg-[#444] rounded-[8px] items-center py-[3px] px-[6px] mr-[6px] mt-[10px]">
                  <img
                    className="max-w-[350px] w-[16px] h-[16px]"
                    src="/icons/icon_tailwindcss.svg"
                    alt="react"
                  />
                  <span className="text-primary text-[12px] ml-[6px] font-bold font-monospace">
                    tailwindcss
                  </span>
                </div>
              </div>
              <p className="pt-7 lg:px-0 px-10 font-dosis font-semibold text-left">
                Game made to test your memory. Click on each unique Pokemon and
                don't press on the same one twice! Made in React and Vite using
                TailwindCSS for styling.
              </p>
              <div className="flex flex-row justify-evenly pt-7">
                <a href="https://github.com/kevin5112/Memory_Game">
                  <button className="border-solid border-primary text-primary hover:bg-primary hover:text-black hover:border-primary transition ease-in-out duration-300">
                    REVIEW THE CODE
                  </button>
                </a>
                <a href="https://kvchen-pokememory.netlify.app/">
                  <button className="border-solid border-primary text-primary hover:bg-primary hover:text-black hover:border-primary transition ease-in-out duration-300">
                    SEE IT LIVE
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
