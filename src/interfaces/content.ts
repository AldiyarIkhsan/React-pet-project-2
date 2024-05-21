export type ContentItem = {
  id:string,
  author: string,
  category: string,
  text: string,
};

export type ContentRequest = {
  author: string,
  category: string,
  text: string
};

export interface ContentResponse {
  [key: string]: ContentRequest;
}
