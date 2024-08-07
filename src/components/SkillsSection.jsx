import {
  faCss3,
  faHtml5,
  faJs,
  faNodeJs,
  faReact,
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function SkillsSection() {
  return (
    <>
      <section className="my-12 p-10">
        <header className="grid grid-cols-2 px-10 pb-10">
          <div className="flex items-center order-1">
            <h1 className="text-left font-bigShoulder text-3xl text-primary mr-10">
              Tools & Skills
            </h1>
            <div className="bg-primary h-px flex-1"></div>
          </div>
          <div className="block order-2"></div>
        </header>
        <div className="flex flex-row flex-wrap justify-evenly">
          <div className="flex flex-col flex-1 items-center">
            <div className="text-2xl pb-7 text-primary font-bigShoulder font-semibold">
              Front-end
            </div>
            <div className="flex flex-col bg-black w-[min(100%,300px)] h-[400px] rounded-lg pb-[40px] pt-[10px] px-[8px]">
              <div className="flex flex-1 justify-evenly items-end">
                <div className="flex flex-col items-center transition hover:scale-110">
                  <img src="/icons/icon_react.svg" alt="react" />
                  <h2 className="text-primary font-bold">React</h2>
                </div>
                <div className="flex flex-col items-center transition hover:scale-110">
                  <img src="/icons/icon_next.svg" alt="nextjs" />
                  <h2 className="text-primary font-bold">NextJS</h2>
                </div>
                <div className="flex flex-col items-center transition hover:scale-110">
                  <img src="/icons/icon_vite.svg" alt="nextjs" />
                  <h2 className="text-primary font-bold">Vite</h2>
                </div>
              </div>
              <div className="flex flex-1 justify-evenly items-end">
                <div className="flex flex-col items-center transition hover:scale-110">
                  <img src="/icons/icon_javascript.svg" alt="javascript" />
                  <h2 className="text-primary font-bold">JavaScript</h2>
                </div>
                <div className="flex flex-col items-center transition hover:scale-110">
                  <img src="/icons/icon_typescript.svg" alt="typescript" />
                  <h2 className="text-primary font-bold">Typescript</h2>
                </div>
              </div>
              <div className="flex flex-1 justify-evenly items-end">
                <div className="flex flex-col items-center transition hover:scale-110">
                  <img src="/icons/icon_html.svg" alt="html" />
                  <h2 className="text-primary font-bold">HTML</h2>
                </div>
                <div className="flex flex-col items-center transition hover:scale-110">
                  <img src="/icons/icon_tailwindcss.svg" alt="tailwindcss" />
                  <h2 className="text-primary font-bold">TailwindCSS</h2>
                </div>
                <div className="flex flex-col items-center transition hover:scale-110">
                  <img src="/icons/icon_css.svg" alt="css" />
                  <h2 className="text-primary font-bold">CSS</h2>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col flex-1 items-center">
            <div className="text-2xl pb-7 text-primary font-bigShoulder font-semibold">
              Back-end
            </div>
            <div className="flex flex-col bg-black w-[min(100%,300px)] h-[400px] rounded-lg pb-[40px] pt-[10px] px-[8px]">
              <div className="flex flex-1 justify-evenly items-end">
                <div className="flex flex-col items-center transition hover:scale-110">
                  <img src="/icons/icon_nodejs.svg" alt="nodejs" />
                  <h2 className="text-primary font-bold">NodeJS</h2>
                </div>
                <div className="flex flex-col items-center transition hover:scale-110">
                  <img src="/icons/icon_express.svg" alt="express" />
                  <h2 className="text-primary font-bold">Express</h2>
                </div>
              </div>
              <div className="flex flex-1 justify-evenly items-end">
                <div className="flex flex-col items-center transition hover:scale-110">
                  <img src="/icons/icon_javascript.svg" alt="javascript" />
                  <h2 className="text-primary font-bold">JavaScript</h2>
                </div>
                <div className="flex flex-col items-center transition hover:scale-110">
                  <img src="/icons/icon_typescript.svg" alt="typescript" />
                  <h2 className="text-primary font-bold">Typescript</h2>
                </div>
              </div>
              <div className="flex flex-1 justify-evenly items-end">
                <div className="flex flex-col items-center transition hover:scale-110">
                  <img src="/icons/icon_mongodb.svg" alt="mongodb" />
                  <h2 className="text-primary font-bold">MongoDB</h2>
                </div>
                <div className="flex flex-col items-center transition hover:scale-110">
                  <img src="/icons/icon_pug.svg" alt="pug" />
                  <h2 className="text-primary font-bold">Pug</h2>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col flex-1 items-center">
            <div className="text-2xl pb-7 text-primary font-bigShoulder font-semibold">
              Miscelleneous
            </div>
            <div className="flex flex-col bg-black w-[min(100%,300px)] h-[400px] rounded-lg pb-[40px] pt-[10px] px-[8px]">
              <div className="flex flex-1 justify-evenly items-end">
                <div className="flex flex-col items-center transition hover:scale-110">
                  <img src="/icons/icon_git.svg" alt="git" />
                  <h2 className="text-primary font-bold">Git</h2>
                </div>
                <div className="flex flex-col items-center transition hover:scale-110">
                  <img src="/icons/icon_github.svg" alt="github" />
                  <h2 className="text-primary font-bold">GitHub</h2>
                </div>
              </div>
              <div className="flex flex-1 justify-evenly items-end">
                <div className="flex flex-col items-center transition hover:scale-110">
                  <img src="/icons/icon_webpack.svg" alt="webpack" />
                  <h2 className="text-primary font-bold">webpack</h2>
                </div>
                <div className="flex flex-col items-center transition hover:scale-110">
                  <img src="/icons/icon_aws.svg" alt="aws" />
                  <h2 className="text-primary font-bold">AWS Tools</h2>
                </div>
              </div>
              <div className="flex flex-1 justify-evenly items-end">
                <div className="flex flex-col items-center transition hover:scale-110">
                  <img src="/icons/icon_figma.svg" alt="figma" />
                  <h2 className="text-primary font-bold">Figma</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
