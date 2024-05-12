import {faGithub} from "@fortawesome/free-brands-svg-icons";
import {faTwitter} from "@fortawesome/free-brands-svg-icons";
import {faEnvelope} from "@fortawesome/free-solid-svg-icons";
import {faLinkedin} from "@fortawesome/free-brands-svg-icons";
import {faCopyright} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

export default function Footer() {
  return (
    <footer className="bg-primary w-full relative text-white p-3">
      <div className="max-w-7xl mx-auto container bg-secondary rounded-xl py-3 px-6">
        <div className="flex items-center justify-between w-full">
          <div className="flex items-center w-full">
            <FontAwesomeIcon
              icon={faCopyright}
              className="text-xl text-white"
            />
            <h4 className="font-semibold ml-3">Elias Grinwis Plaat Stultjes</h4>
          </div>
          <div className="flex items-center gap-3">
            <a
              href="https://www.linkedin.com/in/elias-grinwis-plaat-stultjes-86bb43220/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn">
              <FontAwesomeIcon
                icon={faLinkedin}
                className="w-7 h-7 cursor-pointer"
              />
            </a>
            <a
              href="https://github.com/EliasGrinwis"
              target="_blank"
              rel="noreferrer"
              aria-label="Github">
              <FontAwesomeIcon
                icon={faGithub}
                className="w-7 h-7 cursor-pointer"
              />
            </a>
            <a
              href="https://twitter.com/EliasGrinwis"
              target="_blank"
              rel="noreferrer"
              aria-label="Twitter">
              <FontAwesomeIcon
                icon={faTwitter}
                className="w-7 h-7 cursor-pointer"
              />
            </a>
            <a href="mailto:eliasgrinwis27@gmail.com" aria-label="Email">
              <FontAwesomeIcon
                icon={faEnvelope}
                className="w-7 h-7 cursor-pointer"
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
