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


  GET_ALL_GENDERS = "Gender/GetAllGenderByPagination",
  GET_ALL_POLICIES = "PolicyDefined/GetAllPolicyDefinedByPagination",
  GET_ALL_WEEKLY_OFFS = "WeeklyOff/GetAllWeeklyOffByPagination",
  GET_ALL_PMDEMOGRAPHIC_LIST  = "Demographic/LoadAllPMDemographicByPagination",
  GET_ALL_PM_ORGANIZATION_LIST = "Organization/LoadAllPMOrganizationByPagination",
  GET_ALL_DESIGNATION_LIST = "Designation/GetAllDesignationByPagination",
  GET_ALL_GENDER_LIST = "Gender/GetAllGenderByPagination",
  GET_ALL_MARITAL_STATUS_LIST ="MartialStatus/GetAllMaritialStatusByPagination",
  GET_ALL_POLICY_DEFINED_LIST = "PolicyDefined/GetAllPolicyDefinedByPagination",
  GET_ALL_RELIGION_LIST ="Religion/GetAllReligionByPagination",
  GET_ALL_WEEKLY_OFF_LIST = "WeeklyOff/GetAllWeeklyOffByPagination",
  GET_ALL_QUALIFICATION_LEVEL_LIST ="QulificationLevel/GetAllQulificationLevelByPagination",
  GET_ALL_CURRENCY ="Currency/GetAllCurrencyByPagination",
  GET_ALL_NATIONALITY = "Nationality/GetAllNationalityByPagination",
  GET_ALL_LEAVING_REASON = "LeavingReason/GetAllLeavingReasonByPagination",
  GET_ALL_GAZETTED_HOLIDAYS = "GazettedHoliday/GetAllGazettedHolidayByPagination",
  GET_ALL_COST_CENTER = "CostCenter/GetAllCostCenterByPagination",
  GET_ALL_EMPLOYEE = "Employee/LoadAllEmployee",



  // ================== GET ONE ======================== //

  GE_DEMO_GRAPHIC_BY_ID = "Demographic/GetPMDemographicById",
  GE_GENDER_BY_ID = "Gender/GetGenderById",
  GET_MARTIAL_STATUS_BY_ID = 'MartialStatus/GetMartialStatusById',
  // ================== GET ONE ======================== //

  // ================== GET SIDE BAR =================== //

  GET_DEMOGRAPHIC_SIDE_BAR = "Demographic/DemographicSideBar",
  GET_ORGANIZATION_SIDE_BAR = "Organization/OrganizationSideBar",




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
  SAVE_QUALIFICATION_LEVEL ="QulificationLevel/SaveQualificationLevel",
  SAVE_EMPLOYEE = "Employee/SaveEmployee",

  // =================== FOR DROPDOWNS ===================== //

  RELIGION = "Religion/LoadAllReligionData",
  MARITAL_STATUS = "MartialStatus/LoadAllMartialStatusData",
  USER_GENDER = "Gender/LoadAllGenderData",
  DESIGNATION = "Designation/LoadAllDesignationData",
  USER_GROUP = "User/GetAllUserGroups",
  EMPLOYEE_CATEGORY = "Employee/LoadAllEmployeeCategoryData",
  COST_CENTER = "Costcenter/GetAllCostCenter",
  COMPANY_BANK = "Banks/LoadAllBankData",
  CURRENCY = "Currency/GetAllCurrency",
  EMPLOYEE_TYPE = "Employee/GetAllEmployeeTypes",
  LEAVING_REASON = "LeavingReason/LoadAllLeavingReasonData",
  QUALIFICATION_LEVEL = "QulificationLevel/LoadAllQualificationLevelData",
  QUALIFICATION = "Qualification/LoadAllQualificationData"
}
