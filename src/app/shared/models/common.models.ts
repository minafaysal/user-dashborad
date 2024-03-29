export interface USERSDATA {
  page: number;
  per_page: number;
  total: number;
  total_pages: number;
  data: USER[];
  support?: {
    url: string;
    text: string;
  };
}

export interface USER {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
}

export interface USERDETAILSDATA {
  page: number;
  per_page: number;
  total: number;
  total_pages: number;
  data: USERDETAILS;
  support?: {
    url: string;
    text: string;
  };
}

export interface USERDETAILS {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
}
