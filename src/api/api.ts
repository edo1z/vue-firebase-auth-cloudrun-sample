import { Profile } from "@/models/model";

const baseUrl = process.env.VUE_APP_ENDPOINT_URL;

export const hello = async (): Promise<string> => {
  return await fetch(baseUrl + "hello").then((res) => res.text());
};
export const ping = async (): Promise<string> => {
  return await fetch(baseUrl + "ping").then((res) => res.text());
};
export const profile = async ({
  idToken,
}: {
  idToken: string;
}): Promise<Profile> => {
  if (!idToken) throw new Error("idToken is empty.");
  const headers = new Headers({
    Authorization: `Bearer ${idToken}`,
  });
  const options = {
    method: "GET",
    headers: headers,
  };
  return await fetch(baseUrl + "profile", options).then((res) => res.json());
};
