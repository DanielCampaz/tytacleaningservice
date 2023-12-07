import Anchor from "@/libs/components/anchor";
import ContactForm from "@/libs/components/contactform";

export default function Contact() {
  return (
    <div className="container p-6 flex flex-col md:flex-row ">
      <div className="md:w-1/2 flex flex-col justify-center mt-4 md:mt-0">
        <div className="text-center">
          <h1 className="text-3xl font-bold">Contact Us</h1>
          <p>
            If you are interested in our services, fill out the form and contact
            us, but if you still need time, click here on
            <Anchor to="/about">About</Anchor> so you can learn more about us,
            then take a look at our <Anchor to="/services">Services</Anchor>,
            and take a look at our latest <Anchor to="/projects">Works</Anchor>
          </p>
        </div>
      </div>
      <div className="md:w-1/2 flex flex-col justify-center mt-4 md:mt-0">
        <ContactForm />
      </div>
    </div>
  );
}
