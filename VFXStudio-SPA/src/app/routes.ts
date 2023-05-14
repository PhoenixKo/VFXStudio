import {Routes} from '@angular/router';
import { HomeComponent } from './home/home.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ContactComponent } from './contact/contact.component';
import { CommentComponent } from './comment/comment.component';
import { RegisterComponent } from './register/register.component';
import { JobComponent } from './job/job.component';
import { JobviewComponent } from './jobview/jobview.component';

export const appRoutes: Routes = [
    { path: 'home', component: HomeComponent},
    { path: 'gallery', component: GalleryComponent},
    { path: 'contact', component: ContactComponent},
    { path: 'comment', component: CommentComponent},
    { path: 'register', component: RegisterComponent},
    { path: 'jobs', component: JobComponent},
    { path: 'jobs-view', component: JobviewComponent},
    { path: '**', redirectTo: 'home', pathMatch: 'full'}
];
