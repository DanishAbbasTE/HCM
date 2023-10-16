import { Component, OnInit, Injector } from '@angular/core';
import { AngularServiceInjector } from 'src/app/sharedClasses/angular-service-injector';

@Component({
  selector: 'common-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent extends AngularServiceInjector implements OnInit {

  constructor(injector: Injector) {
    super(injector);
    sessionStorage.setItem("lang", "en");
    if (sessionStorage.getItem("lang") === 'en') {
        this._translate.setDefaultLang('en');
    }

    // this._translate.setDefaultLang(localStorage.getItem('lang') !== null ? localStorage.getItem('lang') : 'en');
    // this._translate.getTranslation(
    //   localStorage.getItem('lang') !== null ? localStorage.getItem('lang') : 'en'
    // );

    this._translate.currentLang = this._translate.defaultLang;

   }
  langValue: string = 'ur'
  dropDownData: any[] = [
    {
      title: 'Bank',
      class: 'dropdown-item head_item',
      data: [
        {title: 'Bank', class: 'dropdown-item', path: '/Personal_Management/banks/bank_add'}
      ]
    },
    {
      title: 'Demographic',
      class: 'dropdown-item head_item',
      data: [
        {title: 'Demographic Setup', class: 'dropdown-item', path: '/Personal_Management/demographic/demo_graphic_list'},
        {title: 'Organization', class: 'dropdown-item', path: '/Personal_Management/demographic/org_list'},
      ]
    },
    {
      title: 'Employee',
      class: 'dropdown-item head_item',
      data: [
        {title: 'Designation', class: 'dropdown-item', path: '/Personal_Management/employee/designation_list'},
        {title: 'Create Employee', class: 'dropdown-item', path: '/Personal_Management/employee/create_employee_list'},
        {title: 'Employee Category', class: 'dropdown-item', path: '/Personal_Management/employee/employee_category_list'},
        {title: 'Gender', class: 'dropdown-item', path: '/Personal_Management/employee/gender_list'},
        {title: 'Marital Satus', class: 'dropdown-item', path: '/Personal_Management/employee/marital_status_list'},
        {title: 'Policy Defined', class: 'dropdown-item', path: '/Personal_Management/employee/policy_defined_list'},
        {title: 'Religion', class: 'dropdown-item', path: '/Personal_Management/employee/religion_list'},
        {title: 'Weekly off', class: 'dropdown-item', path: '/Personal_Management/employee/weekly_off_list'},
        {title: 'Gazetted Holidays', class: 'dropdown-item', path: '/Personal_Management/employee/gazetted_holidays'},
        {title: 'Qualification Level', class: 'dropdown-item', path: '/Personal_Management/employee/qualification_level_list'},
      ]
    },
  ]



  sideBarData: any[] = [
    {
      title: 'Employees',
      class: 'first_lvl',
      data: [
        {title: 'Employees', class: 'second_lvl', path: '/', subData: []},
        {title: 'Contracts', class: 'second_lvl', path: '/', subData: []},
        {title: 'All Contracts', class: 'second_lvl', path: '/', subData: []},
      ]
    },
    {
      title: 'Departments',
      class: 'first_lvl',
      data: []
    },
    {
      title: 'Reporting',
      class: 'first_lvl',
      data: [
        {title: 'Contracts', class: 'second_lvl', path: '/', subData: []},
      ]
    },
    {
      title: 'Configuration',
      class: 'first_lvl',
      data: [
        {title: 'Settings', class: 'second_lvl', path: '/', subData: []},
        {
          title: 'Employee',
          class: 'second_lvl', 
          path: '/',
          subData: [
            {title: 'Departments', class: 'third_lvl', path: '/'},
            {title: 'Work Locations', class: 'third_lvl', path: '/'},
            {title: 'Departure Reasons', class: 'third_lvl', path: '/'}
          ]
        },
        {
          title: 'Recruitment',
          class: 'second_lvl', 
          path: '/',
          subData: [
            {title: 'Job Positions', class: 'third_lvl', path: '/'},
            {title: 'Employment Types', class: 'third_lvl', path: '/'},
          ]
        },
      ]
    },
  ]

  language: any[] = [
    {code: 'en', title: 'English'},
    {code: 'ur', title: 'Urdu'},
    {code: 'ar', title: 'Arabic'}
  ]

  ngOnInit(): void {
    let lang = localStorage.getItem("lang");
    if (lang) {
      this._translate.use(lang); 
    }
  }

  setLanguageEnvironment(lang: any){
    if (lang.code == 'ur') {
      localStorage.setItem("lang", lang.code); 
      this._translate.use(lang.code);
    }
    else if(lang.code == 'ar') {
      localStorage.setItem("lang", lang.code); 
      this._translate.use(lang.code);
    }
    else{
      localStorage.setItem("lang", lang.code); 
      this._translate.use(lang.code);
    }
  }
}
