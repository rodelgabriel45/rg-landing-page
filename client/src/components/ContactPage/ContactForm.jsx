import { Button, Label, Spinner, TextInput, Textarea } from "flowbite-react";
import useSendMessage from "../../hooks/useSendMessage";
import { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({ email: "", message: "" });
  const { loading, sendMessage } = useSendMessage();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await sendMessage(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1 className="text-center my-10 md:text-3xl">
        Feel free to send a message
      </h1>
      <div className="flex flex-col mx-auto gap-2 max-w-lg border border-teal-500 rounded-md p-7 shadow-lg">
        <div className="my-2 block">
          <Label htmlFor="email" value="Your email" className="text-gray" />
        </div>
        <TextInput
          id="email"
          type="email"
          placeholder="name@example.com"
          required
          onChange={handleChange}
        />

        <div className="my-2 block">
          <Label htmlFor="message" value="Message" className="text-gray" />
        </div>
        <Textarea
          id="message"
          type="text"
          placeholder="Enter your message..."
          required
          rows={5}
          className="resize-none"
          onChange={handleChange}
        />
        <Button
          disabled={loading}
          type="submit"
          className="my-5 shadow-lg hover:scale-95 transition-all transform ease-in-out disabled:opacity-80"
          gradientDuoTone="purpleToBlue"
        >
          {loading ? <Spinner /> : "Submit"}
        </Button>
      </div>
    </form>
  );
};

export default ContactForm;
