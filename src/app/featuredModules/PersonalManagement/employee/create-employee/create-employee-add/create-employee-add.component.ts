import { Component, ElementRef, Injector, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { URLz } from 'src/app/enums/url.enum';
import { StateService } from 'src/app/services/state.service';
import { BaseForm } from 'src/app/sharedClasses/base-from';
import { environment } from 'src/environments/environment';

@Component({
    selector: 'app-create-employee-add',
    templateUrl: './create-employee-add.component.html',
    styleUrls: ['./create-employee-add.component.css']
})
export class CreateEmployeeAddComponent extends BaseForm implements OnInit {
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
            nexToKinName: [''],
            nexToKinContact: [''],
            nexToKinRelationId: [''],
            nexToKinCNIC: [''],
            emergencyContactName: [''],
            emergencyContactNumber: [''],
            emergencyContactRelationId: [''],
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

    changeToApprover(event: any){
        console.log(event);
        
        return event.nexToKinCNIC;
    }

    onSubmit() {
        let isLeave: any = document?.getElementById('hasLeave');
        let leaveCheck = isLeave.childNodes[0].childNodes[1].childNodes[0]
        this.isChecked = leaveCheck?.checked ? true : false;
        this._fs._form.markAllAsTouched();
        this._vs._submitted = true;
        this._vs.logForm();
        if (this._fs._form.valid) {
            this._fs._form.patchValue({hasLeaved: this.isChecked})
            if (this._activeId) {
                this._fs._form.addControl('id', new FormControl(this._activeId));
            }
            this._http.create({
                url: environment.API_URL,
                endpoint: URLz.SAVE_EMPLOYEE,
                body: this._fs._form.value
            })
            .subscribe((res) => {
                if (res != null) {
                    this._swl.prompts({
                        title: this._activeId ? 'Update' : 'Save',
                        text: "Want to leave or stay here",
                    }).then((result) => {
                        if (result.isConfirmed) {
                            this._swl.swal('SuccessFully submited!', 'success', 'success').then((result) => {
                                this._fhs.relocate('/Personal_Management/employee/gender_list')
                            })
                            this._vs._toastr_success('SuccessFully submited', 'success');
                        } else if (result.isDismissed) {
                            this._swl.swal('SuccessFully submited!', 'success', 'success')
                            this._vs._toastr_success('SuccessFully submited', 'success');
                            this._fs._form.reset();
                            this._fs._form.removeControl('id');
                            this._fhs.relocate('/Personal_Management/employee/gender_list');
                            this._fs._form.get('companyId').patchValue(1);
                            this._activeId = '';
                            this._fs._form.get('IsActive').patchValue(true);
                        }
                    })
                }
            })
        }
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
