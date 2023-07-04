import { useEffect, useState } from "react";
import axios from "../http";
import Header from "../components/Header";
import ButtonProfilePlan from "../components/ButtonProfilePlan";
import loading from "../media/isLoading.gif";

const PlansPage = () => {
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const dateFormat = (date) => {
    const newDate = new Date(date);
    return `Até ${newDate.getDate()}/${newDate.getMonth() + 1}/${newDate.getFullYear()}`
  }

  useEffect(() => {
    const getPlans = async () => {
      setIsLoading(true);
      try {
        const result = await axios.get('/user/1');
        setUser(result.data);
      } catch (error) {
        console.log(error);
      }
      setIsLoading(false);
    }
    getPlans();
  }, []);

  return (
    <>
      <Header />
      {
        isLoading
        ? <div className="flex justify-center mt-3">
            <img src={loading} alt="" />
          </div>
        : <main className="p-5">
            <p className="font-bold mb-3">Meus planos</p>
            {
              user.plans.map((plan) => (
                <ButtonProfilePlan
                  key={plan.id}
                  id={plan.id}
                  title={plan.title}
                  expiration={dateFormat(plan.UserPlanModel.expiration)}
                />
              ))
            }
          </main>
      }
      
    </>
  )
}

export default PlansPage;
