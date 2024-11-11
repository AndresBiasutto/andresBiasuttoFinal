import images from "../../data/imgUrls";
import SideButton from "../../layouts/LinkButton";
import PropTypes from "prop-types";

const ContactButton = ({message}) => {
    const mail = images.icons.mail;
  return (
    <SideButton scrollTo={"contact"} icon={mail} message={message} />
);
}

ContactButton.propTypes= {
  message: PropTypes.string
}

export default ContactButton