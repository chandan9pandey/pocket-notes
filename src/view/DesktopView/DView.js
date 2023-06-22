import React, { useState } from "react";
import "./DView.css";
import DHome from "../../components/Desktop/DHome.js";
import DSidebar from "../../components/Desktop/DSidebar.js";
import DNotes from "../../components/Desktop/DNotes.js";

const DView = () => {
	const [selected, setSelected] = useState("");
	const [notes, setNotes] = useState([]);
	return (
		<div className="desktop">
			<DSidebar selected={selected} setSelected={setSelected} />
			{selected.length > 0 ? (
				<DNotes
					notes={notes}
					setNotes={setNotes}
					selected={selected}
					setSelected={setSelected}
				/>
			) : (
				<DHome />
			)}
		</div>
	);
};

export default DView;
