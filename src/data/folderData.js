const explorerData = {
  id: "1",
  name: "Root Folder",
  isFolder: true,
  items: [
    {
      id: "2",
      name: "public",
      isFolder: true,
      items: [
        {
          id: "3",
          name: "public nested 1",
          isFolder: true,
          items: [],
        },
        {
          id: "4",
          name: "index.html",
          isFolder: false,
          items: [],
        },
      ],
    },
    {
      id: "5",
      name: "hello.html",
      isFolder: false,
      items: [
        {
          id: "6",
          name: "Photos",
          isFolder: false,
          items: [],
        },
        {
          id: "7",
          name: "Videos",
          isFolder: true,
          items: [],
        },
      ],
    },
  ],
};

export default explorerData;
