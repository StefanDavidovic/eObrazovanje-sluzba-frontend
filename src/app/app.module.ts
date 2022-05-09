import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { StudentiComponent } from './components/studenti/studenti.component';
import { LecturersComponent } from './components/lecturers/lecturers.component';
import { SubjectsComponent } from './components/subjects/subjects/subjects.component';
import { SemesterComponent } from './components/semesters/semesters.component';
import { UploadUsersComponent } from './components/upload-users/upload-users.component';
import { PreExaminationObligationsComponent } from './components/pre-examination-obligations/pre-examination-obligations.component';
import { PaymentsComponent } from './components/payments/payments.component';
import { StudentDetailsComponent } from './components/student-details/student-details.component';
import { UpdateStudentComponent } from './components/update-student/update-student.component';
import { PassedExamsComponent } from './components/passed-exams/passed-exams.component';
import { BankAccountDetailsComponent } from './components/bank-account-details/bank-account-details.component';
import { PaymentHistoryComponent } from './components/payment-history/payment-history.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    StudentiComponent,
    LecturersComponent,
    SubjectsComponent,
    SemesterComponent,
    UploadUsersComponent,
    PreExaminationObligationsComponent,
    PaymentsComponent,
    StudentDetailsComponent,
    UpdateStudentComponent,
    PassedExamsComponent,
    BankAccountDetailsComponent,
    PaymentHistoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
