import Header from "../components/Header";
import ButtonSection from "../components/ButtonSection";
import ButtonPlan from "../components/ButtonPlan";
import { HiUser } from 'react-icons/hi2';
import { HiSwatch } from 'react-icons/hi2';
import { HiIdentification } from 'react-icons/hi2';
import imgSeraphisPremium from '../media/seraphis-premium.png';
import imgMaatPremium from '../media/maat-premium.png';
import imgMaatSeraphisPremium from '../media/ms-gold.png';

const HomePage = () => {
  return (
    <>
      <Header />
      <main>
        <section className="flex flex-wrap justify-center mt-3">
          <div className="m-2">
            <ButtonSection
              title="Meus planos"
              image={ <HiUser /> }
              path="/plan/5"
            />
          </div>
          <div className="m-2">
            <ButtonSection
              title="Meus dados"
              image={ <HiSwatch /> }
              path="/profile"
            />
          </div>
          <div className="m-2">
            <ButtonSection
              title="Cartão"
              image={ <HiIdentification /> }
              path="/card"
            />
          </div>
        </section>
        <section className="flex flex-wrap justify-center p-5 mt-5 border-t-2 border-gray-400">
          <ButtonPlan title="Premium Seraphis" image={imgSeraphisPremium} />
          <ButtonPlan title="Premium Maat" image={imgMaatPremium} />
          <ButtonPlan title="Gold Seraphis/Maat" image={imgMaatSeraphisPremium} />
        </section>
      </main>
    </>
  )
}

export default HomePage;
