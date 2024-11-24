type Repo = {
  id: number;
  owner: {
    login: string
  },
  name: string;
  html_url: string;
  description: string | null;
};

export type {Repo}