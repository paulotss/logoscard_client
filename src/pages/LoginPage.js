import { useNavigate } from "react-router-dom";
import { Formik } from "formik";
import * as Yup from "yup";
import axios from "../http";

const LoginPage = () => {
  const navigate = useNavigate();

  const submitForm = async (values) => {
    try {
      const result = await axios.post("/login", values);
      sessionStorage.setItem("auth", result.data);
      navigate("/")
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <main className="flex justify-center h-screen">
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        validationSchema={Yup.object({
          email: Yup.string().email("Email inválido").required("Obrigatório"),
          password: Yup.string().min(6, "Mínimo 6 caracteres").required("Obrigatório"),
        })}
        onSubmit={submitForm}
      >
        {
          formik => (
            <form
              onSubmit={formik.handleSubmit}
              className="p-3 w-96 h-fit border mt-20"
            >
              <div className="mb-3">
                <label htmlFor="email">Email</label>
                <br />
                <input
                  id="email"
                  type="email"
                  className="border p-1 w-full"
                  {...formik.getFieldProps("email")}
                />
                {formik.touched.email && formik.errors.email ? (
                  <div className="text-sm text-red-600">{formik.errors.email}</div>
                ) : null}
              </div>
              <div className="mb-3">
                <label htmlFor="password">Senha</label>
                <br />
                <input
                  id="password"
                  type="password"
                  className="border p-1 w-full"
                  {...formik.getFieldProps("password")}
                />
                {formik.touched.password && formik.errors.password ? (
                  <div className="text-sm text-red-600">{formik.errors.password}</div>
                ) : null}
              </div>
              <button
                type="submit"
                className="p-2 bg-gray-900 text-white w-24 rounded-lg"
              >
                Entrar
              </button>
            </form>
          )
        }
      </Formik>
    </main>
  )
}

export default LoginPage;
