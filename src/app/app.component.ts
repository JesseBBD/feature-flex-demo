import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FeatureFlagService } from '@ffx/feature-flags';
import { environment } from '../environments/environment';

@Component({
    selector: 'app-root',
    imports: [RouterOutlet, CommonModule],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss'
})
export class AppComponent {
    environmentName = environment.name;
    title = 'demo-app';
    flags = ['ghana', 'south-africa'];

    constructor(private flagService: FeatureFlagService) {}

    getFlagStatus(flagName: string): boolean {
        const isFlagActive = this.flagService.isFlagActive(flagName);
        return isFlagActive;
    }
}
