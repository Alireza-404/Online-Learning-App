import { motion, AnimatePresence } from "framer-motion";

interface PropsType {
  showOverlay: boolean;
  setShowOverlay: React.Dispatch<React.SetStateAction<boolean>>;
}

const Overlay = ({ showOverlay, setShowOverlay }: PropsType) => {
  return (
    <AnimatePresence mode="popLayout">
      {showOverlay && (
        <motion.div
          key={"Overlay"}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="inset-0 fixed bg-primaryBlackColor/75 z-40 dark:bg-primaryBlackColor"
          onClick={() => setShowOverlay(false)}
        ></motion.div>
      )}
    </AnimatePresence>
  );
};

export default Overlay;
