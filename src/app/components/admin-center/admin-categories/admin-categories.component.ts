import { Component, OnInit, Injectable, Inject } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthenticationService } from '../../../_services/authentication.service';
import { ProductService } from '../../../_services/product.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material'
import { Observable } from 'rxjs/Observable';
import { CategoryLogic } from '../../../_model/category-logic';
import { DialogCreateCategoryComponent } from '../../_dialogs/dialog-create-category/dialog-create-category.component';
import {MatSnackBar} from '@angular/material';

@Component({
    selector: 'app-admin-categories',
    templateUrl: 'admin-categories.component.html',
    styleUrls: ['admin-categories.component.css']
  })
export class AdminCategoriesComponent implements OnInit {
    constructor(private auth:AuthenticationService,
        private router:Router,
        private route: ActivatedRoute,
        private productService:ProductService,
        public dialog: MatDialog,
        public snackBar: MatSnackBar
      ) {
          
      }

    categories:CategoryLogic[];

	ngOnInit(): void {
        Observable.timer(500).subscribe(x => {
            // this.openDialog();
            this.loadCategories();
        });
    }

    loadCategories():void {
        this.productService.getCategories().then(r => {
            if(r.status == 'success') {
                this.categories = r.data;
            }
        });
    }

    openDialog():void {
        // this.router.navigate(["create"], {relativeTo: this.route});
        let dialogRef = this.dialog.open(DialogCreateCategoryComponent, {
            width: '300px',
            // data: {  }
          });
      
          dialogRef.afterClosed().subscribe(result => {
            if(result.success) {
                this.productService.createCategory(result.data).then(r => {
                    if(r.status == 'success') {
                        this.snackBar.open('You have successfully created the Category', null, {duration: 3000});
                        this.loadCategories();
                    } else {
                        alert("There was a problem with creating the category")
                    }
                });
            }
          });
    }
}