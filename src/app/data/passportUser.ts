export interface PassportUser {
  id: string;
  name: string;
  token: any;
  emails: string[];
  photos: string[];
  provider: "google";
  gender: 'male' | 'female';
}
