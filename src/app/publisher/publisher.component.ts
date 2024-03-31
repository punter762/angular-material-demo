import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Publisher } from './publisher';
import { PublisherService } from './publisher.service';

@Component({
  selector: 'app-publisher',
  templateUrl: './publisher.component.html',
  styleUrls: ['./publisher.component.scss'],
})
export class PublisherComponent implements AfterViewInit {

  constructor(private _publisherService: PublisherService) {}
  displayedColumns: string[] = ['id', 'pubName', 'city', 'state','country'];

  dataSource = new MatTableDataSource<Publisher>([]);
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  ngAfterViewInit(): void {
    this._publisherService.getPublishers().subscribe((result) => {
      this.dataSource = new MatTableDataSource<Publisher>(result);
      this.dataSource.paginator = this.paginator;
    });
  }
}
