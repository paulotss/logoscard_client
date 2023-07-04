import { useState, useEffect } from "react";
import Header from "../components/Header";
import axios from "../http";
import loading from "../media/isLoading.gif";

const ProfilePage = () => {
  const AWS_BUCKET = process.env.REACT_APP_AWS_BUCKET;
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState();

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
    <>
      <Header />
      {
        isLoading
        ? <div className="flex justify-center w-full mt-5">
            <img src={ loading } alt="" />
          </div>
        : <main className="p-5">
            <p className="font-bold mb-3">Meus dados</p>
            <section className="flex justify-between border-b-2 border-gray-400 pb-5">
              <div>
                <p>Inscrição</p>
                <p className="font-bold text-4xl">00{user.id}</p>
              </div>
              <div className="w-32 h-32 bg-gray-900 rounded-full">
                <img
                  className="object-cover rounded-full"
                  src={AWS_BUCKET + user.photo}
                  alt=""
                />
              </div>
            </section>
            <section>
              <p className="mt-5 text-sm">Nome</p>
              <p>{`${user.firstName} ${user.lastName}`}</p>
              <p className="mt-5 text-sm">Email</p>
              <p>{user.email}</p>
              <p className="mt-5 text-sm">RG</p>
              <p>{user.rg}</p>
              <p className="mt-5 text-sm">CPF</p>
              <p>{user.cpf}</p>
              <p className="mt-5 text-sm">Celular</p>
              <p>{user.cellPhone}</p>
            </section>
          </main>
      }
    </>
  )
}

export default ProfilePage;
