import ContactButton from "../atoms/ContactButton"
import CvDownloadButton from "../atoms/CvDownloadButton"

const SideButtons = () => {
  return (
    <div className=" w-14 fixed top-20 right-0 flex flex-col justify-center items-center gap-2">
        <CvDownloadButton/>
        <ContactButton />
    </div>
  )
}

export default SideButtons