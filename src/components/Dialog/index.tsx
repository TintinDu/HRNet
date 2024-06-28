import { TintinDuDialog } from "tintindu-dialog";

interface DialogProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Dialog = ({ isOpen, setIsOpen }: DialogProps) => {
  return (
    <TintinDuDialog isOpen={isOpen} onClose={() => setIsOpen(false)}>
      <h1>Employee Created</h1>
      <p>Your form has been submitted successfully</p>
    </TintinDuDialog>
  );
};
