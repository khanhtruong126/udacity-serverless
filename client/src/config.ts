// TODO: Once your application is deployed, copy an API id here so that the frontend could interact with it
const apiId = 'ymds2iqbr2'
export const apiEndpoint = `https://${apiId}.execute-api.us-east-1.amazonaws.com/dev`
export const authConfig = {
  // TODO: Create an Auth0 application and copy values from it into this map. For example:
  // domain: 'dev-nd9990-p4.us.auth0.com',
  domain: 'dev-kx8d48k701p5ztya.us.auth0.com', // Auth0 domain
  clientId: 'gh60229xFKnGUEVY2z2csmhtD855IIdK', // Auth0 client id
  callbackUrl: 'http://localhost:3000/callback'
}
