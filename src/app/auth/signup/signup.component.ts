import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Store } from '@ngrx/store';

import { AppState } from '../../app-store/app.reducers';
import { DoSignup } from '../auth-store/auth.actions';

@Component({
	selector: 'app-signup',
	templateUrl: './signup.component.html',
	styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

	constructor(private store: Store<AppState>) { }

	ngOnInit() {
	}

	onSignup(form: NgForm) {
		this.store.dispatch(new DoSignup(form.value));
	}

}
