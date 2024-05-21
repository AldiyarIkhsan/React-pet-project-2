import { ContentItem, ContentRequest } from "../interfaces/content";
import { client } from "./client";

export const getContent = async (path: string): Promise<ContentRequest[]> => {
  return (await client.get(`/${path}`)).data;
};

export const getContentById = async (id: string): Promise<ContentItem> => {
  return (await client.get(`/quotes/${id}.json`)).data;
};

export const postContent = async (path: string, payload: ContentRequest) => {
  return await client.post(`/${path}.json`, payload);
};

export const putContent = async (
  dataId: string,
  payload: ContentRequest
) => {
  await client.put(`/quotes/${dataId}.json`, payload);
};

export const deleteContent = async (dataId: string) => {
  await client.delete(`/quotes/${dataId}.json`);
};
