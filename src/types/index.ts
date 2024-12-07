export interface TeamMember {
  name: string;
  position: string;
  image: string;
}

export interface DepartmentTeam {
  name: string;
  head: TeamMember;
  members: TeamMember[];
}

export interface Event {
  id: string;
  title: string;
  date: string;
  image: string;
  description: string;
  isUpcoming: boolean;
}

export interface Collaboration {
  id: string;
  title: string;
  image: string;
  description: string;
  instagramLink?: string;
}