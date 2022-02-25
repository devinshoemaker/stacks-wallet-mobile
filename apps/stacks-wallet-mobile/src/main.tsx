import { ColorModeProvider, ThemeProvider } from '@stacks/ui';
import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom';
import { DefaultOptions, QueryClient, QueryClientProvider } from 'react-query';
import { DEFAULT_POLLING_INTERVAL } from './constants';
import Root from './pages/root';
import { configureStore, history } from './store/configureStore';

const config: DefaultOptions['queries'] = {
  refetchInterval: DEFAULT_POLLING_INTERVAL,
  keepPreviousData: true,
  refetchOnWindowFocus: true,
  staleTime: 30_000,
};

const queryClient = new QueryClient({
  defaultOptions: { queries: config },
});

const { store, persistor } = configureStore();

ReactDOM.render(
  <StrictMode>
    <ThemeProvider>
      <ColorModeProvider defaultMode="dark">
        <QueryClientProvider client={queryClient}>
          <Root store={store} persistor={persistor} history={history} />
        </QueryClientProvider>
      </ColorModeProvider>
    </ThemeProvider>
  </StrictMode>,
  document.getElementById('root')
);
