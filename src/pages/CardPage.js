import { useEffect, useState } from "react";
import axios from "../http";
import loading from "../media/isLoading.gif";

const CardPage = () => {
  const AWS_BUCKET = process.env.REACT_APP_AWS_BUCKET;
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState({});

  useEffect(() => {
    const getUser = async () => {
      setIsLoading(true);
      try {
        const result = await axios.get('/user/5');
        setUser(result.data);
      } catch (error) {
        console.log(error);
      }
      setIsLoading(false);
    }
    getUser();
  }, []);

  return (
    <main
      className="bg-gray-900"
    >
      <section
        className="flex justify-center h-screen"
      >
        <div
          className="w-96 h-64 bg-white rounded-2xl self-center"
        >
          {
            isLoading
            ? <div className="flex justify-center h-full">
                <img src={loading} alt="" className="self-center" />
              </div>
            : <div className="flex justify-between h-full w-full p-5">
                <div>
                  <div className="mb-2">
                    <p className="text-sm">Nome do beneficiário</p>
                    <p className="font-bold">{`${user.firstName} ${user.lastName}`}</p>
                  </div>
                  <div className="mb-2">
                    <p className="text-sm">Número de inscrição</p>
                    <p className="font-bold">00{user.id}</p>
                  </div>
                  <div className="mb-2">
                    <p className="text-sm">Documento do beneficiário</p>
                    <p className="font-bold">{user.rg}</p>
                  </div>
                  <div>
                    <p className="text-sm">Válido até</p>
                    <p className="font-bold">{user.assignment.expiration}</p>
                  </div>
                </div>
                <div>
                  <div className="w-24">
                    <img
                      className="object-cover rounded-lg"
                      src={AWS_BUCKET + user.photo}
                      alt=""
                    />
                  </div>
                </div>
              </div>
          }
        </div>
      </section>
    </main>
  )
}

export default CardPage;
