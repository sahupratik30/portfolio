import { PortableTextBlock } from "sanity";

export type Technology = {
  _id: string;
  _createdAt: Date;
  name: string;
  image: string;
  alt: string;
};

export type Service = {
  _id: string;
  _createdAt: Date;
  name: string;
  description: string;
  image: string;
  alt: string;
};

export type Testimonial = {
  _id: string;
  _createdAt: Date;
  name: string;
  role: string;
  image: string;
  alt: string;
  content: string;
};

export type Experience = {
  _id: string;
  _createdAt: Date;
  role: string;
  company: string;
  duration: string;
  responsibility: PortableTextBlock[];
};

export type Project = {
  _id: string;
  _createdAt: Date;
  name: string;
  slug: string;
  image: string;
  alt: string;
  description: string;
  url: string;
  source: string;
  tags: string[];
  content: PortableTextBlock[];
};
