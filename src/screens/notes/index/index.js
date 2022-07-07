import { useState } from "react";
import HeaderLogged from "../../../components/header_logged";
import Notes from "../../../components/Notes";

const NotesScreen = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <HeaderLogged setIsOpen={setIsOpen} />
      <Notes setIsOpen={setIsOpen} isOpen={isOpen} />
    </>
  );
};

export default NotesScreen;
