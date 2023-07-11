import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();

  return (
    <main className="flex flex-col justify-center items-center h-screen">
      <h1 className="text-3xl mb-2 font-bold">Oops!</h1>
      <p className="mb-2">Um erro inesperado aconteceu!</p>
      <p><i>{error.statusText || error.message}</i></p>
    </main>
  );
}

export default ErrorPage;
