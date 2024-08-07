export default function ProjectsSection() {
  return (
    <>
      <section className="flex flex-col p-10">
        <header className="grid grid-cols-2 pb-10">
          <div className="flex items-center order-1">
            <h1 className="text-left font-bigShoulder text-3xl text-primary mr-10">
              Featured Projects
            </h1>
            <div className="bg-primary h-px flex-1"></div>
          </div>
          <div className="block order-2"></div>
        </header>
        <div>
          <div className="grid grid-cols-project1 pb-10">
            <div className="flex items-center justify-center">
              <img
                className="max-h-96 rounded-lg"
                src="/images/pokememory.png"
                alt="img1"
              />
            </div>
            <div>
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
                    src="/icons/icon_vite.svg"
                    alt="react"
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
              <p className="pt-7 font-dosis font-semibold">
                Game made to test your memory. Click on each unique Pokemon and
                don't press on the same one twice! Made in React and Vite using
                TailwindCSS for styling.
              </p>
              <div className="flex flex-row justify-evenly pt-7">
                <button>REVIEW THE CODE</button>
                <button>SEE IT LIVE</button>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-project2 pb-10">
            <div>
              <h1>project name</h1>
              <p>description</p>
            </div>
            <div className="grid grid-cols-2">
              <img src="" alt="img1" />
              <img src="" alt="img2" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
