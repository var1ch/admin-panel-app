import React, { useState } from "react";
import { useDispatch, useStore } from "react-redux";
import { filterDataAction } from "../../../../state";

export default function FilterForm() {
  const dispatch = useDispatch();
  // const [skinInputValue, setSkinInputValue] = useState("");
  // const store = useStore();
  const [pattern, setPattern] = useState({ skin: "", eyes: "", gender: "" });

  return (
    <div className="filter-form">
      <input
        value={pattern.skin}
        type="text"
        placeholder="SKIN"
        onChange={(i) => setPattern({ ...pattern, skin: i.target.value })}
      />
      <input
        value={pattern.eyes}
        type="text"
        placeholder="EYES"
        onChange={(i) => setPattern({ ...pattern, eyes: i.target.value })}
      />
      <input
        value={pattern.gender}
        type="text"
        placeholder="GENDER"
        onChange={(i) => setPattern({ ...pattern, gender: i.target.value })}
      />
      <button
        onClick={() => {
          // dispatch(
          //   filterDataAction({
          //     filterType: "bySkin",
          //     filterValue: skinInputValue,
          //   }),
          // );
        }}
      >
        Show
      </button>
      <button onClick={() => setPattern({ skin: "", eyes: "", gender: "" })}>
        Clear
      </button>
    </div>
  );
}
