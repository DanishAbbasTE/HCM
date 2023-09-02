// END POINTS
export enum URLz {
  DEFAULT = '',
  NO_SET = 'End_Point_Not_Set',

  // ====================== GET CALLS ====================== //

  // :::::::::::::  CONFIG LEVEL GETS ::::::::::::: //
  LOAD_ALL_CONFIG_DATA = "config/LoadAllConfigData",

  // ::::::::::::::: COFIG DEMOGRAPHIC GETS:::::::::::: //
  CONFIG_DEMO_GRAPHIC = "Demographic/LoadConfigDemographicLevelsByParameters",


  // ::::::::::::::: DEMOGRAPHIC SETUP GETS:::::::::::: //
  // LoadPMDemographicLevelsByFilters
  LOAD_PM_DEMOGRAPHIC_LEVELS_BY_FILTERS = "Demographic/LoadPMDemographicLevelsByParent",



  // =================== POST CALLS ===================== //

  // ::::::::::::::: COFIG DEMOGRAPHIC POSTS:::::::::::: //

  SAVE_DEMOGRAPHIC_CONFIG_LIST = "Demographic/SaveDemographicsConfigList",
  SAVE_DEMOGRAPHIC_CONFIG = "Demographic/SaveDemographicsConfig",

  // ::::::::::::::: DEMOGRAPHIC SETUP POSTS:::::::::::: //

  SAVE_DEMOGRAPHIC_SETUP = "Demographic/SaveDemographicSetup",


  // :::::::::::::::: COMPANY MANAGEMENT :::::::::::::::::::: //
  SAVE_LOAD_COMPANY_MANAGEMENT = "Company/SaveLoadCompanyManagement"
}
