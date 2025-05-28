import { useState } from "react";
import "./App.css";
import explorer from "./data/folderData";
import Folder from "./components/Folder";
import useTraverseTree from "./hooks/use-traverse-tree";

function App() {
  const [explorerData, setExplorerData] = useState(explorer);

  const { insertNode, deleteNode } = useTraverseTree();

  const handleInsertNode = (folderId, item, isFolder) => {
    const finalTree = insertNode(explorerData, folderId, item, isFolder);

    setExplorerData(finalTree);
  };

  const deleteSelectedNode = (item) => {
    const updatedTree = deleteNode(explorerData, item.id);

    setExplorerData(updatedTree);
  };

  return (
    <>
      <Folder
        handleInsertNode={handleInsertNode}
        handleDeleteNode={deleteSelectedNode}
        explorerData={explorerData}
      />
    </>
  );
}

export default App;
