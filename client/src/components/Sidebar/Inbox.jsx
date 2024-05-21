import { useSelector } from "react-redux";
import { Spinner, Table } from "flowbite-react";

import useGetMessages from "../../hooks/useGetMessages";

const Inbox = () => {
  const { loading } = useGetMessages();
  const { messages } = useSelector((state) => state.user);

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
                        <span
                          // onClick={() => handleStartDelete(message._id)}
                          className="text-red-500 cursor-pointer font-medium hover:underline"
                        >
                          Delete
                        </span>
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
