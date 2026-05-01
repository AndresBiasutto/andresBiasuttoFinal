import PropTypes, { number } from "prop-types";

const SectionContainer = ({ children }) => {
  return (
    <section className={` relative lg:h-[200vh] w-full h-screen  overflow-hidden`} >
    <div className=" absolute top-0 w-full "></div>
      {children}
    </section>
  );
};

SectionContainer.propTypes = {
  children: PropTypes.any,
  viewportHeight: number
};

export default SectionContainer;
