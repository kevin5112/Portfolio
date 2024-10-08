import '../styles/AboutSection.css';

export default function AboutSection() {
  const handleOnClick = () => {
    document.body.scrollTop = 8000;
    document.documentElement.scrollTop = 8000;
  };

  return (
    <>
      <section className="flex flex-col p-10">
        <header className="grid grid-cols-1 lg:grid-cols-2">
          <div className="flex items-center order-2">
            <h1 className="text-left font-bigShoulder text-3xl text-primary lg:mr-10">
              About
            </h1>
            <div className="bg-primary h-px flex-1"></div>
          </div>
          <div className="block order-1"></div>
        </header>
        <div className="lg:grid lg:grid-cols-2 pt-10">
          <div className="flex justify-center align-middle">
            <img
              className="max-h-60 lg:max-h-96 rounded-[5rem] shadow-2xl"
              src="/images/amogus.JPG"
              alt="image of me"
            />
          </div>
          <div className="basis-2/3">
            <p className="text-left text-pretty indent-7 font-dosis font-semibold pt-5">
              Deeply invested in the life-long learning mentality, I'm a
              full-stack developer who carries a keen eye for design in an
              user-first approach. My focus is in creating responsive layouts on
              the JavaScript stack of React and NodeJS, and I'm well acquainted
              to bringing out solutions to complex problems.
            </p>
            <div className="py-3">
              <h3 className="text-xl text-primary font-bigShoulder">I am a</h3>
              <h3 className="font-dosis font-semibold text-slate-300">
                Full-stack Developer
              </h3>
              <h3 className="font-dosis font-semibold text-slate-300">
                Front-end Developer
              </h3>
              <h3 className="font-dosis font-semibold text-slate-300">
                Coffee nerd
              </h3>
            </div>
            <button
              onClick={handleOnClick}
              className="hello-btn text-primary transition duration-300 ease-in-out border-2 border-primary border-solid hover:text-black hover:bg-primary hover:border-primary"
            >
              Say Hello
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
