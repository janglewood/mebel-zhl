import emailjs from "@emailjs/browser";

export const sendEmail = async (ref: HTMLFormElement): Promise<any> => {
  return await emailjs.sendForm(
    process.env.NEXT_PUBLIC_APP_EMAILJS_SERVICE_ID,
    process.env.NEXT_PUBLIC_APP_EMAILJS_ORDER_TEMPLATE_ID,
    ref,
    process.env.NEXT_PUBLIC_APP_EMAILJS_PUBLIC_ID
  );
};
