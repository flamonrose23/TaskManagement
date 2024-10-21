const dt = new Date();
const month = dt.getMonth() + 1;
const navbarList = [
  {
    name: "all",
    value: "all",
  },
  {
    name: "Today",
    value: `${month}/${dt.getDate()}`,
  },

  {
    name: "status",
    value: "Pending",
  },
  {
    name: "status",
    value: "In progress",
  },
  {
    name: "status",
    value: "Complete",
  },
  {
    name: "priority",
    value: "low priority",
  },
  {
    name: "priority",
    value: "medium priority",
  },
  {
    name: "priority",
    value: "high priority",
  },
];
export default navbarList;
