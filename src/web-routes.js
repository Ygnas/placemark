import { accountsController } from "./controllers/accounts-controller.js";
import { dashboardController } from "./controllers/dashboard-controller.js";
import { aboutController } from "./controllers/about-controller.js";
import { categoryController } from "./controllers/category-controller.js";
import { placemarkController } from "./controllers/placemark-controller.js";

export const webRoutes = [
  { method: "GET", path: "/", config: accountsController.index },
  { method: "GET", path: "/signup", config: accountsController.showSignup },
  { method: "GET", path: "/login", config: accountsController.showLogin },
  { method: "GET", path: "/logout", config: accountsController.logout },
  { method: "POST", path: "/register", config: accountsController.signup },
  { method: "POST", path: "/authenticate", config: accountsController.login },

  { method: "GET", path: "/dashboard", config: dashboardController.index },
  { method: "POST", path: "/dashboard/addcategory", config: dashboardController.addCategory },
  { method: "GET", path: "/dashboard/deletecategory/{id}", config: dashboardController.deleteCategory },

  { method: "GET", path: "/category/{id}", config: categoryController.index },
  { method: "POST", path: "/category/{id}/addplacemark", config: categoryController.addPlacemark },
  { method: "GET", path: "/category/{id}/deleteplacemark/{placemarkid}", config: categoryController.deletePlacemark },

  { method: "GET", path: "/about", config: aboutController.index },

  { method: "GET", path: "/account", config: accountsController.settings },
  { method: "POST", path: "/account/edit", config: accountsController.editSettings },
  { method: "GET", path: "/account/deleteuser/{id}", config: accountsController.deleteUser },
  { method: "GET", path: "/admin", config: accountsController.adminDashboard },

  { method: "GET", path: "/placemark/{id}/editplacemark/{placemarkid}", config: placemarkController.index },
  { method: "POST", path: "/placemark/{id}/updateplacemark/{placemarkid}", config: placemarkController.update },
  
  { method: "POST", path: "/placemark/{id}/uploadimage", config: placemarkController.uploadImage },
  { method: "GET", path: "/placemark/{id}/deleteimage", config: placemarkController.deleteImage },

  { method: "GET", path: "/{param*}", handler: { directory: { path: "./public" } }, options: { auth: false } },
];
