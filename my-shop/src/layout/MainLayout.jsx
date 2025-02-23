import { BrowserRouter, Route, Routes } from "react-router-dom";
import { SharedLayout } from "../SharedLayout/SharedLayout";
import { Home } from "../pages/Home";
import { Products } from "../pages/Products";
import { ProductForm } from "../pages/ProductForm";
import { ProductDetails } from "../pages/ProductDetails";
import { NotFound } from "../pages/NotFound";
import { ProtectedRoute } from "../components/ProtectedRoute"; // Sign-in related
import { SignIn } from "../pages/SignIn";

export function MainLayout() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="login" element={<SignIn />} /> {/* Sign-in related */}
          {/* Protect these routes after sign-in */}
          <Route element={<ProtectedRoute />}>
            {" "}
            {/* Sign-in related */}
            <Route path="products" element={<Products />} />{" "}
            {/* Sign-in related */}
            <Route path="products/:id" element={<ProductDetails />} />{" "}
            {/* Sign-in related */}
            <Route path="products/:id/edit" element={<ProductForm />} />{" "}
            {/* Sign-in related */}
          </Route>
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
