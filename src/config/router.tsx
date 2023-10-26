import * as S from "./styles";

import { Suspense, ReactNode } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Login from "@/pages/login";
import Dashboard from "@/pages/dashboard";
import { Spinner } from "@/components/ui";
import Sidebar from "@/components/sidebar";
import TopBar from "@/components/topbar";
import Users from "@/pages/users";
import DetailedUser from "@/pages/detaileduses";
import Profile from "@/pages/profile";
import Notifications from "@/pages/notifications";
import FAQ from "@/pages/faq";
import NewFAQ from "@/pages/newFaq";
import NewNotification from "@/pages/newNotification";
import { LayoutProps } from "@/config/types";

function Layout({ children }: LayoutProps) {
  return (
    <div>
      <S.Body>
        <S.ContainerLeft>
          <Sidebar />
        </S.ContainerLeft>
        <S.ContainerRight>
          <TopBar></TopBar>
          <S.ContainerContent>
            <div>{children}</div>
          </S.ContainerContent>
        </S.ContainerRight>
      </S.Body>
    </div>
  );
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/dashboard",
    element: (
      <Layout>
        <Dashboard />
      </Layout>
    ),
  },
  {
    path: "/users",
    element: (
      <Layout>
        <Users />
      </Layout>
    ),
  },
  {
    path: "/plans",
    element: <Layout></Layout>,
  },
  {
    path: "payments",
    element: <Layout></Layout>,
  },
  {
    path: "/specialties",
    element: <Layout></Layout>,
  },
  {
    path: "/notifications",
    element: (
      <Layout>
        <Notifications />
      </Layout>
    ),
  },
  {
    path: "/faq",
    element: (
      <Layout>
        <FAQ></FAQ>
      </Layout>
    ),
  },
  {
    path: "/users/details",
    element: (
      <Layout>
        <DetailedUser />
      </Layout>
    ),
  },
  {
    path: "/profile",
    element: (
      <Layout>
        <Profile />
      </Layout>
    ),
  },
  {
    path: "/faq/new",
    element: (
      <Layout>
        <NewFAQ />
      </Layout>
    ),
  },
  {
    path: "/notification/new",
    element: (
      <Layout>
        <NewNotification />
      </Layout>
    ),
  },
]);

export default function Router() {
  return (
    <Suspense fallback={<Spinner />}>
      <RouterProvider router={router} />
    </Suspense>
  );
}
