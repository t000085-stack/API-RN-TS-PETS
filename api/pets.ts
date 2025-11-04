import apiClient from ".";

export const getAllPets = async () => {
  const response = await apiClient.get("/pets");
  return response.data;
};

export const getPetById = async (id: string) => {
  const response = await apiClient.get(`/pets/${id}`);
  return response.data;
};
