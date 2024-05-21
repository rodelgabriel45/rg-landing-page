import { Button, Label, Spinner, TextInput } from "flowbite-react";
import { useState } from "react";
import useAdminLogin from "../hooks/useAdminLogin";

const AdminLogin = () => {
  const { loading, login } = useAdminLogin();
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await login(formData);
  };

  return (
    <div className="min-h-screen p-6">
      <h1 className="text-center mt-10 text-2xl md:text-4xl">Admin Login</h1>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col gap-4 p-7 max-w-[28rem] mx-auto border rounded-md mt-10 shadow-lg">
          <div>
            <div className="mb-2 block">
              <Label
                htmlFor="username"
                value="Username"
                className="text-white"
              />
            </div>
            <TextInput
              id="username"
              type="text"
              placeholder="Enter your username..."
              required
              value={formData.username}
              onChange={handleChange}
            />
          </div>
          <div>
            <div className="mb-2 block">
              <Label
                htmlFor="password"
                value="Password"
                className="text-white"
              />
            </div>
            <TextInput
              id="password"
              type="password"
              required
              value={formData.password}
              onChange={handleChange}
            />
          </div>

          <Button
            disabled={loading}
            type="submit"
            gradientDuoTone="purpleToPink"
            className="my-3 hover:outline outline-teal-500 disabled:opacity-80"
          >
            {loading ? (
              <Spinner aria-label="Default status example" />
            ) : (
              "Login"
            )}
          </Button>
        </div>
      </form>
    </div>
  );
};

export default AdminLogin;
