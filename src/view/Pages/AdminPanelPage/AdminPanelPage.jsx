import React, { useEffect, useState } from "react";
import { StyledAdminPanel } from "./StyledAdminPanelPage";
import { ImHome } from "react-icons/im";
import FilterForm from "./components/FilterForm";
import DataList from "./components/DataList";
import Modal from "./components/Modal";
import { selectedItemSelector } from "../../../state";
import { useSelector, useStore } from "react-redux";

export default function AdminPanel() {
  const selectedItem = useSelector(selectedItemSelector);
  const username = useStore().getState().data.username;
  const [isModalOpened, setIsModalOpened] = useState(false);

  useEffect(() => {
    document.title = "Admin Panel";
  }, []);

  const showModalHandler = () => {
    setIsModalOpened(!isModalOpened);
  };

  return (
    <StyledAdminPanel isModalOpened={isModalOpened}>
      <div className="left-panel">
        <div className="panel-header">
          <ImHome />
          <span>
            {username === "" ? "Hello, USERNAME" : `Hello, ${username}`}
          </span>
        </div>
      </div>
      <div className="right-panel">
        <FilterForm />
        <DataList showModalHandler={showModalHandler} />
        {selectedItem ? (
          <Modal
            showModalHandler={showModalHandler}
            selectedItem={selectedItem}
          />
        ) : null}
      </div>
      <div className="modal-overlay"></div>
    </StyledAdminPanel>
  );
}
