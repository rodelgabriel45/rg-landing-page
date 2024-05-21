import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import toast from "react-hot-toast";
import { setMessages } from "../redux/user/userSlice";

const useGetMessages = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const { currentUser } = useSelector((state) => state.user);

  useEffect(() => {
    const getMessages = async () => {
      try {
        setLoading(true);
        const res = await fetch("/api/message/getMessages");
        const data = await res.json();

        if (!res.ok) {
          throw new Error(data.message);
        }

        dispatch(setMessages(data));
      } catch (error) {
        toast.error(error.message || error);
      } finally {
        setLoading(false);
      }
    };

    if (currentUser?.isAdmin) {
      getMessages();
    }
  }, [currentUser]);

  return { loading };
};

export default useGetMessages;
