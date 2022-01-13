import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MemberListComponent } from './members/member-list/member-list.component';
import { FriendListComponent } from './friend-list/friend-list.component';
import { MessagesComponent } from './messages/messages.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { AuthGuard } from './_guards/auth-guard';
import { MemberDetailsComponent } from './members/member-details/member-details.component';
import { MemberEditComponent } from './members/member-edit/member-edit.component';
import { MemberEditResolver } from './_resolvers/member-edit.resolver';
import { MemberDetailsResolver } from './_resolvers/member-details.resolver';

export const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'home', component: HomeComponent },
    { path: 'members', component: MemberListComponent },
    { path: 'member/edit', component: MemberEditComponent, resolve: {user:MemberEditResolver} },
    { path: 'members/:id', component: MemberDetailsComponent, resolve: {user: MemberDetailsResolver} },
    { path: 'friends', component: FriendListComponent },
    { path: 'messages', component: MessagesComponent },
    { path: '**', component: NotfoundComponent }
];