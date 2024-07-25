import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function ContactSection() {
  return (
    <>
      <section className="mb-36">
        <header className="flex items-center px-10 pb-10">
          <div className="bg-primary h-px flex-1"></div>
          <h1 className="text-left font-bigShoulder text-4xl text-primary px-10">
            Contact
          </h1>
          <div className="bg-primary h-px flex-1"></div>
        </header>
        <div className="flex flex-col justify-between h-64">
          <div>
            <p>Write me an e-mail at:</p>
            <h2 className="font-bigShoulder text-3xl text-primary">
              kevin5112@gmail.com
            </h2>
          </div>
          <p>
            <strong>O R</strong>
          </p>
          <div>
            <p className="pb-3">Reach me through social media:</p>
            <div className="flex justify-center gap-10">
              <a href="https://github.com/kevin5112">
                <FontAwesomeIcon
                  icon={faGithub}
                  size="4x"
                  className="text-primary"
                />
              </a>
              <a href="https://www.linkedin.com/in/kevin-chen-084baa173/">
                <FontAwesomeIcon
                  icon={faLinkedin}
                  size="4x"
                  className="text-primary"
                />
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
