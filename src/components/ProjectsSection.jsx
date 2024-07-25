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
            <div className="grid grid-cols-2">
              <img src="" alt="img1" />
              <img src="" alt="img2" />
            </div>
            <div>
              <h1>project name</h1>
              <p>description</p>
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
