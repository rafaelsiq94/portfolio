import Image from "next/image";
import Job from "../components/Job";
import MundoLolita from "../public/assets/resume/mundololita.jpeg";
import WayCarbon from "../public/assets/resume/waycarbon.jpeg";
import TIE from "../public/assets/resume/tie.jpeg";
import useTranslation from "next-translate/useTranslation";
import { useRouter } from "next/router";

const Resume = () => {
  let router = useRouter();
  let { t } = useTranslation();

  return (
    <div id="resume" className="w-full lg:h-screen p-2">
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
        <p className="text-xl tracking-widest">
          {t("translate:resume-title-1")}
          <span className="text-green">{t("translate:resume-title-2")}</span>
        </p>
        <h2 className="py-4">
          {t("translate:resume-sub-1")}
          {router.locale == "pt-BR" ? (
            <a href="/assets/resume/RAFAELDESIQUEIRA.pdf" download>
              <span className="text-green hover:scale-110 hover:text-greenDark cursor-pointer">
                {t("translate:resume-sub-2")}
              </span>
            </a>
          ) : (
            <a href="/assets/resume/RAFAELDESIQUEIRAEN.pdf" download>
              <span className="text-green hover:scale-110 hover:text-greenDark cursor-pointer">
                {t("translate:resume-sub-2")}
              </span>
            </a>
          )}
          !
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Job
            image={WayCarbon}
            title="WayCarbon"
            jobTitle="resume-job-title-0"
            date={"2022-" + t("translate:resume-job-date-1")}
            description="resume-job-description-0"
          />
          <Job
            image={MundoLolita}
            title="MundoLolita"
            jobTitle="resume-job-title-1"
            date={"2021-" + t("translate:resume-job-date-1")}
            description="resume-job-description-1"
          />
        </div>
      </div>
    </div>
  );
};

export default Resume;
