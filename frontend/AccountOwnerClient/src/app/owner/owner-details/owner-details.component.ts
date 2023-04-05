import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit} from '@angular/core';
import { Owner } from '../../_interfaces/owner.model';
import { Router, ActivatedRoute } from '@angular/router';
import { OwnerRepositoryService } from '../../shared/services/owner-repository.service';
import { ErrorHandlerService } from '../../shared/services/error-handler.service';

@Component({
  selector: 'app-owner-details',
  templateUrl: './owner-details.component.html',
  styleUrls: ['./owner-details.component.css']
})
export class OwnerDetailsComponent implements OnInit {
  owner: Owner;
  errorMessage: string = '';

  constructor(private repository: OwnerRepositoryService, private router: Router, 
    private activeRoute: ActivatedRoute, private errorHandler: ErrorHandlerService) { }
  
  ngOnInit() {
    this.getOwnerDetails()
  }

  getOwnerDetails = () => {
    
  }
  
}
