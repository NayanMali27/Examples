import "./App.css";
import Routers from "./Routes";
import { QueryClient, QueryClientProvider } from "react-query";
const queryClient = new QueryClient();
function App() {
  return (
    <div className="App">
      <QueryClientProvider client={queryClient}>
        <Routers />
      </QueryClientProvider>
    </div>
  );
}

export default App;
