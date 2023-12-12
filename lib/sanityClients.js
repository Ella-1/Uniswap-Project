import sanityClient from '@sanity/client';

export const client = sanityClient({
  projectId: 'kqk0h87k',
  dataset: 'production',
  apiVersion: 'v1',
  token: 'skdzdZj434b8q7IN4nIBEdzun7TIOUcn2PUJs40C0fsVZvrTf6J9D7QXlYkyq2yCo5mIBOqfq2mnjFpivtowZnQC9HLspxJ2NiasSNaLeO2kuGUZhhRksczniOyjMcFH6yuUuNnCHPwXJB2qi7bp2oZR3DigyfwfEhZaoXoueCbnCSanr4A6',
  useCdn: false  // Corrected from flase to false
});
