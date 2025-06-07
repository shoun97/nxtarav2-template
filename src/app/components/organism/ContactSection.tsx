import CustomSeparator from '../atoms/CustomSeparator';
import ContactForm from './ContactForm';

const ContactSection = () => {
  return (
    <section id="contact" className="px-[16px] py-[32px]">
      <div className="block">
        <h5 className="text-center px-[32px] pb-2">{'¿Hablamos?'}</h5>
        <CustomSeparator height="16px" />
        <p className="subtitle text-center">
          O también puedes dejarnos tu mensaje en el siguiente formulario y te responderemos con la atención que mereces.
        </p>
        <ContactForm />
      </div>

    </section>
  );
};

export default ContactSection;
