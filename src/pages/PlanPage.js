import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "../http";
import Header from "../components/Header";
import loading from "../media/isLoading.gif";

const PlanPage = () => {
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const { id } = useParams();

  const formatDate = (date) => {
    const newDate = new Date(date);
    return `Até ${newDate.getDate()}/${newDate.getMonth() + 1}/${newDate.getFullYear()}`
  }

  useEffect(() => {
    const getUser = async () => {
      setIsLoading(true);
      try {
        const result = await axios.get(`/user/${id}`);
        setUser(result.data);
      } catch (error) {
        console.log(error);
      }
      setIsLoading(false);
    }
    getUser();
  },[id]);
  return (
    <>
      <Header />
      <main className="p-5">
      {
        isLoading
        ? <div className="flex justify-center w-full mt-5">
            <img src={loading} alt="" />
          </div>
        : !user.assignment
          ? <p className="text-center">Você ainda não possui plano!</p>
          : <>
              <section className="border-b-2 border-gray-400 pb-5">
                <p className="font-bold text-2xl">{ user.assignment.plan.title.toUpperCase() }</p>
                <p><span className="font-bold">Vencimento: </span>{ formatDate(user.assignment.expiration) }</p>
              </section>
              <section className="mt-3">
                <p>Benefícios ativos</p>
                <div className="grid grid-gap grid-cols-3 grid-rows-1 p-2 text-sm">
                  <div>Benefícios</div>
                  <div className="text-right">Qnt.</div>
                  <div className="text-right">Uso</div>
                </div>
                {
                  user.assignment.benefits.map((benefit) => {
                    if (benefit.type === "active") {
                      return (
                        <div
                          key={benefit.id}
                          className="grid grid-gap grid-cols-3 grid-rows-1 bg-gray-400 rounded-lg p-2 mb-2"
                        >
                          <div>{benefit.title}</div>
                          <div className="text-right">{benefit.amount}</div>
                          <div className="text-right">{benefit.AssignmentBenefitModel.amount}</div>
                        </div>
                      )
                    }
                  })
                }
              </section>
              <section className="mt-3">
                <p>Benefícios passivos</p>
                <div className="p-2 text-sm">
                  <div>Benefícios</div>
                </div>
                {
                  user.assignment.benefits.map((benefit) => {
                    if (benefit.type === "passive") {
                      return (
                        <div
                          key={benefit.id}
                        >
                          <div className="bg-gray-400 rounded-lg p-2 mb-2">{benefit.title}</div>
                        </div>
                      )
                    }
                  })
                }
              </section>
            </>
      }
      </main>
    </>
  )
}

export default PlanPage;
