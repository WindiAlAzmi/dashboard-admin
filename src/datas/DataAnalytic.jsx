export function DataPosition() {
  return [
    {
      id: 1,
      title: "Available Position",
      total: 24,
      amount: 4,
      status: "Urgently needed",
    },
    {
      id: 2,
      title: "Job Open",
      total: 10,
      amount: 4,
      status: "Active hiring"
    },
    {
      id: 3,
      title: "New Employees",
      total: 24,
      amount: 4,
      status: "Department"
    },
  ];
}

export function DataGraph() {
  return [
    {
      id: 1,
      title: "Total Employees",
      total: 216,
      genderDistribution: {
        men: 120,
        women: 96,
      },
      growth: {
        percentage: "+2%",
        description: "Past month",
      },
    },
    {
      id: 2,
      title: "Talent Request",
      total: 16,
      genderDistribution: {
        men: 6,
        women: 10,
      },
      growth: {
        percentage: "+5%",
        description: "Past month",
      },
    },
  ];
}


export function DataColorAnalytic() {
  return [
    {
      id: 1,
      title: "Available Position",
      color: "#FF5151",
      backgroundColor: "#FFEFE7",
    },
    {
      id: 2,
      color: "#3786F1",
      backgroundColor: "#E8F0FB",
    },
    {
      id: 3,
      color: "#EE61CF",
      backgroundColor: "#FDEBF9",
    },
  ];
}
