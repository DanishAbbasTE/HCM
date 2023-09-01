import { Component, OnInit ,AfterViewInit} from '@angular/core';
@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {

    const g_l_ActiveElements = document.querySelectorAll('.g_l_Active');
    g_l_ActiveElements.forEach(element => {
      element.addEventListener('click', () => {
        if (!element.classList.contains('active')) {
          g_l_ActiveElements.forEach(el => el.classList.remove('active'));
        }
        element.classList.add('active');
      });
    });

    const showAllElement = document.querySelector('.showAll');
    const showOnliAminElement = document.querySelector('.showOnliAmin');
    const showOnliHRElement = document.querySelector('.showOnliHR');
    const gri_list_dBoxesElements = document.querySelectorAll('.gri_list_dBoxes');
    const sideTabsElements = document.querySelectorAll('.sideTabs');
    const adminElements = document.querySelectorAll('.admin');
    const hrmanagerElements = document.querySelectorAll('.hrmanager');

    showAllElement?.addEventListener('click', () => {
      gri_list_dBoxesElements.forEach(element => element.classList.remove('d-none'));
      sideTabsElements.forEach(element => element.classList.remove('active'));
      showAllElement.classList.add('active');
    });

    showOnliAminElement?.addEventListener('click', () => {
      gri_list_dBoxesElements.forEach(element => element.classList.add('d-none'));
      adminElements.forEach(element => element.classList.remove('d-none'));
      sideTabsElements.forEach(element => element.classList.remove('active'));
      showOnliAminElement.classList.add('active');
    });

    showOnliHRElement?.addEventListener('click', () => {
      gri_list_dBoxesElements.forEach(element => element.classList.add('d-none'));
      hrmanagerElements.forEach(element => element.classList.remove('d-none'));
      sideTabsElements.forEach(element => element.classList.remove('active'));
      showOnliHRElement.classList.add('active');
    });
  }


  gridActive() {
    const gridElements = document.querySelectorAll('.grid__view__col');
    const listElements = document.querySelectorAll('.list__view__col');

    gridElements.forEach(element => element.classList.remove('d-none'));
    listElements.forEach(element => element.classList.add('d-none'));
  }

  listActive() {
    const gridElements = document.querySelectorAll('.grid__view__col');
    const listElements = document.querySelectorAll('.list__view__col');

    gridElements.forEach(element => element.classList.add('d-none'));
    listElements.forEach(element => element.classList.remove('d-none'));
  }

}
