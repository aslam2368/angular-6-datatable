import {Component, Input, OnInit} from "@angular/core";
import {DataTable} from "./DataTable";

@Component({
    selector: "mfDefaultFilter",
    template: `
        <ng-content></ng-content>`
})
export class DefaultFilter implements OnInit {
    @Input("by") filterBy: string;
    @Input() set value(value: string) {
        this.filterValue = value;
        this.filterData();
    }
    filterValue: string = "";

    filterData() {
        this.mfTable.setFilter(this.filterBy, this.filterValue);
    }

    public constructor(private mfTable: DataTable) {}

    public ngOnInit(): void {
    }
}
