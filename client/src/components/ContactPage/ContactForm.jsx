import { Button, Label, TextInput, Textarea } from "flowbite-react";

const ContactForm = () => {
  return (
    <form>
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
        />
        <Button
          className="my-5 shadow-lg hover:scale-95 transition-all transform ease-in-out"
          gradientDuoTone="purpleToBlue"
        >
          Submit
        </Button>
      </div>
    </form>
  );
};

export default ContactForm;
