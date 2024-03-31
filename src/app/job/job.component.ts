import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { JobService } from './job.service';
import { MatTableDataSource } from '@angular/material/table';
import { Job } from '../shared/job';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-job',
  templateUrl: './job.component.html',
  styleUrls: ['./job.component.scss'],
})
export class JobComponent implements AfterViewInit {
  /**
   *
   */
  constructor(private _jobService: JobService) {}
  displayedColumns: string[] = ['id', 'description', 'minLevel', 'maxLevel'];

  dataSource = new MatTableDataSource<Job>([]);
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  ngAfterViewInit(): void {
    this._jobService.getJobs().subscribe((result) => {
      this.dataSource = new MatTableDataSource<Job>(result);
      this.dataSource.paginator = this.paginator;
    });
  }
}
