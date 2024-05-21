import ContactForm from "../components/ContactPage/ContactForm";
import gmailIcon from "../assets/tech-icons/gmail-icon.png";
import { Button } from "flowbite-react";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <div className="min-h-screen p-4">
      <h1 className="text-center my-10 text-2xl md:text-3xl">Contact</h1>
      <div className="flex flex-col md:flex-row gap-16 max-w-6xl mx-auto md:items-center mt-12">
        <div className="flex-1">
          <ContactForm />
        </div>

        <div className="flex-1 max-w-sm mx-auto">
          <h3 className="text-xl">Or directly email me at </h3>
          <div className="flex items-center gap-4 mt-5">
            <img src={gmailIcon} alt="gmail" className="w-10 h-10" />
            <Button className="bg-[#071330] border md:p-3 border-purple-600 hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500">
              <Link to="mailto:rodelgabriel45@gmail.com?subject=Message Inquiry (RG Page)">
                rodelgabriel45@gmail.com
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
