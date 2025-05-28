import { useState } from "react";

function Folder({ handleInsertNode, handleDeleteNode, explorerData }) {
  console.log(explorerData);
  const [expand, setExpand] = useState(false);
  const [showInput, setShowInput] = useState({
    visible: false,
    isFolder: null,
  });

  const handleNewFolder = (e, isFolder) => {
    e.stopPropagation();
    setExpand(true);
    setShowInput({
      visible: true,
      isFolder,
    });
  };

  const onAddFolder = (e) => {
    if (e.keyCode === 13 && e.target.value) {
      handleInsertNode(explorerData.id, e.target.value, showInput.isFolder);
      setShowInput({ ...showInput, visible: false });
    }
  };

  const onDeleteNode = (e, item) => {
    e.stopPropagation();
    handleDeleteNode(item);
  };

  if (explorerData.isFolder) {
    return (
      <div style={{ marginTop: 5 }}>
        <div className="folder" onClick={() => setExpand(!expand)}>
          <span>📁{explorerData.name}</span>

          <div>
            <button onClick={(e) => handleNewFolder(e, true)}>Folder + </button>
            <button onClick={(e) => handleNewFolder(e, false)}>File + </button>
            <button onClick={(e) => onDeleteNode(e, explorerData)}>🎗</button>
          </div>
        </div>

        <div style={{ display: expand ? "block" : "none", paddingLeft: 25 }}>
          {showInput.visible && (
            <div className="inputContainer">
              <span>{showInput.isFolder ? "📁" : "🗄"}</span>
              <input
                type="text"
                onKeyDown={onAddFolder}
                onBlur={() => setShowInput({ ...showInput, visible: false })}
                className="inputContainer__input"
                autoFocus
              />
            </div>
          )}

          {explorerData.items.map((exp) => {
            return (
              <Folder
                handleDeleteNode={handleDeleteNode}
                handleInsertNode={handleInsertNode}
                explorerData={exp}
                key={exp.id}
              />
            );
          })}
        </div>
      </div>
    );
  } else {
    return <span className="file">🗄 {explorerData.name}</span>;
  }
}

export default Folder;
