import { parseJson } from 'builder-util-runtime';
import { ReactElement } from 'react';
import { useTranslation } from 'react-i18next';
import { QueryClient, QueryClientProvider } from 'react-query';
import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import icon from '../../assets/icon.svg';
import { IGithubUsersDto } from '../main/trpc-server/endpoints/github';
import './App.css';
import { trpc } from './trpc-client/trpc';
import { customLink } from './trpc-client/util';

const Greeting = (props: {
  isLoading: boolean;
  isError: boolean;
  errorMessage: string | null | undefined;
  text: string | undefined;
}) => {
  if (props.isLoading) {
    return <div>Loading...</div>;
  }
  if (props.isError) {
    return <div>Error: {props.errorMessage}</div>;
  }
  return <div>Greeting: {props.text}</div>;
};

const GithubUser = (props: {
  isLoading: boolean;
  isError: boolean;
  errorMessage: string | null | undefined;
  data: IGithubUsersDto | undefined;
}) => {
  if (props.isLoading) {
    return <div>Loading...</div>;
  }
  if (props.isError) {
    return <div>Error: {props.errorMessage}</div>;
  }
  return <div> User Name: {props.data?.name}</div>;
};

const Hello = () => {
  const [t, i18n] = useTranslation();
  const helloQuery = trpc.useQuery(['hello.greeting', { text: 'Kirill' }]);
  const githubUser = trpc.useQuery(['github.users']);
  console.log('data:', githubUser.data);
  // if (helloQuery.isLoading) {
  //   return <div>Loading...</div>;
  // }
  // if (helloQuery.isError) {
  //   return <div>Error: {helloQuery.error.message}</div>;
  // }
  return (
    <div>
      <div className="Hello">
        <img width="200px" alt="icon" src={icon} />
      </div>
      <h1>{t('header.greeting-guest')}</h1>
      <Greeting
        isLoading={helloQuery.isLoading}
        isError={helloQuery.isError}
        errorMessage={
          helloQuery.error != null ? helloQuery.error.message : null
        }
        text={helloQuery.data?.greeting}
      ></Greeting>
      <GithubUser
        isLoading={githubUser.isLoading}
        isError={githubUser.isError}
        errorMessage={
          githubUser.error != null ? githubUser.error.message : null
        }
        data={githubUser.data}
      ></GithubUser>
      <div className="Hello">
        <a
          href="https://electron-react-boilerplate.js.org/"
          target="_blank"
          rel="noreferrer"
        >
          <button type="button">
            <span role="img" aria-label="books">
              📚
            </span>
            Read our docs
          </button>
        </a>
        <a
          href="https://github.com/sponsors/electron-react-boilerplate"
          target="_blank"
          rel="noreferrer"
        >
          <button type="button">
            <span role="img" aria-label="books">
              🙏
            </span>
            Donate
          </button>
        </a>
      </div>
    </div>
  );
};

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      staleTime: Infinity,
    },
  },
});

const trpcClient = trpc.createClient({
  links: [customLink],
});

window.addEventListener('error', (e) => {
  window.appApi.log(`Message: ${e.message}
    LineNo: ${e.lineno}
    Stack: ${e.error?.stack}`);
});

export default function App() {
  return (
    <trpc.Provider client={trpcClient} queryClient={queryClient}>
      <QueryClientProvider client={queryClient}>
        <Routes>
          <Route path="/" element={<Hello />} />
        </Routes>
      </QueryClientProvider>
    </trpc.Provider>
  );
}
