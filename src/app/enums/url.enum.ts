// END POINTS
export enum URLz {
  DEFAULT = '',
  NO_SET = 'End_Point_Not_Set',

  // ====================== GET CALLS ====================== //

  LOAD_ALL_CONFIG_DATA = "config/LoadAllConfigData",
  CONFIG_DEMO_GRAPHIC = "Demographic/LoadConfigDemographicLevelsByParameters",
  LOAD_PM_DEMOGRAPHIC_LEVELS_BY_FILTERS = "Demographic/LoadPMDemographicLevelsByParent",
  COFIG_ORGANIZATION_DEMO_GRAPHIC = "Organization/LoadConfigOrganizationLevelsByParameters",
  PM_ORG_LEVEL_BY_LEVEL_ID = "Organization/LoadPMOrganizationLevelsByLevelId",
  GET_ALL_DESIGNATION = "Designation/LoadAllDesignationData",
  GET_ALL_GENDERS = "Gender/LoadAllGenderData",


  // =================== POST CALLS ===================== //


  SAVE_DEMOGRAPHIC_CONFIG_LIST = "Demographic/SaveDemographicsConfigList",
  SAVE_DEMOGRAPHIC_CONFIG = "Demographic/SaveDemographicsConfig",
  SAVE_DEMOGRAPHIC_SETUP = "Demographic/SaveDemographicSetup",
  SAVE_ORG_SETUP = "Organization/SaveOrganizationSetup",
  SAVE_LOAD_COMPANY_MANAGEMENT = "Company/SaveLoadCompanyManagement",
  SAVE_DESIGNATION = "Designation/SaveDesignationSetup",
  SAVE_GENDER = "Gender/SaveGender"
}
