import { useDispatch, useSelector } from "react-redux";
import { Spinner, Table } from "flowbite-react";

import useGetMessages from "../../hooks/useGetMessages";
import toast from "react-hot-toast";
import { useState } from "react";

import { deleteMessage } from "../../redux/user/userSlice";

const Inbox = () => {
  const dispatch = useDispatch();
  const { loading } = useGetMessages();
  const { messages } = useSelector((state) => state.user);
  const [deleteLoading, setDeleteLoading] = useState(false);

  const handleDelete = async (messageId) => {
    const proceed = window.confirm(
      "Are you sure you want to permanently delete this?"
    );

    if (proceed) {
      try {
        setDeleteLoading(true);
        const res = await fetch(`/api/message/delete/${messageId}`, {
          method: "DELETE",
        });
        const data = await res.json();

        if (!res.ok) {
          throw new Error(data.message);
        }

        dispatch(deleteMessage(messageId));
        toast.success("Message deleted");
      } catch (error) {
        toast.error(error.message || error);
      } finally {
        setDeleteLoading(false);
      }
    }
  };

  return (
    <div className="table-auto overflow-x-scroll md:mx-auto p-4">
      <div>
        {loading && <Spinner aria-label="Default status example" />}
        {!loading && messages?.length === 0 && (
          <p className="text-center text-xl">No messages to show</p>
        )}
        {!loading && messages?.length > 0 && (
          <>
            <Table hoverable className="shadow-md md:w-[80vw] ">
              <Table.Head>
                <Table.HeadCell>Created At</Table.HeadCell>

                <Table.HeadCell>Email</Table.HeadCell>
                <Table.HeadCell>Message</Table.HeadCell>
                <Table.HeadCell>Delete</Table.HeadCell>
              </Table.Head>
              {messages.map((message) => {
                return (
                  <Table.Body key={message._id}>
                    <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                      <Table.Cell>
                        {new Date(message.createdAt).toLocaleDateString()}
                      </Table.Cell>
                      <Table.Cell>{message.email}</Table.Cell>
                      <Table.Cell className="font-medium text-gray-900 dark:text-white">
                        {message.message}
                      </Table.Cell>

                      <Table.Cell>
                        {deleteLoading ? (
                          <Spinner />
                        ) : (
                          <span
                            className="text-red-500 cursor-pointer font-medium hover:underline"
                            onClick={() => handleDelete(message._id)}
                          >
                            Delete
                          </span>
                        )}
                      </Table.Cell>
                    </Table.Row>
                  </Table.Body>
                );
              })}
            </Table>
          </>
        )}
      </div>
    </div>
  );
};

export default Inbox;
