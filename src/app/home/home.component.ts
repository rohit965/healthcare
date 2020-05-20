import { RepositoryService } from './../shared/repository.service';
import { Patient } from './../interface/patient.model';
import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';
import { Router } from '@angular/router';
import { ThemeService } from './../theme/theme.service';
import { themes } from './../theme/themes.const';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, AfterViewInit {

//   patient: Patient[] = [
//    {
//     Mrn:"12128",
//     FirstName:"Maria",
//     LastName:"Sharma",
//     age:"30",
//     gender:"Female",
//     disease:"Diabetes",
//     attributedProvider:"Campbell Georgia",
//     reportedForMeasure:"4"
//   },
//    {
//     Mrn:"12128",
//     FirstName:"Maria",
//     LastName:"Sharma",
//     age:"30",
//     gender:"Female",
//     disease:"Diabetes",
//     attributedProvider:"Campbell Georgia",
//     reportedForMeasure:"4"
//   },
//   {
//     Mrn:"12128",
//     FirstName:"Maria",
//     LastName:"Sharma",
//     age:"30",
//     gender:"Female",
//     disease:"Diabetes",
//     attributedProvider:"Campbell Georgia",
//     reportedForMeasure:"4"
//   },
//   {
//     Mrn:"12128",
//     FirstName:"Maria",
//     LastName:"Sharma",
//     age:"30",
//     gender:"Female",
//     disease:"Diabetes",
//     attributedProvider:"Campbell Georgia",
//     reportedForMeasure:"4"
//   },
//   {
//     Mrn:"12128",
//     FirstName:"Maria",
//     LastName:"Sharma",
//     age:"30",
//     gender:"Female",
//     disease:"Diabetes",
//     attributedProvider:"Campbell Georgia",
//     reportedForMeasure:"4"
//   },
//   {
//     Mrn:"12128",
//     FirstName:"Maria",
//     LastName:"Sharma",
//     age:"30",
//     gender:"Female",
//     disease:"Diabetes",
//     attributedProvider:"Campbell Georgia",
//     reportedForMeasure:"4"
//   },
//   {
//     Mrn:"12128",
//     FirstName:"Maria",
//     LastName:"Sharma",
//     age:"30",
//     gender:"Female",
//     disease:"Diabetes",
//     attributedProvider:"Campbell Georgia",
//     reportedForMeasure:"4"
//   },
//   {
//     Mrn:"12128",
//     FirstName:"Maria",
//     LastName:"Sharma",
//     age:"30",
//     gender:"Female",
//     disease:"Diabetes",
//     attributedProvider:"Campbell Georgia",
//     reportedForMeasure:"4"
//   }
//  ];
 public displayedColumns = ['mrn','firstname', 'lastname', 'age', 'gender', 'disease', 'attributedprovider','reportedformeasure','process'];
 public dataSource = new MatTableDataSource<Patient>(); 

 @ViewChild(MatSort,{static:false}) sort: MatSort;
 @ViewChild(MatPaginator,{static:false}) paginator: MatPaginator;

 constructor(private repoService: RepositoryService,private router: Router,private themeService: ThemeService) { }

 ngOnInit() {
   this.getAllPatients();
    this.themeService.setActiveThem(this.themeService.getActiveThemeName());
 }

 ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
 }

 public getAllPatients = () => {
   this.repoService.getData('project/get-all-patient-Details')
   .subscribe(res => {
     this.dataSource.data = res as Patient[];
   })
  // this.dataSource.data = this.patient;
 }

 public doFilter = (value: string) => {
   this.dataSource.filter = value.trim().toLocaleLowerCase();
 }

 public redirectToDetails= (patient: string) =>{
   alert("clicked row::"+patient);
 }
}

