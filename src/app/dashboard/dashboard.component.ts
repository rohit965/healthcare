import { Feature } from './../interface/feature.model';
import { Component, OnInit } from '@angular/core';
import { RepositoryService } from '../shared/repository.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  colWidth ='';
  row2Height ='';
  row3Height ='';

  featureList: Feature[] = 
   
   [
    {projectId:'',featureName: 'Diagnosis',enabled:false,time:this.getTimeStamp() },
    {projectId:'',featureName: 'Medication',enabled:false ,time:this.getTimeStamp() },
    {projectId:'',featureName: 'Allergies',enabled:false ,time:this.getTimeStamp() },
    {projectId:'',featureName: 'Pre-Surgical Procedures',enabled:false ,time:this.getTimeStamp() },
    {projectId:'',featureName: 'Physician / Surgeons Notes',enabled:false ,time:this.getTimeStamp() },
    {projectId:'',featureName: 'Scans',enabled:false ,time:this.getTimeStamp() },
    ];

  constructor(private repository: RepositoryService,private activatedRoute: ActivatedRoute) {}
  
  ngOnInit() {
    this.getAllFeatures();
  }

  private  getTimeStamp(): Object {
    // Create a date object with the current time
    let now: Date = new Date();
    // Create an array with the current month, day and time
    let date: Array<String> = [ String(now.getMonth() + 1), String(now.getDay()), String(now.getFullYear()) ];
    // Create an array with the current hour, minute and second
    let time: Array<String> = [ String(now.getHours()), String(now.getMinutes()), String(now.getSeconds())];
    // Return the formatted string
    return { 
        date: date.join("/"),
        time: time.join(":")
    };
}

  private getAllFeatures(){
    let projectId: string = this.activatedRoute.snapshot.params['projectId'];
    let version: string = this.activatedRoute.snapshot.params['version'];
    console.log(projectId); // Print the parameter to the console. 
    this.repository.getData('project/get-All-features/'+(projectId.toString())+"/"+version.toString()+"/")
    .subscribe(res => {
      this.featureList = res as Feature[];
      this.setColWidth(this.featureList[5].enabled)
      console.log("width:::"+this.colWidth);
      this.featureList.forEach(element => {
        console.log("feature:::"+element.enabled);
      });
      this.setRow2Height();
      this.setRow3Height();
    })
    
   // this.dataSource.data = this.patient;
 
}

public setColWidth(status){
if(status)
this.colWidth ='left_col_half' ;
  else 
  this.colWidth ='left_col_full' ;
}

private setRow2Height(){
  if(this.featureList[3].enabled == true || this.featureList[4].enabled == true)
this.row2Height = 'row3_available';
else 
this.row2Height = 'row3_not_available'
  
}

private setRow3Height(){
  if(this.featureList[0].enabled == true || this.featureList[1].enabled == true || this.featureList[2].enabled == true)
this.row3Height = 'row2_available';
else 
this.row3Height = 'row2_not_available'
  
}

}
