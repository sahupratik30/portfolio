const experiences = {
  name: "experience",
  title: "Experiences",
  type: "document",
  fields: [
    {
      name: "order",
      title: "Order No.",
      type: "number",
    },
    {
      name: "role",
      Title: "Role",
      type: "string",
    },
    {
      name: "company",
      title: "Company",
      type: "string",
    },
    {
      name: "duration",
      title: "Duration",
      type: "string",
    },
    {
      name: "responsibility",
      title: "Responsibility",
      type: "array",
      of: [{ type: "block" }],
    },
  ],
};

export default experiences;
