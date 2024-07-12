import { TintinDuDialog } from "tintindu-dialog";

interface DialogProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Dialog = ({ isOpen, setIsOpen }: DialogProps) => {
  return (
    <TintinDuDialog
      isOpen={isOpen}
      onClose={() => setIsOpen(false)}
      closeButtonStyle="icon"
      customStyles={{
        content: {
          width: "50%",
          height: "50%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "white",
          borderRadius: 10,
          padding: 20,
        },
        overlay: {
          backgroundColor: "rgba(0, 0, 0, 0.5)",
        },
      }}
    >
      <h1>Employee Created</h1>
      <p>Your form has been submitted successfully</p>
    </TintinDuDialog>
  );
};

export default Dialog;
