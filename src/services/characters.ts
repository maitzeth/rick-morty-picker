import { CONFIG } from '@/utils/config';
import { GetCharactersResponse } from '@/types/character';

export const getCharacters = async (page: number) => {
  const result = await fetch(`${CONFIG.RM_API_URL}/character?` + new URLSearchParams({
    page: `${page}`,
  }));

  if (!result.ok) {
    throw new Error('Error al obtener los datos');
  }

  const response: GetCharactersResponse = await result.json();

  return response;
};
