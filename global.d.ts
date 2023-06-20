declare module "*.scss";
declare module "*.png";
declare module "*.jpg";
declare module "*.json";
declare module "*.svg";

declare module "@loadable/component" {
  interface IDynamicFn {
    (): any;
  }
  export default function loadable(dynamic: IDynamicFn): any;
}
