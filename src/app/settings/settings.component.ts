import { Feature } from './../interface/feature.model';
import { ThemeService } from './../theme/theme.service';
import { themes } from './../theme/themes.const';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators,FormBuilder,FormArray,ValidatorFn } from '@angular/forms';
import { Router } from "@angular/router";
import { RepositoryService } from '../shared/repository.service';


@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {
  public projectForm: FormGroup;
  activeThem = 'citiusTechDefaultProps';
  featureList: Feature[];
  //  featureList = [
  //   {featureName: 'Personal Information',enabled:false },
  //   {featureName: 'Patient Health History',enabled:false },
  //   {featureName: 'Demographic Details',enabled:false },
  //   {featureName: 'Appointments',enabled:false },
  //   {featureName: 'Upcoming checkups',enabled:false },
  //   {featureName: 'Prescription details',enabled:false }
  // ];

  constructor(private themService: ThemeService,private router: Router,private repository: RepositoryService,) {
  
  }

  ngOnInit() {
    this.getAllFeatures();
    this.projectForm = new FormGroup({
     
      theme: new FormControl(),
      check1: new FormControl(),
      check2: new FormControl(),
      check3: new FormControl(),
      check4: new FormControl(),
      check5: new FormControl(),
      check6: new FormControl(),
     });
  }


   

   public submit(projectFormValue) {
      if (this.projectForm.valid) {
      if(projectFormValue.theme !='' || projectFormValue.theme !='undefined')
      this.applyTheme(projectFormValue);
      }
      this.updateFeatureList();
    }

    private setFeature(index,e){
      this.featureList[index].enabled = e.target.checked;
     }
    
  private applyTheme = (projectFormValue) => {
    console.log("inside apply theme::"+projectFormValue);
         if(projectFormValue.theme =='Default')
      this.activeThem = 'citiusTechDefaultProps';
      else  if(projectFormValue.theme =='Blue')
      this.activeThem = 'primaryBlueProps';
      else if(projectFormValue.theme =='Client')
      this.activeThem = 'clientThemeProps';
      this.themService.setActiveThem(this.activeThem);
       
          

  }

  private getAllFeatures(){
    
      this.repository.getData('project/get-All-features')
      .subscribe(res => {
        this.featureList = res as Feature[];
      })
     // this.dataSource.data = this.patient;
   
  }
  
    private updateFeatureList(){
    let apiUrl = `project/update-features/`;
    this.featureList.forEach(element => {
      console.log("featureList:::"+element.enabled);
    });
   
    this.repository.update(apiUrl, this.featureList)
      .subscribe(res => {
      // alert("Success");
       this.router.navigate(['/home']);
      },
      (error => {
        // alert("Fail");
      })
    )

  }

}



