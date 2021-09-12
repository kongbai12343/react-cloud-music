import { Redirect } from "react-router-dom";

import Discover from "@/pages/discover";
import My from "@/pages/my";
import Friends from "@/pages/friends";


const routes = [
  {
    path: "/",
    exact: true,
    render: () => (
      <Redirect to="/discover" />
    )
  },
  {
    path: "/discover",
    component: Discover
  },
  {
    path: "/my",
    component: My
  },
  {
    path: "/friend",
    component: Friends
  }

]

export default routes