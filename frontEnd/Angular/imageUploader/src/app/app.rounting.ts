//modulos necesarios para el routing
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//importar componentes
import { StartUploadComponent } from './components/start-upload/start-upload.component';
import { UploadInProgressComponent } from './components/upload-in-progress/upload-in-progress.component';
import { UploadFinishedComponent } from './components/upload-finished/upload-finished.component';

//Array de rutas
const appRoutes: Routes = [
    { path: '', component: StartUploadComponent }, //Ruta por defecto
    { path: 'StartUpload', component: StartUploadComponent },
    { path: 'UploadInProgress', component: UploadInProgressComponent },
    { path: 'UploadFinished', component: UploadFinishedComponent }
];

//Exportar modulo de rutas
export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoutes);

