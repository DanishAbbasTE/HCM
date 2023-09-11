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
  GET_ALL_MARITAL = "MartialStatus/LoadAllMartialStatusData",
  GET_ALL_POLICIES = "PolicyDefined/LoadAllPolicyDefinedData",
  GET_ALL_RELIGION = "Religion/LoadAllReligionData",
  GET_ALL_WEEKLY_OFFS = "WeeklyOff/LoadAllWeeklyOffData",
  GET_ALL_GAZETTED_HOLIDAY = "GazettedHoliday/LoadAllGazettedHolidayData",
  GET_ALL_QUALIFICATION_LEVEL = "QulificationLevel/LoadAllQualificationLevelData",
  GET_ALL_PMDEMOGRAPHIC_LIST  = "Demographic/LoadAllPMDemographic",
  GET_ALL_PM_ORGANIZATION_LIST = "Organization/LoadAllPMOrganization",
  GET_ALL_DESIGNATION_LIST = "Designation/LoadAllDesignationData",
  GET_ALL_GENDER_LIST = "Gender/LoadAllGenderData",
  GET_ALL_MARITAL_STATUS_LIST ="MartialStatus/LoadAllMartialStatusData",
  GET_ALL_POLICY_DEFINED_LIST = "PolicyDefined/LoadAllPolicyDefinedData",
  GET_ALL_RELIGION_LIST ="Religion/LoadAllReligionData",
  GET_ALL_WEEKLY_OFF_LIST = "WeeklyOff/LoadAllWeeklyOffData",
  GET_ALL_QUALIFICATION_LEVEL_LIST ="QulificationLevel/LoadAllQualificationLevelData",



  // =================== POST CALLS ===================== //


  SAVE_DEMOGRAPHIC_CONFIG_LIST = "Demographic/SaveDemographicsConfigList",
  SAVE_DEMOGRAPHIC_CONFIG = "Demographic/SaveDemographicsConfig",
  SAVE_DEMOGRAPHIC_SETUP = "Demographic/SaveDemographicSetup",
  SAVE_ORG_SETUP = "Organization/SaveOrganizationSetup",
  SAVE_LOAD_COMPANY_MANAGEMENT = "Company/SaveLoadCompanyManagement",
  SAVE_DESIGNATION = "Designation/SaveDesignationSetup",
  SAVE_GENDER = "Gender/SaveGender",
  SAVE_MARITAL_STATUS = "MartialStatus/SaveMartialStatus",
  SAVE_POLICY_DEFINED = "PolicyDefined/SavePolicyDefinedSetup",
  SAVE_RELIGION = "Religion/SaveReligion",
  SAVE_WEEKLY_OFFS = "WeeklyOff/SaveWeeklyOff",
  SAVE_GAZETTED_HOLIDAY="GazettedHoliday/SaveGazettedHoliday",
  SAVE_QUALIFICATION_LEVEL ="QulificationLevel/SaveQualificationLevel"
}
