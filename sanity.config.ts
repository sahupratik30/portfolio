import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import schemas from "@/sanity/schemas";

const config = defineConfig({
  projectId: "pixtv1xs",
  dataset: "production",
  title: "My Personal Site",
  apiVersion: "2023-07-10",
  basePath: "/admin",
  plugins: [deskTool()],
  schema: { types: schemas },
});

export default config;
