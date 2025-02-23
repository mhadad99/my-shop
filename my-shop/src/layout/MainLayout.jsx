import React, { useEffect } from "react";
import { Header } from "../components/Header";
import { Home } from "../pages/Home";
import { Products } from "../pages/Products";
import { ProductForm } from "../pages/ProductForm";
import { ProductDetails } from "../pages/ProductDetails";
import { NotFound } from "../pages/NotFound";
import {
  BrowserRouter,
  Route,
  Routes,
  useNavigate,
  useParams,
} from "react-router-dom";
import { SharedLayout } from "../SharedLayout/SharedLayout";
import { SignIn } from "../pages/SignIn";
import LoginPage from "../pages/LoginPage";
import RegisterForm from "../pages/RegisterForm";
import Cart from "../pages/Cart";

export function MainLayout() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="products" element={<Products />} />
          <Route path="products/:id" element={<ProductDetails />} />
          <Route path="products/:id/edit" element={<ProductForm />} />
          <Route path="cart" element={<Cart />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="register" element={<RegisterForm />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
