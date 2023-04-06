import Image, { StaticImageData } from "next/image";
import useTranslation from "next-translate/useTranslation";

interface JobCardProps {
  image: StaticImageData;
  title: string;
  jobTitle: string;
  date: string;
  description: string;
}

const JobCard = ({ image, title, jobTitle, date, description }: JobCardProps) => {
  const { t } = useTranslation();

  return (
    <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 dark:bg-elements">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 justify-items-center items-center">
        <div>
          <Image
            src={image}
            width="200px"
            height="200px"
            alt="/"
            className="rounded-full"
          />
        </div>
        <div className="flex flex-col justify-center">
          <h3 className="text-tile">{title}</h3>
          <h3 className="text-green">{t(`translate:${jobTitle}`)}</h3>
          <h3 className="dark:text-text">{date}</h3>
          <br />
          <span className="dark:text-text">{t(`translate:${description}`)}</span>
        </div>
      </div>
    </div>
  );
};

export default JobCard;
