interface aswarData {
    tempC: number;
    humi: number;
    air_quality_labal:string ;
    sensor_value: number
  }
  
  export const aswar_data: aswarData[] = [

    {
      tempC: 27.0, 
      humi: 40.0, 
      air_quality_labal: "Excellent",
      sensor_value: 49,
    }
  
  ];
  

//   export const account_links: SidebarLink[] = [
//     {
//       title: "Profile",
//       icon: "ion:person",
//       to: "/TheProfile",
//     },
//     {
//       title: "Sign In",
//       icon: "ion:document",
//       to: "/TheSignIn",
//     },
//     {
//       title: "Sign Up",
//       icon: "ion:rocket-sharp",
//       to: "/TheSignUp",
//     },
// ];