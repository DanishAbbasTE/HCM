import { Component, ElementRef, Injector, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { StateService } from 'src/app/services/state.service';
import { BaseForm } from 'src/app/sharedClasses/base-from';

@Component({
    selector: 'app-create-employee-add',
    templateUrl: './create-employee-add.component.html',
    styleUrls: ['./create-employee-add.component.css']
})
export class CreateEmployeeAddComponent extends BaseForm implements OnInit {
    @ViewChild('is_leave') isLeave?: ElementRef<any>;
    _ss: StateService;
    work_information: FormGroup | any;
    company_setting: FormGroup | any;
    hr_setting: FormGroup | any;
    isMarried: boolean = false;
    imageLink: string = '../../../../../../assets/images/odo/8.png';
    isChecked: boolean = false;

    constructor(injector: Injector) {
        super(injector);
        this._ss = injector.get(StateService);
    }

    ngOnInit() {
        this.feature();
        this.initForm();
    }

    initForm() {
        return this._fs._form = this._fb.group({
            employeeName: [''],
            designation: [''],
            empRefNo: [''],
            attachment: [''],
            gender: [''],
            guardianName: [''],
            cnicExpiry: [''],
            dateOfBirth: [''],
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

    workInformationForm() {
        return this.work_information = {
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
        }
    }

    companySettingForm() {
        return this.company_setting = {
            costCenter: [''],
            employeeBank: [''],
            accountNumber: [''],
            companyBank: [''],
            currency: ['']
        }
    }

    hrSettingForm() {
        return this.hr_setting = {
            gratuityStartDate: [''],
            resignDate: [''],
            retirementDate: [''],
            approver: [''],
            leavingDate: [''],
            userGroup: [''],
            designDate: [''],
            leavingReason: [''],
            confirmationDate: [''],
            seniorityDate: [''],
            hasLeaved: ['']
        }
    }

    checkGuardian(event: any) {
        if (event.target.checked) {
            this._fs._form.removeControl('guardianName');
            this._fs._form.addControl('spouseName', new FormControl(''))
            this.isMarried = true;
        }
        else {
            this._fs._form.removeControl('spouseName');
            this._fs._form.addControl('guardianName', new FormControl(''))
            this.isMarried = false;
        }
    }

    uploadImage(event: any) {
        const file = event.target.files[0];
        if (file) {
            if (file.type.includes('image')) {
                if (file.type !== 'image/gif') {
                    const reader = new FileReader();
                    reader.onload = (e: any) => {
                        this.imageLink = e.target.result;
                    };
                    reader.readAsDataURL(file);
                    this._toastr.success('Succefully Upload');
                }
                else this._toastr.error('Please Select only JPEG, JPG, PNG File');
            }
            else this._toastr.error('Please Select only JPEG, JPG, PNG File');
        }
    }

    onSubmit() {
        this.isChecked = this.isLeave?.nativeElement?.check
        
        console.log(this._fs._form.value);
    }

    feature() {
        document.getElementById("FileInput")!.addEventListener('change', (res: any) => {
            const labelVal: any = document.querySelector(".title")?.textContent;
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
