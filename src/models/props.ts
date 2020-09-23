export interface PagingContext {
  numPages: number;
  currentPage: number;
  total: number;
  limit: number;
  skip: number;
}

export interface UtmContext {
  siteUrl: string;
  source: string;
  medium: string;
  campaign: string;
}
