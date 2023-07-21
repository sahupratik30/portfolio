import { createClient, groq } from "next-sanity";
import { clientConfig } from "./config";
import { Experience, Service, Technology, Testimonial } from "@/types";

// function to get all technologies
export const getTechnologies = async (): Promise<Technology[]> => {
  return await createClient(clientConfig).fetch(groq`*[_type == "technology"]{
    _id,
    _createdAt,
    name,
    "image": image.asset->url,
    "alt": image.alt
  }`);
};

// function to get all services
export const getServices = async (): Promise<Service[]> => {
  return await createClient(clientConfig).fetch(groq`*[_type == "service"]{
    _id,
    _createdAt,
    name,
    description,
    "image": image.asset->url,
    "alt": image.alt
  }`);
};

// function to get all testimonials
export const getTestimonials = async (): Promise<Testimonial[]> => {
  return await createClient(clientConfig).fetch(groq`*[_type == "testimonial"]{
    _id,
    _createdAt,
    name,
    role,
    "image": image.asset->url,
    "alt": image.alt,
    content,
  }`);
};

// function to get all experiences
export const getAllExperiences = async (): Promise<Experience[]> => {
  return await createClient(clientConfig)
    .fetch(groq`*[_type == "experience"] | order(order asc){
    _id,
    _createdAt,
    order,
    role,
    company,
    duration,
    responsibility,
  }`);
};
