// import { Amplify } from 'aws-amplify';
// import { fetchAuthSession } from 'aws-amplify/auth';
// import { LocationClient, AssociateTrackerConsumerCommand } from '@aws-sdk/client-location';
// import outputs from '../amplify_outputs.json';
// Amplify.configure(outputs);

// const createClient = async () => {
//   const session = await fetchAuthSession();
//   const client = new LocationClient({
//     credentials: session.credentials,
//     region: amplifyconfig.aws_project_region
//   });
//   return client;
// };

// export default createClient;