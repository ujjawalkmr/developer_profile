import { Suspense, lazy } from "react";

const Home = lazy(() => import("./pages/Home"));

function App() {
  return (
    <Suspense fallback={<div className="loader">Loading Application...</div>}>
      <Home />
    </Suspense>
  );
}

export default App;