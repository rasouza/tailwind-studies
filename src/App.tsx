import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import "./App.css";
import { Sidebar } from "src/components/Sidebar";
import { Home } from "src/features/Home";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="flex min-h-screen bg-black">
        <BrowserRouter>
          <Sidebar />
          <Switch>
            <Route path="/">
              <Home />
            </Route>
            <Route path="/settings">
              <Home />
            </Route>
          </Switch>
        </BrowserRouter>
      </div>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;
