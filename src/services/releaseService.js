import apiClient from "./apiClient";

export async function getReleases() {
  const response = await apiClient.get("/releases");
  return response.data;
}

export async function getRelease(releaseNumber) {
  const response = await apiClient.get(
    `/releases/${encodeURIComponent(releaseNumber)}`
  );

  return response.data;
}