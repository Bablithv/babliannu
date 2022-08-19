import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddBrandComponent } from './add-brand/add-brand.component';
import { AddMaincategoryComponent } from './add-maincategory/add-maincategory.component';
import { AddProductComponent } from './add-product/add-product.component';
import { AddSubcategoryComponent } from './add-subcategory/add-subcategory.component';
import { BrandComponent } from './brand/brand.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { MaincategoryComponent } from './maincategory/maincategory.component';
import { NewslatersListComponent } from './newslaters-list/newslaters-list.component';
import { ProductComponent } from './product/product.component';
import { SingleCheckoutComponent } from './single-checkout/single-checkout.component';
import { SingleContactComponent } from './single-contact/single-contact.component';
import { SubcategoryComponent } from './subcategory/subcategory.component';
import { UpdateBrandComponent } from './update-brand/update-brand.component';
import { UpdateMaincategoryComponent } from './update-maincategory/update-maincategory.component';
import { UpdateProductComponent } from './update-product/update-product.component';
import { UpdateSubcategoryComponent } from './update-subcategory/update-subcategory.component';
import { UserListComponent } from './user-list/user-list.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'maincategory',component:MaincategoryComponent},
  {path:'add-maincategory',component:AddMaincategoryComponent},
  {path:'update-maincategory',component:UpdateMaincategoryComponent},
  {path:'subcategory',component:SubcategoryComponent},
  {path:'add-subcategory',component:AddSubcategoryComponent},
  {path:'update-subcategory',component:UpdateSubcategoryComponent},
  {path:'brand',component:BrandComponent},
  {path:'add-brand',component:AddBrandComponent},
  {path:'update-brand',component:UpdateBrandComponent},
  {path:'product',component:ProductComponent},
  {path:'add-product',component:AddProductComponent},
  {path:'update-product',component:UpdateProductComponent},
  {path:'admin-checkout',component:CheckoutComponent},
  {path:'admin-single-checkout',component:SingleCheckoutComponent},
  {path:'users-list',component:UserListComponent},
  {path:'newslatters-list',component:NewslatersListComponent},
  {path:'admin-contact',component:ContactComponent},
  {path:'admin-single-contact',component:SingleContactComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
