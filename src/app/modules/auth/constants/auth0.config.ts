interface AuthConfig {
  clientID: string;
  domain: string;
  callbackURL: string;
}

export const AUTH_CONFIG: AuthConfig = {
  clientID: 'QCDLRCdNauzVKDoxXuz2lELUZNu34tBG',
  domain: 'sivas.auth0.com',
  callbackURL: 'http://localhost:8889/callback'
};
