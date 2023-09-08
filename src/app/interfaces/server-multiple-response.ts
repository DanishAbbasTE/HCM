export interface ServerMultipleResponse {
  responseCode: number;
  responseType : string;
  responseMessage : string;
  data: any[];
  totalRecords: number;
}


// responseCode: number;
//   responseType : string;
//   responseMessage : string;
//   data: {
//     records: any[];
//     totalRecords: number;
//   };
