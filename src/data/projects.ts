/**
 * Project data interface
 */
export interface ProjectData {
  name: string;
  description: string;
  link?: string;
}

/**
 * Sample projects data
 */
export const projects: ProjectData[] = [
  {
    name: "Project Name",
    description: "Project description...",
  },
]; 