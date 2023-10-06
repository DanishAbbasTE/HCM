import { Component, Injector, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { StateService } from 'src/app/services/state.service';
import { BaseForm } from 'src/app/sharedClasses/base-from';

@Component({
    selector: 'app-create-employee-add',
    templateUrl: './create-employee-add.component.html',
    styleUrls: ['./create-employee-add.component.css']
})
export class CreateEmployeeAddComponent extends BaseForm implements OnInit {
    _ss: StateService
    work_information: FormGroup | any
    company_setting: FormGroup | any
    hr_setting: FormGroup | any

    constructor(injector: Injector) {
        super(injector)
        this._ss = injector.get(StateService)
    }

    ngOnInit() {
        this.feature()
        this.initForm()
    }

    initForm(){
        return this._fs._form = this._fb.group({
            employeeName: [''],
            designation: [''],
            empRefNo: [''],
            gender: [''],
            f_h_name: [''],
            cnicExpiry: [''],
            birthOfDate: [''],
            email: [''],
            telephone: [''],
            address: [''],
            maritalStatus: [''],
            cinicNo: [''],
            religion: [''],
            mobileNo: [''],
            bloodGroup: [''],
            placeOfBirth: [''],
            permAddress: [''],
            ...this.workInformationForm(),
            ...this.companySettingForm(),
            ...this.hrSettingForm()
        })
    }
    
    workInformationForm (){
        return this.work_information = this._fb.group({
            demographicLevel: [''],
            demographicValue: [''],
            organizationLevel: [''],
            organizationValue: [''],
            officeEmail: [''],
            joiningDate: [''],
            poliDefName: [''],
            employeeCategory: [''],
            fteCount: [''],
            employeeType: ['']
        })
    }

    companySettingForm (){
        return this.company_setting = this._fb.group({
            costCenter: [''],
            employeeBank: [''],
            accountNumber: [''],
            companyBank: [''],
            currency: ['']
        })
    }

    hrSettingForm(){
        return this.hr_setting = this._fb.group({
            gratuityStartDate: [''],
            retirementDate: [''],
            approver: [''],
            leavingDate: [''],
            userGroup: [''],
            designDate: [''],
            leavingReason: [''],
            confirmationDate: [''],
            seniorityDate: [''],
            hasLeaved: ['']
        })
    }

    onSubmit(){
        console.log('hello');
    }

    feature() {
        document.getElementById("FileInput")!.addEventListener('change', (res: any) => {
            const labelVal: string = document.querySelector(".title")!.textContent!;
            const oldfileName: string = (res.target as HTMLInputElement).value;
            const fileName: string = (res.target as HTMLInputElement).value.split('\\').pop()!;

            // if (oldfileName === fileName) {
            //     // return false;
            // }

            const extension: string = fileName.split('.').pop()!;

            if (['jpg', 'jpeg', 'png'].includes(extension)) {
                const filelabelIcons: NodeListOf<HTMLElement> = document.querySelectorAll(".filelabel i");
                filelabelIcons.forEach((icon: HTMLElement) => {
                    icon.className = 'fa fa-file-image-o';
                });

                const filelabelElements: NodeListOf<HTMLElement> = document.querySelectorAll(".filelabel i, .filelabel .title");
                filelabelElements.forEach((element: HTMLElement) => {
                    element.style.color = '#208440';
                });

                const filelabel: HTMLElement | null = document.querySelector(".filelabel");
                if (filelabel) {
                    filelabel.style.border = '2px solid #208440';
                }
            } else if (extension === 'pdf') {
                const filelabelIcons: NodeListOf<HTMLElement> = document.querySelectorAll(".filelabel i");
                filelabelIcons.forEach((icon: HTMLElement) => {
                    icon.className = 'fa fa-file-pdf-o';
                });

                const filelabelElements: NodeListOf<HTMLElement> = document.querySelectorAll(".filelabel i, .filelabel .title");
                filelabelElements.forEach((element: HTMLElement) => {
                    element.style.color = 'red';
                });

                const filelabel: HTMLElement | null = document.querySelector(".filelabel");
                if (filelabel) {
                    filelabel.style.border = '2px solid red';
                }
            } else if (extension === 'doc' || extension === 'docx') {
                const filelabelIcons: NodeListOf<HTMLElement> = document.querySelectorAll(".filelabel i");
                filelabelIcons.forEach((icon: HTMLElement) => {
                    icon.className = 'fa fa-file-word-o';
                });

                const filelabelElements: NodeListOf<HTMLElement> = document.querySelectorAll(".filelabel i, .filelabel .title");
                filelabelElements.forEach((element: HTMLElement) => {
                    element.style.color = '#2388df';
                });

                const filelabel: HTMLElement | null = document.querySelector(".filelabel");
                if (filelabel) {
                    filelabel.style.border = '2px solid #2388df';
                }
            } else {
                const filelabelIcons: NodeListOf<HTMLElement> = document.querySelectorAll(".filelabel i");
                filelabelIcons.forEach((icon: HTMLElement) => {
                    icon.className = 'fa fa-file-o';
                });

                const filelabelElements: NodeListOf<HTMLElement> = document.querySelectorAll(".filelabel i, .filelabel .title");
                filelabelElements.forEach((element: HTMLElement) => {
                    element.style.color = 'black';
                });

                const filelabel: HTMLElement | null = document.querySelector(".filelabel");
                if (filelabel) {
                    filelabel.style.border = '2px solid black';
                }
            }

            if (fileName) {
                const titleElement: HTMLElement | null = document.querySelector(".filelabel .title");
                if (titleElement) {
                    if (fileName.length > 10) {
                        titleElement.textContent = fileName.slice(0, 4) + '...' + extension;
                    } else {
                        titleElement.textContent = fileName;
                    }
                }
            } else {
                const titleElement: HTMLElement | null = document.querySelector(".filelabel .title");
                if (titleElement) {
                    titleElement.textContent = labelVal;
                }
            }
        });

    }


}
