export class Nodule {
  id: number;
  title: string;
  node: string;
  loginUrl: string;
  homeUrl: string;
  config: NodeConfig;
  options: any
};

export interface Credential {
  userName: string;
  password: string;
};

export interface NodeConfig {
  protocol: string;
  prefix: string;
  suffix: string;
  useDefaultLogin: boolean;
  defaultCredentials: Credential
};

export class Options
{
  key:string;
  type:any;
  value:any;
  
  /*
    {
      key: "target", type: "string", value: "_new"
    }
  */
}