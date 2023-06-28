import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "../http";
import Header from "../components/Header";
import loading from "../media/isLoading.gif";

const PlanPage = () => {
  const [plan, setPlan] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const { id } = useParams();

  const formatDate = (date) => {
    const newDate = new Date(date);
    return `Até ${newDate.getDate()}/${newDate.getMonth() + 1}/${newDate.getFullYear()}`
  }

  useEffect(() => {
    const getPlan = async () => {
      setIsLoading(true);
      try {
        const result = await axios.get(`/user/1`);
        console.log(result.data.plans.find((plan) => plan.id = id));
        setPlan(result.data.plans.find((plan) => plan.id = id));
      } catch (error) {
        console.log(error);
      }
      setIsLoading(false);
    }
    getPlan();
  },[id]);
  return (
    <>
      <Header />
      {
        isLoading
        ? <div className="flex justify-center w-full mt-5">
            <img src={loading} alt="" />
          </div>
        : <main className="p-5">
            <section className="border-b-2 border-gray-400 pb-5">
              <p className="font-bold text-2xl">{ plan.title.toUpperCase() }</p>
              <p><span className="font-bold">Vencimento: </span>{ formatDate(plan.UserPlanModel.expiration) }</p>
            </section>
            <section>
              <p>Benefícios</p>
              <div className="grid grid-gap grid-cols-3 grid-rows-1 p-2 text-sm">
                <div>Benefícios</div>
                <div>Qnt.</div>
                <div>Uso</div>
              </div>
              {
                plan.benefits.map((benefit) => (
                  <Link
                    to={`/benefit/${benefit.id}`}
                    key={benefit.id}
                    className="grid grid-gap grid-cols-4 grid-rows-1 bg-gray-400 rounded-lg p-2 mb-2"
                  >
                    <div>00{benefit.id}</div>
                    <div>{benefit.amount}</div>
                    <div>{benefit.used}</div>
                  </Link>
                ))
              }
            </section>
          </main>
      }
      
    </>
  )
}

export default PlanPage;
