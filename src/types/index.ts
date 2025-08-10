export interface User {
  id: string;
  email: string;
  name: string;
  username?: string;
  avatar?: string;
  joinDate: string;
  credit: number;
}

export interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<void>;
  register: (name: string, email: string, password: string) => Promise<void>;
  loginWithGoogle: () => Promise<void>;
  logout: () => void;
  isLoading: boolean;
  updateProfile: (data: Partial<User>) => Promise<void>;
}

export interface Website {
  id: string;
  name: string;
  domain: string;
  status: 'active' | 'inactive' | 'pending';
  plan: 'Basic' | 'Professional' | 'Enterprise';
  visitors: number;
  lastUpdated: string;
  thumbnail: string;
  userId: string;
}

export interface Transaction {
  id: string;
  userId: string;
  amount: number;
  type: 'topup' | 'payment' | 'refund';
  method: 'qr' | 'truemoney' | 'angpao' | 'code';
  status: 'pending' | 'completed' | 'failed';
  date: string;
  description: string;
}