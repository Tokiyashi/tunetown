import axios from 'axios';
import { backendUrl } from '@/common/constants/url';
import { User } from '@/common/types/user';

export async function getUser(id: string): Promise<User> {
  const response = await axios.get(backendUrl + '/users/' + id);

  return response.data;
}
