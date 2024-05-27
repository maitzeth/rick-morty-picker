import { CONFIG } from '@/app/utils/config';
import { GetCharactersResponse } from '@/app/types/character';

export const getCharacters = async (page: number) => {
  try {
    const result = await fetch(`${CONFIG.RM_API_URL}/character?` + new URLSearchParams({
      page: `${page}`,
    }));
  
    if (!result.ok) {
      throw new Error(result.statusText);
    }
  
    const response: GetCharactersResponse = await result.json();
  
    return response;
  } catch (error) {
    const message = (error as Error).message;
    throw new Error(message);
  }
};
