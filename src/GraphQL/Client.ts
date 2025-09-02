import {
  ApolloClient,
  InMemoryCache,
  type NormalizedCacheObject,
} from "@apollo/client";

const Client: ApolloClient<NormalizedCacheObject> = new ApolloClient({
  uri: "",
  cache: new InMemoryCache(),
});

export default Client;
