import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import "./App.css";
import { Sidebar } from "src/components/Sidebar";
import routes from "src/routes";

const queryClient = new QueryClient();

const renderRoutes = () =>
  routes.map((route, key) => (
    <Route exact path={route.url} component={route.component} key={key} />
  ));

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="flex min-h-screen bg-black">
        <BrowserRouter>
          <Sidebar />
          <Switch>{renderRoutes()}</Switch>
        </BrowserRouter>
      </div>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;
