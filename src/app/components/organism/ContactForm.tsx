import TransparentInput from '@components/atoms/TransparentInput';
import CheckboxConsent from '@components/atoms/CheckboxConsent';
import CustomButton from '@components/atoms/CustomButton';

const ContactForm = () => {
  return (
    <form className='w-full flex flex-col mx-auto p-4 ' id="contact">
      <TransparentInput
        label='Nombre completo'
        required
      />
      <TransparentInput
        label='Teléfono o WhatsApp'
        type='tel'
      />
      <TransparentInput
        label='Correo electrónico'
        type='email'
      />
      <TransparentInput label='Mensaje o consulta' />
      <CheckboxConsent />
      <CustomButton
        className='btn-primary-1 w-full'
        label={'Enviar Mensaje'}
        onClick={() => {}}
      />
    </form>
  );
};

export default ContactForm;
