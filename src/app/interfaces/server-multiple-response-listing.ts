export interface ServerMultipleResponseListing {
  responseCode: number;
  responseType : string;
  responseMessage : string;
  data: {
    draw: number;
    recordsTotal: number;
    recordsFiltered: number;
    data: any[];
  };  
}


// responseCode: number;
//   responseType : string;
//   responseMessage : string;
//   data: {
//     records: any[];
//     totalRecords: number;
//   };
