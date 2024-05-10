import Body from "./Components/Body";
import Login from "./Components/Login";
import Browse from "./Components/Browse";
import { Provider } from "react-redux";
import appStore from "./utilis/store/appStore";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

function App() {
  const appRoute = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/browse",
      element: <Browse />,
    },
  ]);
  return (
    <>
      <Provider store={appStore}>
        <RouterProvider router={appRoute}>
          <div className="w-full h-screen ">
            <Body />
          </div>
        </RouterProvider>
      </Provider>
    </>
  );
}

export default App;
