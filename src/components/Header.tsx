import { cn } from "@/lib/utils";
import { useAuth } from "@clerk/clerk-react";
import { LogoContainer } from "./LogoContainer";
import { Container } from "./container";
import { NavigationRoutes } from "./navigationroutes";
import { NavLink } from "react-router-dom";
import { Profilecontainer } from "./profilecontainer";
import { Togglecontainer } from "./togglecontainer";

const Header = () => {
  const { userId } = useAuth();
  return (
    <header
      className={cn(
        "w-full border-b-2 duration-250 transition-all ease-in-out"
      )}
    >
      <Container>
        <div className="flex items-center gap-4 w-full">
          <LogoContainer />

          <nav className="hidden md:flex items-center gap-6">
            <NavigationRoutes />
            {userId && (
              <NavLink
                to={"/generate"}
                className={({ isActive }) =>
                  cn(
                    "text-base text-neutral-600",
                    isActive && "text-neutral-900 font-semibold"
                  )
                }
              >
                Take an Interview
              </NavLink>
            )}
          </nav>
          <div className="ml-auto flex items-center gap-6">
            <Profilecontainer />
            <Togglecontainer/>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
