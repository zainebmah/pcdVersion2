export interface Site {
  id: number;
  titre: string;
  description: Text;
  image: string;
  gouvernorat: string;
  adresse: string;
  monuments: Monument[];
  surface: number;
  dateOuverture: string;
  nbreVisiteurs: number;
  users: User[];
  }
export interface Monument {
  idM: number;
  titre: string;
  descAng: string;
  descFr: string;
  descAr: string;
  sites: Site[];
  }
export interface User {
  userId: number;
  nom: string;
  prenom: string;
  email: string;
  mdp: string;
  dateInscrip: string;
  nationalite: string;
  sites: Site[];
  admin?: Admin;
  }
export interface Admin {
  adminId: number;
  nom: string;
  prenom: string;
  mail: string;
  mdp: string;
  users: User[];
}
export interface Image {
  imageId: number;
  titre: string;
}