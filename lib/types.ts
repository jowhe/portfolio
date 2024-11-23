type Repo = {
  id: number;
  owner: {
    login: string
  },
  full_name: string;
  html_url: string;
  description: string | null;
};

export type {Repo}