import { useState } from "react";
import toast from "react-hot-toast";

const useAddProject = () => {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const addProject = async (formData) => {
    try {
      setSuccess(false);
      setLoading(true);
      const res = await fetch("/api/project/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.message);
      }

      toast.success("Project Submitted Successfully");
      setSuccess(true);
    } catch (error) {
      toast.error(error.message || error);
    } finally {
      setLoading(false);
    }
  };
  return { loading, addProject, success };
};

export default useAddProject;
