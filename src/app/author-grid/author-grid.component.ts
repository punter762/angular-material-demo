import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { AuthorService } from '../shared/author.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Author } from '../author';

@Component({
  selector: 'app-author-grid',
  templateUrl: './author-grid.component.html',
  styleUrls: ['./author-grid.component.scss'],
})
export class AuthorGridComponent implements AfterViewInit {
  constructor(private authorService: AuthorService) {}
  displayedColumns: string[] = ['id', 'firstName', 'lastName', 'city'];

  dataSource = new MatTableDataSource<Author>([]);
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.authorService.getAuthors().subscribe((result) => {
      this.dataSource = new MatTableDataSource<Author>(result);
      this.dataSource.paginator = this.paginator;
    });
  }
}
