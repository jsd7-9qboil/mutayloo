import React from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { useLocation, Link } from "react-router-dom";

const BreadcrumbSmall = () => {
  const location = useLocation();
  const pathName = location.pathname.split("/").filter((path) => path !== "");

  return (
    <>
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>
          {pathName.map((value, index) => {
            const to = `/${pathName.slice(0, index + 1).join("/")}`;
            const isLast = index === pathName.length - 1;

            return (
              <React.Fragment key={to}>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  {isLast ? (
                    <BreadcrumbPage>{value}</BreadcrumbPage>
                  ) : (
                    <BreadcrumbLink href={to}>{value}</BreadcrumbLink>
                  )}
                </BreadcrumbItem>
              </React.Fragment>
            );
          })}
        </BreadcrumbList>
      </Breadcrumb>
    </>
  );
};

export default BreadcrumbSmall;
