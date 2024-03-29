import { Link } from 'react-scroll';
import useTranslation from 'next-translate/useTranslation';

const Footer = () => {
  const year = new Date().getFullYear();
  const { t } = useTranslation('translate');

  return (
    <div className="w-full h-16 flex justify-center items-center">
      <h1 className="text-xl ml-2 dark:text-title">
        © {year} - {t('footer')}{' '}
        <Link
          activeClass="Home"
          to="home"
          offset={50}
          duration={500}
          smooth={true}
        >
          <span className="text-green cursor-pointer hover:text-greenDark">
            Rafael de Siqueira
          </span>
        </Link>
      </h1>
    </div>
  );
};

export default Footer;
