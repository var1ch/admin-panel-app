import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { changeItemAction, setIsSelectedAction } from "../../../../state";

export default function Modal({ selectedItem, showModalHandler }) {
  const [changes, setChanges] = useState(selectedItem);
  const dispatch = useDispatch();

  return (
    <div className="modal">
      <div className="input-row">
        <span>NAME: </span>
        <input
          value={changes.name}
          type="text"
          placeholder="NAME"
          onChange={(i) => setChanges({ ...changes, name: i.target.value })}
        />
      </div>
      <div className="input-row">
        <span>HEIGHT: </span>
        <input
          value={changes.height}
          type="text"
          placeholder="HEIGHT"
          onChange={(i) => setChanges({ ...changes, height: i.target.value })}
        />
      </div>
      <div className="input-row">
        <span>SKIN: </span>
        <input
          value={changes.skin}
          type="text"
          placeholder="SKIN"
          onChange={(i) => setChanges({ ...changes, skin: i.target.value })}
        />
      </div>
      <div className="input-row">
        <span>EYES: </span>
        <input
          value={changes.eyes}
          type="text"
          placeholder="EYES"
          onChange={(i) => setChanges({ ...changes, eyes: i.target.value })}
        />
      </div>
      <div className="input-row">
        <span>WEIGHT: </span>
        <input
          value={changes.weight}
          type="text"
          placeholder="WEIGHT"
          onChange={(i) => setChanges({ ...changes, weight: i.target.value })}
        />
      </div>
      <div className="input-row">
        <span>GENDER: </span>
        <input
          value={changes.gender}
          type="text"
          placeholder="GENDER"
          onChange={(i) => setChanges({ ...changes, gender: i.target.value })}
        />
      </div>
      <div className="input-row">
        <span>BIRTH: </span>
        <input
          value={changes.birth}
          type="text"
          placeholder="BIRTH"
          onChange={(i) => setChanges({ ...changes, birth: i.target.value })}
        />
      </div>
      <div className="buttons-container">
        <button
          onClick={() => {
            dispatch(changeItemAction({ id: selectedItem?.id, ...changes }));
            dispatch(
              setIsSelectedAction({ id: selectedItem?.id, isSelected: false }),
            );
            showModalHandler();
          }}
        >
          CHANGE ITEM
        </button>
        <button
          onClick={() => {
            dispatch(
              setIsSelectedAction({ id: selectedItem?.id, isSelected: false }),
            );
            showModalHandler();
          }}
        >
          CLOSE
        </button>
      </div>
    </div>
  );
}
