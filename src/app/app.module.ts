import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './routes/app-routing.module';
import { AppComponent } from './root/app.component';
import { CustomersPageComponent } from './pages/Customers/customers-page/customers-page.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { MainComponent } from './layout/main/main.component';
import { SideNavComponent } from './layout/main/side-nav/side-nav.component';
import { LogoComponent } from './layout/header/top-nav/logo/logo.component';
import { HamburgerComponent } from './layout/header/top-nav/hamburger/hamburger.component';
import { LeftTopNavComponent } from './layout/header/top-nav/left-top-nav/left-top-nav.component';
import { RightTopNavComponent } from './layout/header/top-nav/right-top-nav/right-top-nav.component';
import { LoggedComponent } from './layout/header/top-nav/right-top-nav/logged/logged.component';
import { NotLoggedComponent } from './layout/header/top-nav/right-top-nav/not-logged/not-logged.component';
import { PageHeaderComponent } from './components/page-header/page-header.component';
import { TopNavLinkComponent } from './layout/header/top-nav/top-nav-link/top-nav-link.component';
import { TextCapitalPipe } from './pipes/text-capital.pipe';
import { SideNavLinkComponent } from './layout/main/side-nav/side-nav-link/side-nav-link.component';
import { ErrorPageComponent } from './pages/error-page/error-page.component';
import { FormsModule } from '@angular/forms';
import { LoginPageComponent } from './pages/Users/login-page/login-page.component';
import { NewCustomerComponent } from './pages/Customers/new-customer/new-customer.component';
import { CustomerFormComponent } from './pages/Customers/customer-form/customer-form.component';
import { CustomerDetailsComponent } from './pages/Customers/customer-details/customer-details.component';
import { EditCustomerComponent } from './pages/Customers/edit-customer/edit-customer.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { CustomersFoldersComponent } from './pages/Customers/customers-display-mode/customers-folders/customers-folders.component';
import { CustomersTableComponent } from './pages/Customers/customers-display-mode/customers-table/customers-table.component';
import { DisplayModeControllersComponent } from './components/display-mode-controllers/display-mode-controllers.component';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth, getAuth } from '@angular/fire/auth';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import { SignupPageComponent } from './pages/Users/signup-page/signup-page.component';
import { SpinnerLoaderComponent } from './components/spinner-loader/spinner-loader.component';
import { AboutComponent } from './pages/about/about.component';
import { PageHeaderContactsComponent } from './components/page-header-contacts/page-header-contacts.component';
import { ContactDetailsComponent } from './pages/Contacts/contact-details/contact-details.component';
import { ContactFormComponent } from './pages/Contacts/contact-form/contact-form.component';
import { EditContactComponent } from './pages/Contacts/edit-contact/edit-contact.component';
import { NewContactComponent } from './pages/Contacts/new-contact/new-contact.component';
import { ContactsFoldersComponent } from './pages/Contacts/contact-display-mode/contacts-folders/contacts-folders.component';
import { ContactsTableComponent } from './pages/Contacts/contact-display-mode/contacts-table/contacts-table.component';
import { ContactsPageComponent } from './pages/Contacts/contacts-page/contacts-page.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomersPageComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent,
    SideNavComponent,
    LogoComponent,
    HamburgerComponent,
    LeftTopNavComponent,
    RightTopNavComponent,
    LoggedComponent,
    NotLoggedComponent,
    PageHeaderComponent,
    TopNavLinkComponent,
    TextCapitalPipe,
    SideNavLinkComponent,
    ErrorPageComponent,
    LoginPageComponent,
    NewCustomerComponent,
    CustomerFormComponent,
    CustomerDetailsComponent,
    EditCustomerComponent,
    SearchBarComponent,
    CustomersFoldersComponent,
    CustomersTableComponent,
    DisplayModeControllersComponent,
    SignupPageComponent,
    SpinnerLoaderComponent,
    AboutComponent,
    PageHeaderContactsComponent,
    ContactDetailsComponent,
    ContactFormComponent,
    EditContactComponent,
    NewContactComponent,
    ContactsFoldersComponent,
    ContactsTableComponent,
    ContactsPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    provideFirebaseApp(() => initializeApp(environment)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
