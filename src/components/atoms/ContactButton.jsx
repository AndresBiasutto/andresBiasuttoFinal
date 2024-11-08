import images from "../../data/imgUrls";
import SideButton from "../../layouts/SideButton";

const ContactButton = () => {
    const mail = images.icons.mail;
  return (
    <SideButton scrollTo={"contact"} icon={mail} />
);
}

export default ContactButton