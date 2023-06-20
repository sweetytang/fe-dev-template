declare module "*.scss";
declare module "*.png";
declare module "*.jpg";
declare module "*.json";
declare module "*.svg";

declare module "@loadable/component" {
  import { ReactElement } from "react";

  interface IDynamicFn {
    (): ReactElement;
  }
  export default function loadable(dynamic: IDynamicFn): ReactElement;
}
