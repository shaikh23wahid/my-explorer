const useTraverseTree = () => {
  function insertNode(tree, folderId, item, isFolder) {
    if (tree.id === folderId && tree.isFolder) {
      tree.items.unshift({
        id: new Date().getTime(),
        name: item,
        isFolder,
        items: [],
      });

      return tree;
    }

    let latestNode = [];
    latestNode = tree.items.map((obj) => {
      return insertNode(obj, folderId, item, isFolder);
    });

    return { ...tree, items: latestNode };
  }

  // ✅ Delete node using DFS
  function deleteNode(tree, nodeId) {
    if (!tree.isFolder) return tree;

    const filteredItems = tree.items
      .filter((item) => item.id !== nodeId)
      .map((item) => deleteNode(item, nodeId));

    return { ...tree, items: filteredItems };
  }

  // ✅ Update node name using DFS
  function updateNode(tree, nodeId, newName) {
    if (tree.id === nodeId) {
      return { ...tree, name: newName };
    }

    const updatedItems = tree.items.map((item) =>
      updateNode(item, nodeId, newName)
    );

    return { ...tree, items: updatedItems };
  }

  return { insertNode, deleteNode, updateNode };
};

export default useTraverseTree;
