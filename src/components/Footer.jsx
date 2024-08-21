export default function Footer() {
  const handleOnClick = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };
  return (
    <>
      <section>
        <header className="flex items-center px-10">
          <div className="bg-primary h-px flex-1"></div>
        </header>
        <div className="flex flex-row max-w-lvw justify-between px-72 items-center py-10">
          <div className="w-[150px]">Kevin · 2024</div>
          <div onClick={handleOnClick} className="hover:cursor-pointer">
            <h1 className="font-bigShoulder rounded-md border-solid border-2 text-primary border-primary p-2 text-[30px] hover:text-primaryAlt hover:border-primaryAlt">
              kc
            </h1>
          </div>
          <div className="w-[150px]">All rights reserved.</div>
        </div>
      </section>
    </>
  );
}
