import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'mentor/home',
    loadChildren: () => import('./mentor/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'mentor/profile',
    loadChildren: () => import('./mentor/profile/profile.module').then( m => m.ProfilePageModule)
  },
  {
    path: 'mentor/students',
    loadChildren: () => import('./mentor/students/students.module').then( m => m.StudentsPageModule)
  },
  {
    path: 'mentor/timetable',
    loadChildren: () => import('./mentor/timetable/timetable.module').then( m => m.TimetablePageModule)
  },
  {
    path: 'mentor/courses',
    loadChildren: () => import('./mentor/courses/courses.module').then( m => m.CoursesPageModule)
  },
  {
    path: 'mentor/achievements',
    loadChildren: () => import('./mentor/achievements/achievements.module').then( m => m.AchievementsPageModule)
  },
  {
    path: 'mentor/create-course',
    loadChildren: () => import('./mentor/create-course/create-course.module').then( m => m.CreateCoursePageModule)
  },
  {
    path: 'mentor/mail',
    loadChildren: () => import('./mentor/mail/mail.module').then( m => m.MailPageModule)
  },
  {
    path: 'student/courses',
    loadChildren: () => import('./student/courses/courses.module').then( m => m.CoursesPageModule)
  },
  {
    path: 'student/mentor',
    loadChildren: () => import('./student/mentor/mentor.module').then( m => m.MentorPageModule)
  },
  {
    path: 'student/request-appointment',
    loadChildren: () => import('./student/request-appointment/request-appointment.module').then( m => m.RequestAppointmentPageModule)
  },
  {
    path: 'student/timetable',
    loadChildren: () => import('./student/timetable/timetable.module').then( m => m.TimetablePageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'forgot-password',
    loadChildren: () => import('./forgot-password/forgot-password.module').then( m => m.ForgotPasswordPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
