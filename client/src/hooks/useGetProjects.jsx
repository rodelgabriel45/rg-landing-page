import { useEffect, useState } from "react";

import toast from "react-hot-toast";

const useGetProjects = () => {
  const [loading, setLoading] = useState(false);
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const getProjects = async () => {
      try {
        setLoading(true);
        const res = await fetch("/api/project/");
        const data = await res.json();

        if (!res.ok) {
          throw new Error(data.message);
        }

        setProjects(data);
      } catch (error) {
        toast.error(error.message || error);
      } finally {
        setLoading(false);
      }
    };

    getProjects();
  }, []);

  return { loading, projects };
};

export default useGetProjects;
