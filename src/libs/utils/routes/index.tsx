import { RoutesConst, RoutesType } from "@/app/types";

export class RoutesSingleton {
  private routes: RoutesType[] = [];

  private static instance: RoutesSingleton;

  constructor() {
    this.initialize();
  }

  private initialize(): void {
    this.routes = [
      {
        path: "/",
        name: "Home",
        icon: {
          dark: "/tytaLogo-white.ico",
          white: "/tytaLogo.ico",
          alt: "Logo",
        },
      },
      {
        path: "/about",
        name: "About",
      },
      {
        path: "/services",
        name: "Services",
      },
      {
        path: "/services/:id",
        name: "ServicesId",
        wid: true,
      },
      {
        path: "/projects",
        name: "Projects",
      },
      {
        path: "/projects/:id",
        name: "ProjectsId",
        wid: true,
      },
      {
        path: "/contact",
        name: "Contact",
      },
      {
        path: "/contact/:id",
        name: "ContactId",
        wid: true,
      },
    ];
  }

  getRoutesId(name: `${string}Id`): string {
    return this.routes.filter((r) => r.name === name)[0].path;
  }

  getNavbarRoutes(): RoutesConst[] {
    return this.routes
      .filter(({ wid }) => wid !== true)
      .map(({ name, path, icon }) => ({ name, path, icon }));
  }

  static getInstance(): RoutesSingleton {
    if (this.instance === null) this.instance = new RoutesSingleton();
    return this.instance;
  }
}
