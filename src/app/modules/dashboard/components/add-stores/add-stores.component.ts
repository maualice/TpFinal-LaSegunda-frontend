import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from 'src/app/shared/interfaces/stores.interfaces';
import { DataService } from 'src/app/shared/services/data.service';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-add-stores',
  templateUrl: './add-stores.component.html',
  styleUrls: ['./add-stores.component.css'],
})
export class AddStoresComponent implements OnInit {
  form!: FormGroup;
  title = 'Crear Tienda';
  id!: string | null;

  constructor(
    private fb: FormBuilder,
    private dataSvc: DataService,
    private router: Router,
    private _snackbar: MatSnackBar,
    private aRouter: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      name: ['', Validators.required],
      address: ['', Validators.required],
      city: ['', Validators.required],
      openingHours: ['', Validators.required],
    });
    //console.log(this.form.value);
    this.id = this.aRouter.snapshot.paramMap.get('id');
    //console.log(this.id);
    this.esEditar();

  }

  addStore() {
    const store: Store = {
      name: this.form.value.name,
      address: this.form.value.address,
      city: this.form.value.city,
      openingHours: this.form.value.openingHours,
    };

    this.dataSvc.saveStore(store).subscribe(
      (data) =>
        this._snackbar.open('La tienda fue creada con éxito', '', {
          duration: 1500,
          horizontalPosition: 'right',
          verticalPosition: 'bottom',
          panelClass: 'green-snackbar',
        }),
      (error) => {
        console.log(error);
        this.form.reset();
      }
    );
    this.router.navigate(['/dashboard/stores']);
  }

  esEditar() {
    //console.log('editar ejecutado');
    //console.log(this.id);
    if (this.id !== null) {
      this.title = 'Editar Tienda';
      this.dataSvc.getOneStore(this.id).subscribe({
        next: (store) => {
          //console.log('store', store);
          //console.log(this.form.value);
          this.form.patchValue({
            name: store.name,
            city: store.city,
            address: store.address,
            openingHours: store.openingHours,
          });
          //console.log(this.form.value);
        },
      });
    }
  }
}
