# Table component with sorting and pagination and filtering for Angular
It is a forked version of [@abdulk1/angular-6-datatable](https://github.com/abdulk1/angular-6-datatable) updated to Angular 6.

## 

## Installation

```
npm i angular-6-datatable-cc --save
```

## Usage example

AppModule.ts
```typescript
import {NgModule} from "@angular/core";
...
import {DataTableModule} from "angular-6-datatable-cc";

@NgModule({
    imports: [
        ...
        DataTableModule
    ],
    ...
})
export class AppModule {

}
```

AppComponent.html
```html
<table class="table table-striped" [mfData]="data" #mf="mfDataTable" [mfRowsOnPage]="5">
    <thead>
    <tr>
        <th style="width: 20%">
            <mfDefaultSorter by="name">Name</mfDefaultSorter>
        </th>
        <th style="width: 50%">
            <mfDefaultSorter by="email">Email</mfDefaultSorter>
        </th>
        <th style="width: 10%">
            <mfDefaultSorter by="age">Age</mfDefaultSorter>
        </th>
        <th style="width: 20%">
            <mfDefaultSorter by="city">City</mfDefaultSorter>
        </th>
    </tr>
    </thead>
    <tbody>
    <tr>
      <th scope="col">
        <mfDefaultFilter by="name" [value]="Name">
          <div class="form-group form-group-sm no-margin">
            <input [(ngModel)]="Name" type="text" name="Name" type="text" class="form-control">
          </div>
        </mfDefaultFilter>
      </th>
      <th scope="col">
        <mfDefaultFilter by="email" [value]="Email">
          <div class="form-group form-group-sm no-margin">
            <input [(ngModel)]="Email" type="text" name="Email" type="text" class="form-control">
          </div>
        </mfDefaultFilter>
      </th>
      <th scope="col">
        <mfDefaultFilter by="age" [value]="Age">
          <div class="form-group form-group-sm no-margin">
            <input [(ngModel)]="Age" type="text" name="Age" type="text" class="form-control">
          </div>
        </mfDefaultFilter>
      </th>
      <th scope="col">
        <mfDefaultFilter by="city" [value]="City">
          <div class="form-group form-group-sm no-margin">
            <input [(ngModel)]="City" type="text" name="City" type="text" class="form-control">
          </div>
        </mfDefaultFilter>
      </th>
    </tr>
    <tr *ngFor="let item of mf.data">
        <td>{{item.name}}</td>
        <td>{{item.email}}</td>
        <td class="text-right">{{item.age}}</td>
        <td>{{item.city | uppercase}}</td>
    </tr>
    </tbody>
    <tfoot>
    <tr>
        <td colspan="4">
            <mfBootstrapPaginator [rowsOnPageSet]="[5,10,25]"></mfBootstrapPaginator>
        </td>
    </tr>
    </tfoot>
</table>
```

## API

### `mfData` directive

 - selector: `table[mfData]`
 - exportAs: `mfDataTable`
 - inputs
   - `mfData: any[]` - array of data to display in table
   - `mfRowsOnPage: number` - number of rows should be displayed on page (default: 1000)
   - `mfActivePage: number` - page number (default: 1)
   - `mfSortBy: any` - sort by parameter
   - `mfSortOrder: string` - sort order parameter, "asc" or "desc"
 - outputs
   - `mfSortByChange: any` - sort by parameter
   - `mfSortOrderChange: any` - sort order parameter
 
### `mfDefaultSorter` component

 - selector: `mfDefaultSorter`
 - inputs
   - `by: any` - specify how to sort data (argument for lodash function [_.sortBy ](https://lodash.com/docs#sortBy))
 
### `mfBootstrapPaginator` component
Displays buttons for changing current page and number of displayed rows using bootstrap template (css for bootstrap is required). If array length is smaller than current displayed rows on page then it doesn't show button for changing page. If array length is smaller than min value rowsOnPage then it doesn't show any buttons.

 - selector: `mfBootstrapPaginator`
 - inputs
   - `rowsOnPageSet: number` - specify values for buttons to change number of diplayed rows
