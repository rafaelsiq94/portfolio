import JobCard from "../components/JobCard";
import MundoLolita from "../public/assets/resume/mundololita.jpeg";
import WayCarbon from "../public/assets/resume/waycarbon.jpeg";
import useTranslation from "next-translate/useTranslation";
import { useRouter } from "next/router";

const Resume = (): JSX.Element => {
  const router = useRouter();
  const { t } = useTranslation();

  const downloadResume = () =>
    router.locale == "pt-BR"
      ? "/assets/resume/RAFAELDESIQUEIRA.pdf"
      : "/assets/resume/RAFAELDESIQUEIRAEN.pdf";

  return (
    <div id="resume" className="w-full lg:h-screen p-2">
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
        <p className="text-xl tracking-widest">
          {t("translate:resume-title-1")}
          <span className="text-green">{t("translate:resume-title-2")}</span>
        </p>
        <h2 className="py-4">
          {t("translate:resume-sub-1")}
          <a href={downloadResume()} download>
            <span className="text-green hover:scale-110 hover:text-greenDark cursor-pointer">
              {t("translate:resume-sub-2")}
            </span>
          </a>
          !
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <JobCard
            image={WayCarbon}
            title="WayCarbon"
            jobTitle="resume-job-title-0"
            date={`2022-${t("translate:resume-job-date-1")}`}
            description="resume-job-description-0"
          />
          <JobCard
            image={MundoLolita}
            title="MundoLolita"
            jobTitle="resume-job-title-1"
            date={`2021-${t("translate:resume-job-date-1")}`}
            description="resume-job-description-1"
          />
        </div>
      </div>
    </div>
  );
};

export default Resume;
