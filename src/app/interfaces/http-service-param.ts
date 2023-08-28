import { URLz } from 'src/app/enums/url.enum';

export interface HttpServiceParam {
  body?: any; // Specific to CREATE, PATCH, DELETE
  resource?: string | number; // employee/1
  query?: any; // {id:1, name:Muhammad}
  paramObj?:any;
  endpoint?: URLz | string | any; // *Required masjidNabawi
  url?: string | any; // http://www.arab.madina/ || environment.API_URL
}
