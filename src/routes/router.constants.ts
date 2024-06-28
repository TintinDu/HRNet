export const routes = {
  HOME: "/",
  EMPLOYEES: "/employees",
} as const;

export type Route = (typeof routes)[keyof typeof routes];
