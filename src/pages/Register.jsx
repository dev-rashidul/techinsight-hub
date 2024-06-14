import RegisterForm from "../components/auth/RegisterForm";
import PageTitle from "../components/common/PageTitle";

const Register = () => {
  return (
    <>
      <PageTitle title="Register" />

      <section className="container mx-auto px-5 lg:px-0">
        <div className="w-full md:w-1/2 mx-auto bg-[#030317] p-4 lg:p-8 rounded-md mt-12">
          <h2 className="text-2xl font-bold mb-6">Register</h2>
          {/* Register Form */}
          <RegisterForm />
        </div>
      </section>
    </>
  );
};

export default Register;
