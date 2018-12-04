import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";

import {DataTable} from "./DataTable";
import {DefaultSorter} from "./DefaultSorter";
import {Paginator} from "./Paginator";
import {BootstrapPaginator} from "./BootstrapPaginator";
import {DefaultFilter} from "./DefaultFilter";

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        DataTable,
        DefaultSorter,
        DefaultFilter,
        Paginator,
        BootstrapPaginator
    ],
    exports: [
        DataTable,
        DefaultSorter,
        DefaultFilter,
        Paginator,
        BootstrapPaginator
    ]
})
export class DataTableModule {

}