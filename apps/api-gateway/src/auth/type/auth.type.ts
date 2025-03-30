export type emailConfirmationType = {
  confirmationCode: string;
  expirationDate: Date;
  isConfirmed: boolean;
};

export type UserType = {
  username: string;
  email: string;
  passwordHash: string;
  emailConfirmation: emailConfirmationType;
  agreeToTerms: boolean;
};

export type UserMapOutput = {
  userId: string;
  username: string;
  email: string;
  agreeToTerms: boolean;
  createdAt: Date;
  updatedAt: Date;
  isConfirmed: boolean;
};

export type EmailConfirmationWithUser = {
  id: string;
  confirmationCode: string;
  expirationDate: Date;
  isConfirmed: boolean;
  userId: string;
  user: {
    userId: string;
    username: string;
    email: string;
    passwordHash: string;
    agreeToTerms: boolean;
    createdAt: Date;
    updatedAt: Date;
  };
};

export type TokensType = {
  accessToken: string;
  refreshToken: string;
};

export type GithubType = {
  githubId: string;
  username: string;
  email: string;
};
