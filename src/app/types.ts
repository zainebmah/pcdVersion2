export class Site {
  id: number;
  titre: string;
  gouvernorat: string;
  adresse: string;
  monuments: Monument[];
  surface: number;
  dateOuverture: string;
  nbreVisiteurs: number;
  users: User[];
  description: string;
  image: string;
  }
export class Monument {
  id: number;
  titre: string;
  image: string;
  descAng: string;
  descFr: string;
  descAr: string;
  sites: Site[];
  }
export class User {
  id: number;
  nom: string;
  prenom: string;
  mail: string;
  mdp: string;
  dateInscrip: string;
  nationalite: string;
  sites: Site[];
  admin?: Admin;
  }
export class Admin {
  id: number;
  nom: string;
  prenom: string;
  mail: string;
  mdp: string;
  users: User[];
}
export class Image {
  id: number;
  titre: string;
}