import apiClient from ".";

export const getAllPets = async () => {
  const response = await apiClient.get("/pets");
  return response.data;
};

export const getPetById = async (id: string) => {
  const response = await apiClient.get(`/pets/${id}`);
  return response.data;
};

export const addPet = async (
  name: String,
  image: string,
  type: string,
  adopted: string
) => {
  const response = await apiClient.post("/pets", {
    name,
    image,
    type,
    adopted,
  });
  return response.data;
};

export const deletePet = async (id: string) => {
  const response = await apiClient.delete(`/pets/${id}`);
  return response.data;
};
